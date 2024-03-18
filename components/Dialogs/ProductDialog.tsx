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

export default function ProductDialog() {
  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Registro</DialogTitle>
          <DialogDescription>
            Voce está criando um item. essa opçâo pode ser excluida mais tarde
          </DialogDescription>
        </DialogHeader>
        <Label>Código</Label>
        <Input placeholder="insira"></Input>
        <Label>Descriçâo</Label>
        <Input placeholder="insira"></Input>
        <Label>Código do Fornecedor</Label>
        <Input type="text" placeholder="insira" />
        <Label>Fabricante</Label>
        <Input placeholder="insira" type="text" />
        <DialogFooter>
          <Button type="submit">Confirmar</Button>
        </DialogFooter>
      </DialogContent>
    </>
  );
}
