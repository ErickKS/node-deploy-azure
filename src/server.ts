import fastify from "fastify";
import cors from "@fastify/cors";

import { env } from "./env"

const app = fastify();

app.register(cors, {
  origin: "*",
});

app.get("/hello", () => {
  return "Hello world";
});

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log('🚀 HTTP Server Running!')
  })
