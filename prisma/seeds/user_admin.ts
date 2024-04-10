import { PrismaClient } from "@prisma/client";

export default async function user_admin(prisma: PrismaClient) {
  await prisma.user.create({
    data: {
      name: "Admin GUCL",
      email: "admin@gucl.com",
      password: "",
      role: {
        connect: {
          role: "admin"
        }
      }
    }
  });
}
