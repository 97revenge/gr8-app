"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              App desenvolvido
              <strong className="font-extrabold text-green-700 text-3xl my-4 sm:block">
                {" "}
                Atráves do{" "}
                <u>
                  GR8 Sistema & Produtos <b>Legado</b>
                </u>{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Aplicacao construida emcima do <u>Microsoft Acess 2016</u>,
              reformulada e desenvolvida para a web.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => router.push("/dashboard")}
                className="block w-full rounded bg-green-600 px-12 py-3 items-center text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
