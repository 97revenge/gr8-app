"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import Image from "next/image";
export default function Home() {
  const router = useRouter();

  return (
    <>
      <section className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-white to-green-600    w-screen flex items-center justify-center  bg-fill bg-top lg:bg-right mr-0 lg:mr-12 md:mr-0 bg-no-repeat">
        <div className=" bg-[url(https://images.tcdn.com.br/files/1112215/themes/1/img/settings/koh.png)]  rounded-xl bg-no-repeat bg-fill bg-top absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className=" relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className=" mt-12  w-full lg:max-w-xl  text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className=" text-3xl font-extrabold sm:text-5xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="relative top-4 left-[86%] animate-bounce fill-blue-500"
              >
                <path
                  fill="currentColor"
                  d="M17 13a.26.26 0 0 0-.26.21l-.19 1.32c-.3.13-.59.29-.85.47l-1.24-.5c-.11 0-.24 0-.31.13l-1 1.73c-.06.11-.04.24.06.32l1.06.82a4.193 4.193 0 0 0 0 1l-1.06.82a.26.26 0 0 0-.06.32l1 1.73c.06.13.19.13.31.13l1.24-.5c.26.18.54.35.85.47l.19 1.32c.02.12.12.21.26.21h2c.11 0 .22-.09.24-.21l.19-1.32c.3-.13.57-.29.84-.47l1.23.5c.13 0 .26 0 .33-.13l1-1.73a.26.26 0 0 0-.06-.32l-1.07-.82c.02-.17.04-.33.04-.5s-.01-.33-.04-.5l1.06-.82a.26.26 0 0 0 .06-.32l-1-1.73c-.06-.13-.19-.13-.32-.13l-1.23.5c-.27-.18-.54-.35-.85-.47l-.19-1.32A.236.236 0 0 0 19 13zm1 3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.84 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5M10 5h2v2h-2zm6 2h-2V5h2zm-2 2h2v2h-2zm-4 0h2v2h-2zm3.11 14H2V1h18v10.29c-.63-.18-1.3-.29-2-.29V3H4v18h6v-3.5h1.03c-.03.17-.03.33-.03.5c0 1.96.81 3.73 2.11 5M8 15H6v-2h2zm0-4H6V9h2zm0-4H6V5h2zM6 17h2v2H6zm4-4h2v1.41c-.11.19-.22.39-.32.59H10z"
                />
              </svg>
              <span className="text-5xl my-2">Gerençiamento</span>
              <strong className="block font-extrabold text-green-700">
                {" "}
                Em um só lugar.{" "}
              </strong>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="relative bottom-28 left-6 animate-bounce"
              >
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7 9.5C7 8.7 7.7 8 8.5 8s1.5.7 1.5 1.5S9.3 11 8.5 11S7 10.3 7 9.5m5 7.73c-1.75 0-3.29-.73-4.19-1.81L9.23 14c.45.72 1.52 1.23 2.77 1.23s2.32-.51 2.77-1.23l1.42 1.42c-.9 1.08-2.44 1.81-4.19 1.81M15.5 11c-.8 0-1.5-.7-1.5-1.5S14.7 8 15.5 8s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5"
                />
              </svg>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Aprimorada a partir da antiga aplicação da <b>GRB</b>. Qualidade e
              facilidade significativamente superiores. 🚀
            </p>

            <div className="mt-8 w-full flex flex-wrap  items-center justify-center gap-4 text-center">
              <motion.div>
                <Button
                  size={"lg"}
                  onClick={() => {
                    return router.push("/dashboard");
                  }}
                  className="rounded-xl block w-full rounded  px-12 py-3 items-center text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
                  type="submit"
                  variant={"shine"}
                >
                  Sign in
                </Button>

                <Button
                  size={"lg"}
                  onClick={() => {
                    return router.push("/dashboard");
                  }}
                  className="rounded-xl block w-full rounded  px-12 py-3 items-center text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
                  type="submit"
                  variant={"shine"}
                >
                  Login
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
