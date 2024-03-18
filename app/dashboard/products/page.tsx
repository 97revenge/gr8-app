"use client";
import ProductDialog from "@/components/Dialogs/ProductDialog";
import TableDemo from "@/components/Tables/TableDemo";
import { Button } from "@/components/ui/button";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import PageLoader from "@/components/Loaders/PageLoader";
import DeleteProductDialog from "@/components/Dialogs/DeleteProductDialog";
import EditProductDialog from "@/components/Dialogs/EditProductDialog";

const DynamicTable = dynamic(() => import("@/components/Tables/TableDemo"), {
  loading: () => (
    <>
      <PageLoader />
    </>
  ),
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div className="flex  flex-col p-6 items-center justify-center w-full h-full bg-gradient-to-r from-gray-100 to-teal-100">
        <div className="p-12 mt-6">
          <div className="flex flex-row w-full h-auto  items-center justify-start gap-3 p-2">
            <Dialog>
              <DialogTrigger>
                <Button variant={"default"}>Adicionar </Button>
              </DialogTrigger>
              <ProductDialog />
            </Dialog>
            <Dialog>
              <DialogTrigger>
                <Button variant={"destructive"}>Excluir </Button>
              </DialogTrigger>
              <DeleteProductDialog />
            </Dialog>
            <Dialog>
              <DialogTrigger>
                <Button className="bg-blue-500">Editar </Button>
              </DialogTrigger>
              <EditProductDialog />
            </Dialog>
          </div>
          <DynamicTable />
        </div>
      </div>
    </>
  );
}
