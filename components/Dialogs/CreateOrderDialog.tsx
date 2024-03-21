"use client";

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
import { useState } from "react";
import { MaterialSymbolsArrowCircleRight as Right } from "../Icons/MaterialSymbolsArrowCircleRight";
import { MaterialSymbolsArrowBack as Back } from "../Icons/MaterialSymbolsArrowBack";

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

const contentSchema = z.object({
  amount: z.string(),
  unit: z.string(),
  code: z.string(),
  description: z.string(),
  unit_price: z.string(),
});

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
  content01: contentSchema,
});

export default function CreateOrderDialog() {
  const [view, setView] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      client: "",
      date: "",
      email: "",
      number: "",
      annotation: "",
      shop: [],
      content01: {},
    },
  });

  const handler = async (data: z.infer<typeof formSchema>) => {
    try {
      const instance: Partial<typeof data | any> = {
        client: data.client,
        date: data.date,
        email: data.email,
        number: data.number,
        shop: String(data.shop[0].value),
        content: [data.content01],
      };

      return alert(JSON.stringify(instance));
    } catch (err) {
      alert(err);
    }
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
            {view == false ? (
              <>
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
                            placeholder="Selecione o provedor de pedido..."
                            emptyIndicator={
                              <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                                Sem mais resultados
                              </p>
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </div>
                  )}
                />

                <div className="w-full flex items-center justify-center">
                  <Right onClick={() => setView(!view)}></Right>
                </div>

                <Button type="submit" variant={"shine"} className="w-full">
                  {" "}
                  enviar
                </Button>
              </>
            ) : (
              <div>
                Pedido 01
                <div className="grid grid-cols-2  gap-4 lg:grid-cols-3 lg:gap-8 w-full  p-2">
                  <div className="flex  items-center justify-center text-center ">
                    <FormField
                      control={form.control}
                      name="content01.amount"
                      render={({ field }) => (
                        <>
                          <FormItem>
                            <FormLabel>
                              <span className="font-bold text-md">
                                Quantidade
                              </span>{" "}
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder=" Quantidade"
                                {...field}
                                className="w-32"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        </>
                      )}
                    />
                  </div>
                  <div className="flex items-center justify-center text-center ">
                    <FormField
                      control={form.control}
                      name="content01.unit"
                      render={({ field }) => (
                        <>
                          <FormItem>
                            <FormLabel>
                              <span className="font-bold text-md">Unidade</span>{" "}
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder=" Unidade"
                                {...field}
                                className="w-32"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        </>
                      )}
                    />
                  </div>
                  <div className="flex items-center justify-center text-center ">
                    <FormField
                      control={form.control}
                      name="content01.code"
                      render={({ field }) => (
                        <>
                          <FormItem>
                            <FormLabel>
                              <span className="font-bold text-md">Código</span>{" "}
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder=" Código"
                                {...field}
                                className="w-32"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        </>
                      )}
                    />
                  </div>
                  <div className="flex items-center justify-center text-center ">
                    <FormField
                      control={form.control}
                      name="content01.unit_price"
                      render={({ field }) => (
                        <>
                          <FormItem>
                            <FormLabel>
                              <span className="font-bold text-md">
                                Preço Unitario
                              </span>{" "}
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder=" Preço Unitario"
                                {...field}
                                className="w-32"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        </>
                      )}
                    />
                  </div>
                  <div className="relative left-24 lg:left-0 flex items-center justify-start text-center w-full  ">
                    <FormField
                      control={form.control}
                      name="content01.description"
                      render={({ field }) => (
                        <>
                          <FormItem>
                            <FormLabel>
                              <span className="font-bold text-md">
                                Descrição
                              </span>{" "}
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Descrição do seu pedido"
                                {...field}
                                className="w-[250px] p-2"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        </>
                      )}
                    />
                  </div>
                </div>
                <Back onClick={() => setView(!view)}></Back>
              </div>
            )}
          </form>
        </Form>
      </DialogContent>
    </>
  );
}
