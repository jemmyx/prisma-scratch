import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const findAll = async () => {
  const users = await prisma.user.findMany();
  console.log("users", users);
};

const create = async () => {
  const user = await prisma.user.create({
    data: {
      name: "Raph",
      email: "raph@prisma.io",
    },
  });
  console.log(user);
};

async function main() {
  await findAll();
}

main()
  .then(async () => {
    console.log();
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
