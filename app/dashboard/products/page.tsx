"use client";
import ProductDialog from "@/components/Dialogs/ProductDialog";
import TableDemo from "@/components/Tables/TableDemo";
import { Button } from "@/components/ui/button";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";

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
            <Button className="bg-blue-500">Editar </Button>
            <Button variant={"destructive"}>Excluir </Button>
          </div>
          <TableDemo />
        </div>
      </div>
    </>
  );
}
