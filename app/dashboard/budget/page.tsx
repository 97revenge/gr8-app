"use client";
import BudgetDialog from "@/components/Dialogs/BudgetDialog";
import DeleteBudgetDialog from "@/components/Dialogs/DeleteBudgetDialog";
import EditBudgetDialog from "@/components/Dialogs/EditBudgetDialog";
import BudgetTable from "@/components/Tables/BudgetTable";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";

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
              <BudgetDialog />
            </Dialog>
            <Dialog>
              <DialogTrigger>
                <Button className="bg-blue-500">Editar </Button>
              </DialogTrigger>
              <EditBudgetDialog />
            </Dialog>
            <Dialog>
              <DialogTrigger>
                <Button variant={"destructive"}>Excluir </Button>
              </DialogTrigger>
              <DeleteBudgetDialog />
            </Dialog>
          </div>
          <BudgetTable />
        </div>
      </div>
    </>
  );
}
