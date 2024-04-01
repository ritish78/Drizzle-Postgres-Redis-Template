import { createClient } from "redis";

import { REDIS_URL, REDIS_HOST, REDIS_PORT } from "src/config";

//Then we can create redis client which can interact with redis
const redisClient =
  REDIS_URL || process.env.NODE_ENV === "production"
    ? createClient({ url: REDIS_URL })
    : createClient({ socket: { host: REDIS_HOST, port: REDIS_PORT } });

redisClient.on("connect", () => {
  console.log("Connected to Redis!");
});

export default redisClient;
