import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-sans">GUCL</h1>

      <form className="">
        <div className="flex flex-col">
          <label>Login</label>
          <input className="border border-gray-400 outline-none" />
        </div>

        <div className="flex flex-col">
          <label>Senha</label>
          <input className="border border-gray-400 outline-none" />
        </div>

        <button className="mt-4 w-full" type="submit">Entrar</button>
      </form>
    </main>
  );
}
