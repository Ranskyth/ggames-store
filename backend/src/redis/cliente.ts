import { createClient, RedisClientType } from "redis";

export const ClientConfig: RedisClientType = createClient({
  url: "redis://127.0.0.1:6379",
});

export async function initializeRedis(): Promise<RedisClientType> {
  ClientConfig.on("error", (err: any) =>
    console.log("Redis Client Error", err)
  );
  ClientConfig.on("connect", () => console.log("Redis Client Connected"));

  await ClientConfig.connect();

  return ClientConfig;
}