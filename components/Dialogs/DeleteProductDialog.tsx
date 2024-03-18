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

const CodigoSchema = z.object({
  Codigo: z.string().min(1, { message: "digite um código válido" }),
});

export default function DeleteProductDialog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CodigoSchema),
  });

  const handler = async (data: any) => {
    try {
      const { Codigo } = data;

      const response = await fetch("/api/deleteProduct", {
        method: "POST",
        body: JSON.stringify(Codigo),
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert(response.text);
    } catch (err) {
      console.log(err);
    }

    return alert(JSON.stringify(data));
  };

  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Deletar Item</DialogTitle>
          <DialogDescription>
            Voce está deletando um item. Não é possivel refazer esta ação.
          </DialogDescription>
        </DialogHeader>
        <form action="POST" onSubmit={handleSubmit(handler)}>
          <Label>Digite o código do item</Label>
          <Input
            className="max-w-[100px]"
            type="text"
            {...register("Codigo")}
          ></Input>
          {errors.Codigo?.message && (
            <span className="text-red-500 font-bold">
              {errors.Codigo.message as React.ReactNode}
            </span>
          )}

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
