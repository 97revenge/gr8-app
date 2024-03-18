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

import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";

export default function ProductDialog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const handler = (data: any) => {
    return alert(JSON.stringify(data));
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
          {errors.Codigo?.message && (
            <span>{errors.Codigo?.message as ReactNode}</span>
          )}
          <Label>Descriçâo</Label>
          <Input placeholder="insira" {...register("Descricao")}></Input>
          {errors.Descricao?.message && (
            <span>{errors.Descricao?.message as ReactNode}</span>
          )}
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
          {errors.Fabricante?.message && (
            <span>{errors.Fabricante?.message as ReactNode}</span>
          )}
          <DialogFooter>
            <Button type="submit">Confirmar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </>
  );
}
