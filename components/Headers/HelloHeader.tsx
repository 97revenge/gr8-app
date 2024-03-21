"use client";

import TypographyH1 from "../Typography/TypographyH1";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CreateDialog from "../Dialogs/CreateDialog";
import OptionsButton from "../Buttons/OptionsButton";
import BudgetDialog from "../Dialogs/BudgetDialog";
import ProductDialog from "../Dialogs/ProductDialog";
import DeleteProductDialog from "../Dialogs/DeleteProductDialog";
import EditProductDialog from "../Dialogs/EditProductDialog";
import EditBudgetDialog from "../Dialogs/EditBudgetDialog";
import DeleteBudgetDialog from "../Dialogs/DeleteBudgetDialog";
import CreateOrderDialog from "../Dialogs/CreateOrderDialog";

const content: Array<React.ReactNode> = [
  <Dialog key={0}>
    <DialogTrigger asChild>
      <Button variant="outline" className="w-full bg-green-500">
        Adicionar
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px] bg-transparent border-0">
      <CreateDialog>
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          <b>Adicionar Produto ➕</b>
        </h5>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Procure pela planilha desejada :
        </p>
        <ul className="my-4 space-y-3">
          <li className=" transition-auto w-full  rounded-xl gray-300/50 shadow-xl hover:bg-gray-100">
            <Dialog>
              <DialogTrigger>
                <OptionsButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 14 14"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.88 12.39a1 1 0 0 1-.25.78a1 1 0 0 1-.75.33H2.12a1 1 0 0 1-.75-.33a1 1 0 0 1-.25-.78L2 4.5h10ZM4.5 4.5V3a2.5 2.5 0 0 1 5 0v1.5"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Produtos
                  </span>
                  <span className="bg-green-300 inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                    Popular
                  </span>
                </OptionsButton>
              </DialogTrigger>
              <ProductDialog />
            </Dialog>
          </li>
          <li className=" transition-auto w-full  rounded-xl gray-300/50 shadow-xl hover:bg-gray-100">
            <Dialog>
              <DialogTrigger>
                <OptionsButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M42.451 29.914v5.893a3.946 3.946 0 0 1-3.946 3.947H8.446A3.946 3.946 0 0 1 4.5 35.807V12.193a3.946 3.946 0 0 1 3.947-3.947h30.058a3.946 3.946 0 0 1 3.946 3.947v6.098"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M42.294 29.925H31.925a5.822 5.822 0 0 1-5.822-5.822h0a5.822 5.822 0 0 1 5.822-5.823h10.37c.665 0 1.205.54 1.205 1.206v9.234c0 .665-.54 1.205-1.206 1.205"
                    />
                    <circle
                      cx="32.458"
                      cy="24.171"
                      r="2.705"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Orçamentos
                  </span>
                </OptionsButton>
              </DialogTrigger>
              <BudgetDialog />
            </Dialog>
          </li>
          <li className="cursor-wait transition-auto w-full  rounded-xl gray-300/50 shadow-xl hover:bg-gray-100">
            <Dialog>
              <DialogTrigger>
                <OptionsButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M21 13c.6 0 1.1.2 1.4.6c.4.4.6.9.6 1.4l-8 3l-7-2V7h1.9l7.3 2.7c.5.2.8.6.8 1.1c0 .3-.1.6-.3.8c-.2.2-.5.4-.9.4H14l-1.7-.7l-.3.9l2 .8zM2 7h4v11H2z"
                    />
                  </svg>
                  <span className="cursor-wait flex-1 ms-3 whitespace-nowrap">
                    Pedidos
                  </span>
                  <span className="  cursor-wait bg-green-300 inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                    Popular
                  </span>
                </OptionsButton>
              </DialogTrigger>
              <CreateOrderDialog />
            </Dialog>
          </li>
          <Dialog>
            <DialogTrigger></DialogTrigger>
            <div>
              <BudgetDialog />
            </div>
          </Dialog>
        </ul>
      </CreateDialog>
    </DialogContent>
  </Dialog>,
  <Dialog key={1}>
    <DialogTrigger asChild>
      <Button variant="destructive" className="w-full">
        Deletar
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px] bg-transparent border-0">
      <CreateDialog>
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          <b>Deletar Item 🗑</b>
        </h5>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Procure pela planilha desejada :
        </p>
        <ul className="my-4 space-y-3">
          <li className=" transition-auto w-full  rounded-xl gray-300/50 shadow-xl hover:bg-gray-100">
            <Dialog>
              <DialogTrigger>
                <OptionsButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 14 14"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.88 12.39a1 1 0 0 1-.25.78a1 1 0 0 1-.75.33H2.12a1 1 0 0 1-.75-.33a1 1 0 0 1-.25-.78L2 4.5h10ZM4.5 4.5V3a2.5 2.5 0 0 1 5 0v1.5"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Produtos
                  </span>
                  <span className="bg-green-300 inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                    Popular
                  </span>
                </OptionsButton>
              </DialogTrigger>
              <DeleteProductDialog />
            </Dialog>
          </li>
          <li className=" transition-auto w-full  rounded-xl gray-300/50 shadow-xl hover:bg-gray-100">
            <Dialog>
              <DialogTrigger>
                <OptionsButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M42.451 29.914v5.893a3.946 3.946 0 0 1-3.946 3.947H8.446A3.946 3.946 0 0 1 4.5 35.807V12.193a3.946 3.946 0 0 1 3.947-3.947h30.058a3.946 3.946 0 0 1 3.946 3.947v6.098"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M42.294 29.925H31.925a5.822 5.822 0 0 1-5.822-5.822h0a5.822 5.822 0 0 1 5.822-5.823h10.37c.665 0 1.205.54 1.205 1.206v9.234c0 .665-.54 1.205-1.206 1.205"
                    />
                    <circle
                      cx="32.458"
                      cy="24.171"
                      r="2.705"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Orçamentos
                  </span>
                </OptionsButton>
              </DialogTrigger>
              <DeleteBudgetDialog />
            </Dialog>
          </li>
          <li className="cursor-wait transition-auto w-full  rounded-xl gray-300/50 shadow-xl hover:bg-gray-100">
            <Dialog>
              <DialogTrigger>
                <OptionsButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M21 13c.6 0 1.1.2 1.4.6c.4.4.6.9.6 1.4l-8 3l-7-2V7h1.9l7.3 2.7c.5.2.8.6.8 1.1c0 .3-.1.6-.3.8c-.2.2-.5.4-.9.4H14l-1.7-.7l-.3.9l2 .8zM2 7h4v11H2z"
                    />
                  </svg>
                  <span className="cursor-wait flex-1 ms-3 whitespace-nowrap">
                    Pedidos
                  </span>
                  <span className="  cursor-wait bg-green-300 inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                    Popular
                  </span>
                </OptionsButton>
              </DialogTrigger>
              <DialogContent>Ainda em Construção</DialogContent>
            </Dialog>
          </li>
          <Dialog>
            <DialogTrigger></DialogTrigger>
            <div>
              <BudgetDialog />
            </div>
          </Dialog>
        </ul>
      </CreateDialog>
    </DialogContent>
  </Dialog>,
  <Dialog key={2}>
    <DialogTrigger asChild>
      <Button variant="default" className="w-full bg-blue-500">
        Editar
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px] bg-transparent border-0">
      <CreateDialog>
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          <b>Editar Item ♻</b>
        </h5>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Procure pela planilha desejada :
        </p>

        <ul className="my-4 space-y-3">
          <li className=" transition-auto w-full  rounded-xl gray-300/50 shadow-xl hover:bg-gray-100">
            <Dialog>
              <DialogTrigger>
                <OptionsButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 14 14"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.88 12.39a1 1 0 0 1-.25.78a1 1 0 0 1-.75.33H2.12a1 1 0 0 1-.75-.33a1 1 0 0 1-.25-.78L2 4.5h10ZM4.5 4.5V3a2.5 2.5 0 0 1 5 0v1.5"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Produtos
                  </span>
                  <span className="bg-green-300 inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                    Popular
                  </span>
                </OptionsButton>
              </DialogTrigger>
              <EditProductDialog />
            </Dialog>
          </li>
          <li className=" transition-auto w-full  rounded-xl gray-300/50 shadow-xl hover:bg-gray-100">
            <Dialog>
              <DialogTrigger>
                <OptionsButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M42.451 29.914v5.893a3.946 3.946 0 0 1-3.946 3.947H8.446A3.946 3.946 0 0 1 4.5 35.807V12.193a3.946 3.946 0 0 1 3.947-3.947h30.058a3.946 3.946 0 0 1 3.946 3.947v6.098"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M42.294 29.925H31.925a5.822 5.822 0 0 1-5.822-5.822h0a5.822 5.822 0 0 1 5.822-5.823h10.37c.665 0 1.205.54 1.205 1.206v9.234c0 .665-.54 1.205-1.206 1.205"
                    />
                    <circle
                      cx="32.458"
                      cy="24.171"
                      r="2.705"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Orçamentos
                  </span>
                </OptionsButton>
              </DialogTrigger>
              <EditBudgetDialog />
            </Dialog>
          </li>
          <li className="cursor-wait transition-auto w-full  rounded-xl gray-300/50 shadow-xl hover:bg-gray-100">
            <Dialog>
              <DialogTrigger>
                <OptionsButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M21 13c.6 0 1.1.2 1.4.6c.4.4.6.9.6 1.4l-8 3l-7-2V7h1.9l7.3 2.7c.5.2.8.6.8 1.1c0 .3-.1.6-.3.8c-.2.2-.5.4-.9.4H14l-1.7-.7l-.3.9l2 .8zM2 7h4v11H2z"
                    />
                  </svg>
                  <span className="cursor-wait flex-1 ms-3 whitespace-nowrap">
                    Pedidos
                  </span>
                  <span className="  cursor-wait bg-green-300 inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                    Popular
                  </span>
                </OptionsButton>
              </DialogTrigger>
              <DialogContent>Ainda em Construção</DialogContent>
            </Dialog>
          </li>
          <Dialog>
            <DialogTrigger></DialogTrigger>
            <div>
              <BudgetDialog />
            </div>
          </Dialog>
        </ul>
      </CreateDialog>
    </DialogContent>
  </Dialog>,
];

export default function HelloHeader() {
  const user: string = "Visitante";
  return (
    <>
      <header>
        <div className="mx-auto max-w-screen-md px-4 py-8 sm:px-6 sm:py-12 lg:px-8  bg-gray-300/50 shadow-xl rounded-xl ">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <TypographyH1>Bem Vindo, {user}</TypographyH1>

              <p className="mt-1.5 text-sm text-gray-500">Lorem Ipsum 🎉</p>
            </div>

            <div className="mt-4 flex flex-col gap-4  sm:mt-0 sm:flex-row sm:items-center justify-between relative right-0 lg:right-6 md:right-6">
              <Carousel className=" w-auto mx-auto ">
                <CarouselContent>
                  {content.map((item, index) => (
                    <CarouselItem key={index}>{item}</CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
