"use client";

import CubeLoader from "@/components/Loaders/CubeLoader";
import PageLoader from "@/components/Loaders/PageLoader";
import OrderTable from "@/components/Tables/OrderTable";
import { Badge } from "@/components/ui/badge";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import QRCode from "react-qr-code";

// const orderSchema = z.array(
//   z.object({
//     id: z.string().or(z.number()),
//     client: z.string(),
//     date: z.string(),
//     email: z.string(),
//     number: z.string(),
//     annotation: z.string().or(z.null()),
//     shop: z.string(),
//   })
// );

const Dynamic = dynamic(() => import("@/components/Layouts/MainLayout"), {
  loading: () => (
    <div className="w-screen h-screen flex items-center justify-center ">
      <PageLoader />
    </div>
  ),
  ssr: false,
});

const DyamicTable = dynamic(() => import("@/components/Tables/OrderTable"), {
  loading: () => (
    <>
      <div className="w-full flex items-center justify-center h-auto my-12">
        <CubeLoader />
      </div>
    </>
  ),
  ssr: false,
});

export default function Home({ params: { slug } }: { params: { slug: any } }) {
  const [order, setOrder] = useState<Array<any>>([]);
  const [content, setContent] = useState<Array<any>>([]);

  useEffect(() => {
    async function fetchOrder() {
      try {
        const response = await fetch(`/api/order?${slug}`);
        const data: Array<any> = await response.json();
        setOrder(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    async function fethContent() {
      try {
        const response = await fetch(`/api/content?${slug}`);
        const data: Array<any> = await response.json();
        setContent(data);
      } catch (err) {
        alert(err);
      }
    }
    fetchOrder();
    fethContent();
  }, []);

  return (
    <>
      {order.map((order, index) => {
        return (
          <Dynamic key={index}>
            <div className="w-screen h-screen p-2 ">
              <div className="px-12">
                <div className=" shadow-xl relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
                  <span
                    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-green-800 to-lime-600"
                    gap-4
                  ></span>

                  <div className="sm:flex sm:justify-between sm:gap-4">
                    <div>
                      <h3 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        <b>ID do pedido</b> : {order?.id}
                      </h3>

                      <p className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        Cliente : <b>{order?.client}</b>
                      </p>

                      <p className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        Email : <b>{order?.email}</b>
                      </p>
                      <p className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        Numero do cliente : <b>{order?.number}</b>
                      </p>
                    </div>

                    <div className="hidden sm:block sm:shrink-0">
                      <QRCode
                        size={250}
                        style={{
                          height: "auto",
                          maxWidth: "100%",
                          width: "100%",
                        }}
                        value={`https://jmluzearte-dashboard.vercel.app/order/${slug}`}
                        viewBox={`0 0 256 256`}
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-pretty text-sm text-gray-500">
                      <div>{JSON.stringify(order?.annotation)}</div>
                      Esta será o lugar da descrição do pedido. Aqui estarao
                      informacoes adicionais sobre o pedido e etc...
                    </p>
                  </div>
                  <div className="flex flex-row gap-x-2"></div>

                  <dl className="mt-6 flex gap-4 sm:gap-6">
                    <div className="flex flex-col-reverse">
                      <dd className="text-xs text-gray-500 hover:underline">
                        {" "}
                        {order?.date}
                      </dd>
                      <dt className="text-sm font-medium text-gray-600">
                        Data do Pedido
                      </dt>
                    </div>

                    <div className="flex flex-col-reverse">
                      <dt className="text-sm font-medium text-gray-600">
                        <Badge>{order?.shop}</Badge>
                      </dt>
                      <dd className="text-xs text-gray-500">
                        Provedor de compra
                      </dd>
                    </div>
                  </dl>
                  <div>
                    <DyamicTable invoice={slug} />
                  </div>
                </div>
              </div>
            </div>
          </Dynamic>
        );
      })}
    </>
  );
}
