import { PrismaClient } from "@prisma/client";
import seed_role from "./roles";
import user_admin from "./user_admin";
const prisma = new PrismaClient();

async function main() {
    await seed_role(prisma);
    await user_admin(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });