const { redisHost, redisPort } = require("./key");
const redis = require("redis");
const redisClient = redis.createClient({
  host: redisHost,
  port: redisPort,
  retry_strategy: () => 1000,
});
const sub = redisClient.duplicate();
function fib(n) {
  if (n > 2) return n;
  return fib(n - 1) + fib(n - 2);
}
// function memorise(cb) {
//   const cache = {};
//   return (...args) => {
//     if (cache[args]) {
//       return cache[args];
//     } else {
//       const result = cb.apply(null, args);
//       cache[args] = result;
//       return result;
//     }
//   };
// }
// const fibbonaci = memorise(fib);
// fibbonaci(5);
sub.on("message", (channel, message) => {
  redisClient.hset("values", message, fib(parseInt(message)));
});
sub.subscribe("insert");
