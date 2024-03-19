"use client";

import { zodResolver } from "@hookform/resolvers/zod";
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
import CheckBoxDemo from "../CheckBoxes/CheckBoxDemo";

const CodigoSchema = z.object({
  id: z.number().optional(),
  Codigo: z.string().min(1, { message: "digite um código válido" }),
});

export default function DeleteProductDialog() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handler = async (data: any) => {
    try {
      const response = await fetch("/api/deleteProduct", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      response.status == 200
        ? toast.success("Deletado com sucesso") && router.push("/dashboard")
        : toast.error("Voçe teve um erro. Tente novamente ! ");
    } catch (err) {
      alert(JSON.stringify(err));
    }
  };

  return (
    <>
      <Toaster />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Deletar Produto</DialogTitle>
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
              <Input className="max-w-[100px]" {...register("id")}></Input>
            </div>
            <div>
              <Label>
                Digite o <b>Código</b>
              </Label>
              <Input
                className="max-w-[100px]"
                type="text"
                {...register("Codigo")}
              ></Input>
            </div>
          </div>
          <CheckBoxDemo />

          <DialogFooter>
            {errors.Codigo?.message && (
              <span className="mr-10 text-red-500 font-bold">
                {errors.Codigo.message as React.ReactNode}
              </span>
            )}
            <div>
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
