import fastify from "fastify";

const server = fastify();

server.get("/ping", async (request, reply) => {
  return "pong\n";
});

server.get("/", async (request, reply) => {
  return "Yes sir miller!\n";
});

server.get("/prisma", async (request, reply) => {
  return "get\n";
});

server.post("/prisma", async (request, reply) => {
  return "create\n";
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
