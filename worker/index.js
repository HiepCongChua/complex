const { redisHost, redisPort } = require("./key")
const redis = require("redis")
const redisClient = redis.createClient({
  host: redisHost,
  port: redisPort,
  retry_strategy: () => 1000,
})
const sub = redisClient.duplicate()
function fib(n) {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}
sub.on("message", (channel, message) => {
  redisClient.hset("values", message, fib(parseInt(message)))
})
sub.subscribe("insert")

