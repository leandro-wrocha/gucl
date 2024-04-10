import { PrismaClient } from "@prisma/client";

interface Role {
  role: string
}

const roles: Role[] = [
  {
    role: "admin"  
  },
  {
    role: "manager"
  },
  {
    role: "user"
  }
];

export default async function seed_role(prisma: PrismaClient) {
  await prisma.role.createMany({
    data: roles,
  });
}
