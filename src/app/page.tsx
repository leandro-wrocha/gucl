"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface IFormValues {
  email: string;
  password: string;
}

export default function Home() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormValues>();

  const handleSubmitForm = async (formValues: IFormValues) => {
    try {
      // const response = await signIn("credentials", {
      //   email: formValues.email,
      //   password: formValues.password,
      //   redirect: false
      // });

    } catch (e) {
      console.log(e);
    }
  }

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-sans">GUCL</h1>

      <form className="flex flex-col gap-3 mt-5" onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="flex flex-col">
          <label>Login</label>
          <input
            className="border border-gray-400 outline-none px-2 h-8 rounded"
            type="email"
            required
            {...register("email")}
          />
        </div>

        <div className="flex flex-col">
          <label>Senha</label>
          <input 
            className="border border-gray-400 outline-none px-2 h-8 rounded" 
            type="password"
            required
            {...register("password")}
          />
        </div>

        <button className="mt-4 w-full bg-primary text-primary p-2 rounded" type="submit">Entrar</button>
      </form>
    </main>
  );
}
