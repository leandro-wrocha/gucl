import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email",  type: "email" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials, req) {
        const res = await fetch("http://localhost:3000/api/login", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        });
        const user = await res.json();
  
        if (res.ok && user) {
          return user;
        }

        return null;
      },
    })
  ],
  pages: {
    signIn: "/"
  }
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
