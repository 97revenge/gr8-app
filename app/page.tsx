"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <section className="relative bg-[url(https://images.tcdn.com.br/files/1112215/themes/1/img/settings/koh.png)] bg-fill bg-top lg:bg-right mr-0 lg:mr-12 md:mr-0 bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className=" relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className=" mt-12  w-full lg:max-w-xl  text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Todo o seu sistema
              <strong className="block font-extrabold text-green-700">
                {" "}
                Em um só lugar.{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Desenvolvida emcima da aplicação legado da <u>GRB</u> com muito
              mais qualidade e facilidade 🚀
            </p>

            <div className="mt-8 w-full flex flex-wrap  items-center justify-center gap-4 text-center">
              <Button
                size={"lg"}
                onClick={() => {
                  return router.push("/dashboard");
                }}
                className="block w-full rounded bg-green-600 px-12 py-3 items-center text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
                type="submit"
              >
                Iniciar
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
