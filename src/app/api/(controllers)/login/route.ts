import { NextResponse } from "next/server";
import prisma from "../../prisma";
import { compare } from "bcrypt";

interface ICredentials {
  email: string,
  password: string
}

export async function POST (request: Request) {
  const { email, password }: ICredentials = await request.json();

  try {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (!user) {
      return NextResponse.json({ message: "email or password invalid." }, { status: 400 });
    }

    const macthed_password = await compare(password, user.password);

    if (!macthed_password) {
      return NextResponse.json({ message: "email or password invalid." }, { status: 400 });
    }

    return NextResponse.json({ user: {email: user.email, role_id: user.role_id } }, { status: 200 });
  } catch (e) {
    console.log(e);

    return NextResponse.json({ message: "server error" }, { status: 500 });
  }
}
