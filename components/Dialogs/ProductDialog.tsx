import { Button } from "../ui/button";
import {
  DialogContent,
  Dialog,
  DialogClose,
  DialogFooter,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogPortal,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { useForm } from "react-hook-form";

import { ReactNode, useState } from "react";
import { products } from "@/types/zod/products";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ProductDialog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(products) });

  const handler = async (data: any) => {
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert(response.status);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Registro</DialogTitle>
          <DialogDescription>
            Voce está criando um item. essa opçâo pode ser excluida mais tarde
          </DialogDescription>
        </DialogHeader>
        <form action="POST" onSubmit={handleSubmit(handler)}>
          <Label>Código</Label>
          <Input placeholder="insira" {...register("Codigo")}></Input>
          <div>
            {errors.Codigo?.message && (
              <span className="text-red-500 font-bold">
                {errors.Codigo?.message as ReactNode}
              </span>
            )}
          </div>
          <Label>Descriçâo</Label>
          <Input placeholder="insira" {...register("Descricao")}></Input>
          <div>
            {errors.Descricao?.message && (
              <span className="text-red-500 font-bold">
                {errors.Descricao?.message as ReactNode}
              </span>
            )}
          </div>
          <Label>Código do Fornecedor</Label>
          <Input
            type="text"
            placeholder="insira"
            {...register("codFornecedor")}
          />
          {errors.codFornecedor?.message && (
            <span>{errors.codFornecedor?.message as ReactNode}</span>
          )}
          <Label>Fabricante</Label>
          <Input placeholder="insira" type="text" {...register("Fabricante")} />

          <DialogFooter>
            <div>
              <Button type="submit" className="mt-2">
                Confirmar
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </>
  );
}
