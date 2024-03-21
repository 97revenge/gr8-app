import { useForm } from "react-hook-form";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import MultipleSelector, { Option } from "../ui/multiple-selector";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const optionSchema = z.object({
  label: z.string(),
  value: z.string(),
  disable: z.boolean().optional(),
});

const OPTIONS: Option[] = [
  { label: "Shopee", value: "Shopee" },
  { label: "Mercado Livre", value: "Mercado Livre" },
  { label: "WhatsApp", value: "WhatsApp" },
  { label: "Outros", value: "Outros" },
];

const formSchema = z.object({
  client: z.string().min(2).max(50),
  date: z.string().min(1),
  email: z.string().email(),
  number: z
    .string()
    .min(9, { message: "O numero precisa de 9 caracteres" })
    .max(11, { message: "Maximo de 11 caracteres" }),
  annotation: z.string().optional(),
  shop: z.array(optionSchema).min(1),
});

export default function CreateOrderDialog() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      client: "",
      date: "",
      email: "",
      number: "",
      annotation: "",
    },
  });

  const handler = async (data: z.infer<typeof formSchema>) => {
    return alert(JSON.stringify(data));
  };

  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Registro de Pedidos</DialogTitle>
          <DialogDescription>
            Voce está criando um pedido. essa opçâo pode ser excluida mais tarde
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form action="post" onSubmit={form.handleSubmit(handler)}>
            <FormField
              control={form.control}
              name="client"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>Nome do Cliente</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Insira o nome do cliente"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <div>
                  <FormItem>
                    <FormLabel>Data do pedido</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="insira a data do pedido"
                        type="date"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <div>
                  <FormItem>
                    <FormLabel>E-mail do cliente</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="insira a data do pedido"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />

            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <div>
                  <FormItem>
                    <FormLabel>Numero do Cliente</FormLabel>
                    <FormControl>
                      <Input
                        defaultValue={"+55"}
                        placeholder="insira a numero do cliente"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />

            <FormField
              control={form.control}
              name="annotation"
              render={({ field }) => (
                <div>
                  <FormItem>
                    <FormLabel>Anotações adicionais</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Digite anotações adicionais aqui..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />

            <FormField
              control={form.control}
              name="shop"
              render={({ field }) => (
                <div>
                  <FormItem>
                    <FormLabel>Anotações adicionais</FormLabel>
                    <FormControl>
                      <MultipleSelector
                        value={field.value}
                        onChange={field.onChange}
                        defaultOptions={OPTIONS}
                        maxSelected={1}
                        onMaxSelected={() =>
                          toast.error("Voçe só pode adicionar um.")
                        }
                        placeholder="Select frameworks you like..."
                        emptyIndicator={
                          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                            no results found.
                          </p>
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />

            <Button type="submit"> enviar</Button>
          </form>
        </Form>
      </DialogContent>
    </>
  );
}
