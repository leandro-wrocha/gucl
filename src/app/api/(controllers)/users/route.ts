
import { User } from "@prisma/client";
import { UserService } from "../../(services)/user";
import { NextResponse } from "next/server";

const userService = new UserService();

export async function GET(request: Request) {
  try {
    const users: User[] = await userService.findAll();
    
    return NextResponse.json({ users }, { status: 200 });
  } catch (e) {
    console.log(e);

    return NextResponse.json({ message: "Erro ao listar usuários" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log(body);
    
    return NextResponse.json({}, { status: 201 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Erro ao criar usuário." }, { status: 500 });
  }
}
