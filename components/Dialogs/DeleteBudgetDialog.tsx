"use client";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { useForm } from "react-hook-form";

import { z } from "zod";
import { useRouter } from "next/navigation";

import { toast, Toaster } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";

const mainSchema = z.object({
  id: z.string().min(1, { message: "Digite um ID válido" }),
  NumOrc: z.string().min(1, { message: "digite um código válido" }),
});

export default function DeleteBudgetDialog({
  status,
}: {
  status?: {
    id: any;
    NumOrc: any;
  };
}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(mainSchema) });

  const handler = async (data: any) => {
    try {
      const response = await fetch("/api/deleteBudget", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status == 200) {
        return (
          toast.success("Deletado com sucesso ") && router.push("/dashboard")
        );
      } else {
        return toast.error("ocorreu um erro. tente novamente");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Toaster />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Deletar Orçamento</DialogTitle>
          <DialogDescription>
            Voce está deletando um item. Não é possivel refazer esta ação.
          </DialogDescription>
        </DialogHeader>
        <form action="POST" onSubmit={handleSubmit(handler)}>
          <div className="flex flex-row items-center justify-center mr-6 gap-2 p-2">
            <div>
              <Label>
                Digite o <b>ID</b>
              </Label>
              <Input
                defaultValue={status?.id}
                className="max-w-[100px]"
                {...register("id")}
              ></Input>
              <div className="mt-4"></div>
            </div>

            <div>
              <Label>
                Digite o <b>Numero de Ordem</b>
              </Label>
              <Input
                defaultValue={status?.NumOrc}
                className="max-w-[100px]"
                type="text"
                {...register("NumOrc")}
              ></Input>
            </div>
          </div>
          <DialogFooter>
            <div className="flex items-center justify-between  w-full ">
              {errors.id?.message && (
                <span className="p2 text-sm mt-2 text-red-500 font-bold">
                  {errors.id.message as React.ReactNode}
                </span>
              )}
              {errors.NumOrc?.message && (
                <span className=" text-sm text-red-500 font-bold">
                  {errors.NumOrc.message as React.ReactNode}
                </span>
              )}
              <Dialog>
                <DialogTrigger>
                  <Button type="submit" className="mt-2">
                    Confirmar
                  </Button>
                </DialogTrigger>
              </Dialog>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </>
  );
}
