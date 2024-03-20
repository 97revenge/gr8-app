"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const mainSchema = z.object({
  NumOrc: z.string().min(1, { message: "Digite um numero de ordem válido" }),
  DtEmissao: z
    .string()
    .min(1, { message: "Digite uma data de emissão válida" }),
  Nome_cli: z.string().min(5, { message: "Mínimo de 5 caracteres " }),
  ValorTotal: z.string().min(1, { message: "Minímo de 2 caracteres" }),
  DescSituacao: z.string().optional(),
  DataEntrega: z.string().optional(),
  Vend_Nome: z.string().min(1, { message: "Digite o nome do vendedor" }),
});

export default function BudgetDialog() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(mainSchema),
  });

  const handler = async (data: any) => {
    try {
      const response = await fetch("/api/budget", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status == 200) {
        toast.success("ok , recebido ! ") && router.push("/dashboard");
      } else {
        toast.error("Erro ! ");
        alert(response.statusText);
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Toaster />
      <div className=" ">
        <DialogContent className=" ">
          <DialogHeader>
            <DialogTitle>Registro de Orçamentoss</DialogTitle>
            <DialogDescription>
              Voce está criando um item. essa opçâo pode ser excluida mais tarde
            </DialogDescription>
          </DialogHeader>
          <form action="post" onSubmit={handleSubmit(handler)}>
            <div>
              <Label>Numero de Ordem</Label>
              <Input placeholder="insira" {...register("NumOrc")}></Input>
              {errors.NumOrc?.message && (
                <span className="text-red-500 font-bold text-sm ">
                  {errors.NumOrc?.message as React.ReactNode}
                </span>
              )}
            </div>
            <div>
              <Label>Data e horário de Emissão</Label>
              <Input
                placeholder="insira"
                type="datetime-local"
                {...register("DtEmissao")}
              ></Input>
              {errors.DtEmissao?.message && (
                <span className="text-red-500 font-bold text-sm ">
                  {errors.DtEmissao?.message as React.ReactNode}
                </span>
              )}
            </div>
            <div>
              <Label>Nome do Cliente</Label>
              <Input
                type="text"
                placeholder="insira"
                {...register("Nome_cli")}
              />
              {errors.Nome_cli?.message && (
                <span className="text-red-500 font-bold text-sm ">
                  {errors.Nome_cli?.message as React.ReactNode}
                </span>
              )}
            </div>
            <div>
              <Label>Valor Total</Label>
              <Input
                placeholder="insira"
                type="text"
                {...register("ValorTotal")}
              />
              {errors.ValorTotal?.message && (
                <span className="text-red-500 font-bold text-sm ">
                  {errors.ValorTotal?.message as React.ReactNode}
                </span>
              )}
            </div>
            <Label>Desconto da Situacao</Label>
            <Input
              placeholder="insira"
              type="text"
              {...register("DescSituacao")}
            />

            <Label>Data de entrega</Label>
            <Input
              placeholder="insira"
              type="date"
              {...register("DataEntrega")}
            />
            <Label>Nome do Vendedor</Label>
            <Input
              placeholder="insira"
              type="text"
              {...register("Vend_Nome")}
            />
            {errors.Vend_Nome?.message && (
              <span className="text-red-500 font-bold text-sm ">
                {errors.Vend_Nome?.message as React.ReactNode}
              </span>
            )}
            <DialogFooter>
              <Button className="mt-2">Confirmar</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </div>
    </>
  );
}
