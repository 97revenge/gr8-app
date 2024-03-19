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

export default function BudgetDialog() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handler = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <div className=" ">
        <DialogContent className=" ">
          <DialogHeader>
            <DialogTitle>Registro de Orçamentos</DialogTitle>
            <DialogDescription>
              Voce está criando um item. essa opçâo pode ser excluida mais tarde
            </DialogDescription>
          </DialogHeader>
          <form action="post" onSubmit={handleSubmit(handler)}>
            <Label>Numero de Ordem</Label>
            <Input placeholder="insira" {...register("NumOrc")}></Input>
            <Label>Data de Emissao</Label>
            <Input placeholder="insira" {...register("DtEmissao")}></Input>
            <Label>Nome do Cliente</Label>
            <Input type="text" placeholder="insira" {...register("Nome_cli")} />
            <Label>Valor Total</Label>
            <Input
              placeholder="insira"
              type="text"
              {...register("ValorTotal")}
            />
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
            <DialogFooter>
              <Button type="submit" className="mt-2">
                Confirmar
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </div>
    </>
  );
}
