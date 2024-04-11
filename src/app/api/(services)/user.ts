import { User } from "@prisma/client";
import prisma from "../prisma";

interface UserStore {
  name?: string;
  email: string;
  password: string;
}

interface UserRepository {
  findAll(): Promise<User[]>;
  store(): Promise<boolean>;
}

export class UserService implements UserRepository {
  private prisma;

  constructor() {
    this.prisma = prisma;
  }
  
  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async store(): Promise<boolean> {
    return true;
  }
}
