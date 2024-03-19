"use client";

import DashboardCards from "@/components/Cards/DashboardCards";

import HelloHeader from "@/components/Headers/HelloHeader";
import PageLoader from "@/components/Loaders/PageLoader";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { BudgetsType, ProductsType } from "@/types";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

import { Toaster, toast } from "react-hot-toast";

const PageDynamic = dynamic(() => import("@/components/Layouts/MainLayout"), {
  loading: () => (
    <>
      <div className="w-auto h-auto bg-white flex items-center justify-center">
        <PageLoader />
      </div>
    </>
  ),
  ssr: false,
});

const Dynamic = dynamic(() => import("@/components/Tables/TableDemo"), {
  loading: () => (
    <>
      <div className="w-screen h-screen flex items-center justify-center bg-blue-200">
        loading
      </div>
    </>
  ),
  ssr: false,
});

const DynamicH1 = dynamic(
  () => import("@/components/Typography/TypographyH1"),
  {
    loading: () => (
      <>
        <div role="status" className="w-auto animate-pulse">
          <div className="h-12 p-2 my-2 bg-gray-200 rounded-xl w-auto dark:bg-gray-700 w-48 "></div>
        </div>
      </>
    ),
    ssr: false,
  }
);

const DynamicH4 = dynamic(
  () => import("@/components/Typography/TypographyH4"),
  {
    loading: () => (
      <>
        <div role="status" className="w-auto animate-pulse">
          <div className="h-6 bg-gray-200 rounded-xl dark:bg-gray-700 w-48 "></div>
        </div>
      </>
    ),
    ssr: false,
  }
);

const DynamicH3 = dynamic(
  () => import("@/components/Typography/TypographyH3"),
  {
    loading: () => (
      <>
        <div role="status" className="w-auto animate-pulse">
          <div className="mt-12 h-6 bg-gray-200 rounded-xl dark:bg-gray-700 w-48 "></div>
        </div>
      </>
    ),
    ssr: false,
  }
);

export default function Page() {
  const router = useRouter();

  const [budget, setBudget] = useState<BudgetsType>([]);
  const [products, setProducts] = useState<ProductsType>([] as any);

  useEffect(() => {
    async function fetchData() {
      try {
        const [productResponse, budgetResponse] = await Promise.all([
          fetch("/api/products"),
          fetch("/api/budget"),
        ]);
        const productsData = await productResponse.json();
        const budgetData = await budgetResponse.json();
        setProducts(productsData);
        setBudget(budgetData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Toaster position="top-center" />
      <HelloHeader />
      <div className="my-4 bg-gray-300/50 shadow-xl rounded-xl mx-12 md:mx-44 lg:mx-44 grid grid-col-3 auto-rows-auto ">
        <PageDynamic>
          <DashboardCards>
            <CardHeader className="border-b-2 border-success-600 px-6 py-3 bg-gray-100 ">
              <DynamicH3>
                <div className="flex items-start justify-between">
                  Produtos
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 14 14"
                      className="fill-current text-green-600"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12.88 12.39a1 1 0 0 1-.25.78a1 1 0 0 1-.75.33H2.12a1 1 0 0 1-.75-.33a1 1 0 0 1-.25-.78L2 4.5h10ZM4.5 4.5V3a2.5 2.5 0 0 1 5 0v1.5"
                      />
                    </svg>
                  </div>
                </div>
              </DynamicH3>
            </CardHeader>
            <CardContent className=" transition-all p-6 bg-white back hover:m-2 hover:rounded-xl">
              <DynamicH1>{products.length}</DynamicH1>
              <h5 className="mb-2 text-xl font-medium leading-tight text-success-600">
                Itens Cadastrados
              </h5>
            </CardContent>
            <CardFooter className="border-t-2 border-success-600 px-6 py-3 bg-gray-100">
              <div className="w-full">
                <DynamicH4>
                  <Button
                    className="w-full "
                    onClick={() => router.push("/dashboard/products")}
                  >
                    Acesso
                  </Button>
                </DynamicH4>
              </div>
            </CardFooter>
          </DashboardCards>
          <DashboardCards>
            <CardHeader className="border-b-2 border-success-600 px-6 py-3 bg-gray-100 ">
              <DynamicH3>
                <div className="flex items-start justify-between">
                  Orçamento
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 48 48"
                      className="fill-current text-green-600"
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
                  </div>
                </div>
              </DynamicH3>
            </CardHeader>
            <CardContent className=" transition-all p-6 bg-white back hover:m-2 hover:rounded-xl">
              <DynamicH1>{budget.length}</DynamicH1>
              <h5 className="mb-2 text-xl font-medium leading-tight text-success-600">
                Itens Cadastrados
              </h5>
            </CardContent>
            <CardFooter className="border-t-2 border-success-600 px-6 py-3 bg-gray-100">
              <div className="w-full">
                <DynamicH4>
                  <Button
                    className="w-full "
                    onClick={() => router.push("/dashboard/budget")}
                  >
                    Acesso
                  </Button>
                </DynamicH4>
              </div>
            </CardFooter>
          </DashboardCards>
          <DashboardCards>
            <CardHeader className="border-b-2 border-success-600 px-6 py-3 bg-gray-100  ">
              <DynamicH3>
                <div className="flex items-start justify-between">
                  Pedidos
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 48 48"
                      className="fill-current text-green-600"
                    >
                      <defs>
                        <mask id="ipSAddMode0">
                          <g
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="4"
                          >
                            <path
                              fill="#fff"
                              stroke="#fff"
                              d="m24.003 4l5.27 5.27h9.457v9.456l5.27 5.27l-5.27 5.278v9.456h-9.456L24.004 44l-5.278-5.27H9.27v-9.456L4 23.997l5.27-5.27V9.27h9.456z"
                            />
                            <path
                              stroke="#000"
                              d="M17 23.997h14M24.004 17v14"
                            />
                          </g>
                        </mask>
                      </defs>
                      <path
                        fill="currentColor"
                        d="M0 0h48v48H0z"
                        mask="url(#ipSAddMode0)"
                      />
                    </svg>
                  </div>
                </div>
              </DynamicH3>
            </CardHeader>
            <CardContent className=" transition-all p-6 bg-white back hover:m-2 hover:rounded-xl">
              <DynamicH1>0</DynamicH1>
              <h5 className="mb-2 text-xl font-medium leading-tight text-success-600">
                Itens Cadastrados
              </h5>
            </CardContent>
            <CardFooter className="border-t-2 border-success-600 px-6 py-3 bg-gray-100">
              <div className="w-full">
                <DynamicH4>
                  <Button
                    className="w-full cursor-wait "
                    onClick={(e) => e.preventDefault()}
                  >
                    Acesso
                  </Button>
                </DynamicH4>
              </div>
            </CardFooter>
          </DashboardCards>
        </PageDynamic>
      </div>
    </>
  );
}
