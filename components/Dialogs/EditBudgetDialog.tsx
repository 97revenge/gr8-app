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

// const productSchema = z.object({
//   id: z.string().min(1, { message: "voce precisa colocar o ID correto" }),
//   Codigo: z
//     .string()
//     .min(1, { message: "voce precisa colocar o código correto" }),
//   Descricao: z.string().optional(),
//   codFornecedor: z.string().optional(),
//   Fabricante: z.string().optional(),
// });

const mainSchema = z.object({
  id: z.string().min(1, { message: "voce colocar o ID correto" }),
  NumOrc: z
    .string()
    .min(1, { message: "voce precisa coloca o codigo de ordem correto" }),
  DtEmissao: z.string().optional(),
  Nome_cli: z.string().optional(),
  ValorTotal: z.string().optional(),
  DescSituacao: z.string().optional(),
  DataEntrega: z.string().optional(),
  Vend_Nome: z.string().optional(),
});

export default function EditBudgetDialog() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(mainSchema),
  });

  const handler = async (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <Toaster />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Orçamento</DialogTitle>
          <DialogDescription>
            Voce está editando um item. <b>Voce pode re-editar esta ação</b> .
          </DialogDescription>
        </DialogHeader>
        <form action="post" onSubmit={handleSubmit(handler)}>
          <div>
            <Label>Digite o ID do item </Label>
            <Input
              className="max-w-[100px]"
              type="text"
              {...register("id")}
            ></Input>
            {errors.id?.message && (
              <span className="text-sm font-bold text-red-500">
                {errors.id.message as ReactNode}
              </span>
            )}
          </div>
          <div>
            <Label>Digite o Numero de Ordem</Label>
            <Input
              className="max-w-[100px]"
              type="text"
              {...register("NumOrc")}
            ></Input>
            {errors.NumOrc?.message && (
              <span className="text-sm font-bold text-red-500">
                {errors.NumOrc.message as ReactNode}
              </span>
            )}
          </div>

          <div className="p-2  border border-2 rounded-xl my-2">
            <Label>Editar Data de emissão</Label>
            <Input type="datetime-local" {...register("DtEmissao")}></Input>

            <Label>Editar Nome do Cliente</Label>
            <Input type="text" {...register("Nome_cli")}></Input>

            <Label>Editar Valor Total</Label>
            <Input type="text" {...register("ValorTotal")}></Input>
            <Label>Editar Desconto</Label>
            <Input type="text" {...register("DescSituacao")}></Input>
            <Label>Editar Data de Entrega</Label>
            <Input type="date" {...register("DataEntrega")}></Input>
            <Label>Editar Nome do Vendedor</Label>
            <Input type="text" {...register("Vend_Nome")}></Input>
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
