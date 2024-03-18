"use client";

import DashboardCards from "@/components/Cards/DashboardCards";
import HelloHeader from "@/components/Headers/HelloHeader";
import PageLoader from "@/components/Loaders/PageLoader";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { BudgetsType, ProductsType } from "@/types";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

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

export default async function Page() {
  const router = useRouter();

  const productResponse = await fetch("http://localhost:3000/api/products", {
    next: { revalidate: 3600 },
  });

  const budgetResponse = await fetch("http://localhost:3000/api/budget", {
    next: { revalidate: 3600 },
  });

  const budget: BudgetsType = await budgetResponse.json();
  const products: ProductsType = await productResponse.json();

  return (
    <>
      <HelloHeader />
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
                {productResponse.status == 200 && (
                  <>
                    <Button
                      className="w-full "
                      onClick={() => router.push("/dashboard/products")}
                    >
                      Acesso
                    </Button>
                  </>
                )}
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
                {productResponse.status == 200 && (
                  <>
                    <Button
                      className="w-full "
                      onClick={() => router.push("/dashboard/budget")}
                    >
                      Acesso
                    </Button>
                  </>
                )}
              </DynamicH4>
            </div>
          </CardFooter>
        </DashboardCards>
      </PageDynamic>
    </>
  );
}
