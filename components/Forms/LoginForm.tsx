import Image from "next/image";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function LoginForm() {
  return (
    <>
      <section className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] h-screen from-white via-white to-green-600 dark:bg-green-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-green-900 dark:text-white"
          >
            <div className="w-full flex items-center justify-center">
              <Image
                src={
                  "https://images.tcdn.com.br/files/1112215/themes/1/img/settings/koh.png"
                }
                width={400}
                height={100}
                quality={100}
                alt="icon dagel"
                className="rounded-xl"
              />
            </div>
          </a>
          <Card className="w-full bg-white rounded-lg shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-green-800 dark:border-green-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-green-900 md:text-2xl dark:text-white">
                Entre com a sua conta 🚀
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-green-900 dark:text-white"
                  >
                    Login
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-green-50 border border-green-300 text-green-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="dagel@dagel.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-green-900 dark:text-white"
                  >
                    Senha
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-green-50 border border-green-300 text-green-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-green-300 rounded bg-green-50 focus:ring-3 focus:ring-primary-300 dark:bg-green-700 dark:border-green-600 dark:focus:ring-primary-600 dark:ring-offset-green-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-green-300"
                      >
                        Lembre da minha conta
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Esqueceu sua senha?
                  </a>
                </div>
                <Button
                  type="submit"
                  variant={"shine"}
                  className="w-full text-white  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
