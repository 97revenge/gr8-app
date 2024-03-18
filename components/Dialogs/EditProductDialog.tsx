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

export default function EditProductDialog() {
  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Item</DialogTitle>
          <DialogDescription>
            Voce está deletando um item. Não é possivel refazer esta ação.
          </DialogDescription>
        </DialogHeader>
        <form
          action="POST"
          onSubmit={(e) => {
            return e.preventDefault();
          }}
        >
          <Label>Digite o código do item</Label>
          <Input className="max-w-[100px]" type="text"></Input>

          <Label>Editar Descrição</Label>
          <Input type="text"></Input>

          <Label>Editar Código do Fornecedor</Label>
          <Input type="text"></Input>

          <Label>Editar Fabricante</Label>
          <Input type="text"></Input>

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
