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

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ReactNode } from "react";

import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const productSchema = z.object({
  id: z.string().min(1, { message: "voce precisa colocar o ID correto" }),
  Codigo: z
    .string()
    .min(1, { message: "voce precisa colocar o código correto" }),
  Descricao: z.string().optional(),
  codFornecedor: z.string().optional(),
  Fabricante: z.string().optional(),
});

export default function EditProductDialog({
  status,
}: {
  status?: { id: any; Codigo: any };
}) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  const handler = async (data: any) => {
    try {
      const response = await fetch("/api/editProduct", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      response.status == 200
        ? toast.success("Editado com sucesso") && router.push("/dashboard")
        : toast.error("Voçe teve um erro. Tente novamente");
    } catch (err) {
      alert(JSON.stringify(err));
    }
  };

  return (
    <>
      <Toaster />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Produto</DialogTitle>
          <DialogDescription>
            Voce está editando um item. <b>Voce pode re-editar esta ação</b> .
          </DialogDescription>
        </DialogHeader>
        <form action="POST" onSubmit={handleSubmit(handler)}>
          <div>
            <Label>Digite o ID do item </Label>
            <Input
              className="max-w-[100px]"
              type="text"
              defaultValue={status?.id}
              {...register("id")}
            ></Input>
            {errors.id?.message && (
              <span className="text-sm font-bold text-red-500">
                {errors.id.message as ReactNode}
              </span>
            )}
          </div>
          <div>
            <Label>Digite o código do item</Label>
            <Input
              className="max-w-[100px]"
              type="text"
              {...register("Codigo")}
              defaultValue={status?.Codigo}
            ></Input>
            {errors.Codigo?.message && (
              <span className="text-sm font-bold text-red-500">
                {errors.Codigo.message as ReactNode}
              </span>
            )}
          </div>

          <div className="p-2 border border-2 rounded-xl my-2">
            <Label>Editar Descrição</Label>
            <Input type="text" {...register("Descricao")}></Input>

            <Label>Editar Código do Fornecedor</Label>
            <Input type="text" {...register("codFornecedor")}></Input>

            <Label>Editar Fabricante</Label>
            <Input type="text" {...register("Fabricante")}></Input>
          </div>
          <DialogFooter>
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
