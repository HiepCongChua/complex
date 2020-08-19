const {
  pgDatabase,
  pgPassword,
  pgUser,
  pgPort,
  pgHost,
  redisHost,
  redisPort,
} = require("./key")
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
app.use(cors())
app.use(bodyParser.json())
const { Pool } = require("pg")
const pgClient = new Pool({
  user: pgUser,
  host: pgHost,
  database: pgDatabase,
  password: pgPassword,
  port: pgPort,
})
pgClient.on("error", (err) => console.log("Postgres error", err.message))
pgClient.on("connect", () => {
  pgClient
    .query("CREATE TABLE IF NOT EXISTS values (number INT)")
    .catch((err) => console.log(err))
})

// Redis Clent Setup
const redis = require("redis")
// const { redisPort } = require("./key")
const redisClient = redis.createClient({
  host: redisHost,
  port: redisPort,
  retry_strategy: () => 1000,
})
const redisPublisher = redisClient.duplicate()
app.get("/", (req, res) => {
  res.send("Hi")
})

app.get("/values/all", async (req, res) => {
  const values = await pgClient.query("SELECT * from values")

  res.send(values.rows)
})

app.get("/values/current", async (req, res) => {
  redisClient.hgetall("values", (err, values) => {
    res.send(values)
  })
})

app.post("/values", async (req, res) => {
  const index = req.body.index

  if (parseInt(index) > 40) {
    return res.status(422).send("Index too high")
  }

  redisClient.hset("values", index, "Nothing yet!")
  redisPublisher.publish("insert", index)
  pgClient.query("INSERT INTO values(number) VALUES($1)", [index])

  res.send({ working: true })
})
app.listen(5000, () => console.log("Server is listening on port 5000"))
