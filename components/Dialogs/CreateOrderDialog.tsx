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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";

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

const uniType: Option[] = [
  { label: "Centimetros", value: "Centimetros" },
  { label: "Metros", value: "Metros" },
  { label: "Unidade", value: "Unidade" },
];

const mainContentSchema = z.object({
  amount: z.string(),
  unit: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
      disable: z.boolean().optional(),
    })
  ),
  code: z.string(),
  description: z.string(),
  unit_price: z.string(),
});

const mainSchema = z.object({
  amount: z.string().optional(),
  unit: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
      disable: z.boolean().optional(),
    })
  ),
  code: z.string().optional(),
  description: z.string().optional(),
  unit_price: z.string().optional(),
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
  content01: mainContentSchema,
  content02: mainSchema,
  content03: mainSchema,
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
        content: [
          {
            amount: data.content01.amount,
            unit: data.content01.unit[0].label,
            code: data.content01.code,
            description: data.content01.description,
            unit_price: data.content01.unit_price,
          },
          {
            amount: data.content02.amount,
            unit: data.content02.unit[0].label,
            code: data.content02.code,
            description: data.content02.description,
            unit_price: data.content02.unit_price,
          },
          {
            amount: data.content03.amount,
            unit: data.content03.unit[0].label,
            code: data.content03.code,
            description: data.content03.description,
            unit_price: data.content03.unit_price,
          },
        ],
      };

      const response = await fetch("/api/order", {
        method: "POST",
        body: JSON.stringify(instance),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status == 200 || response.statusText == "OK") {
        return toast.success("Pedido enviado com sucesso");
      } else {
        toast.error("Não Enviado!!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <DialogContent className="w-[600px]">
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
                            placeholder="Insira o E-mail do cliente"
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
                          <Input
                            type="text"
                            className="h-12 flex items-start justify-start"
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
                        <FormLabel>Pedido feito pelo:</FormLabel>
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
                <Carousel>
                  <CarouselContent className="border border-0">
                    {Array.from([
                      <div className="" key={0}>
                        <Badge className="font-bold p-2 my-1 ">
                          <span className="animate-pulse">Pedido 01</span>
                        </Badge>

                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 flex items-center justify-center  border border-2 p-1 rounded-xl mb-2">
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
                                      <span className="font-bold text-md">
                                        Unidade
                                      </span>{" "}
                                    </FormLabel>
                                    <FormControl>
                                      <MultipleSelector
                                        className="w-36 px-2"
                                        value={field.value}
                                        onChange={field.onChange}
                                        defaultOptions={uniType}
                                        maxSelected={1}
                                        onMaxSelected={() =>
                                          toast.error(
                                            "Voçe só pode adicionar um."
                                          )
                                        }
                                        placeholder="Selecione unidade"
                                        emptyIndicator={
                                          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                                            Sem mais resultados
                                          </p>
                                        }
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
                                      <span className="font-bold text-md">
                                        Código
                                      </span>{" "}
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
                        </div>
                        <div className="border border-2 p-1 rounded-xl flex items-center justify-start text-start w-full p-2  ">
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
                                      className="w-[400px] p-2"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              </>
                            )}
                          />
                        </div>
                      </div>,
                      <div className="" key={1}>
                        <Badge className="font-bold p-2 my-1">
                          <span className="animate-pulse">Pedido 02</span>
                        </Badge>

                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 flex items-center justify-center  border border-2 p-1 rounded-xl mb-2">
                          <div className="flex  items-center justify-center text-center ">
                            <FormField
                              control={form.control}
                              name="content02.amount"
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
                              name="content02.unit"
                              render={({ field }) => (
                                <>
                                  <FormItem>
                                    <FormLabel>
                                      <span className="font-bold text-md">
                                        Unidade
                                      </span>{" "}
                                    </FormLabel>
                                    <FormControl>
                                      <MultipleSelector
                                        className="w-36 px-2"
                                        value={field.value}
                                        onChange={field.onChange}
                                        defaultOptions={uniType}
                                        maxSelected={1}
                                        onMaxSelected={() =>
                                          toast.error(
                                            "Voçe só pode adicionar um."
                                          )
                                        }
                                        placeholder="Selecione unidade"
                                        emptyIndicator={
                                          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                                            Sem mais resultados
                                          </p>
                                        }
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
                              name="content02.code"
                              render={({ field }) => (
                                <>
                                  <FormItem>
                                    <FormLabel>
                                      <span className="font-bold text-md">
                                        Código
                                      </span>{" "}
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
                              name="content02.unit_price"
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
                        </div>
                        <div className="border border-2 p-1 rounded-xl flex items-center justify-start text-start w-full p-2  ">
                          <FormField
                            control={form.control}
                            name="content02.description"
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
                                      className="w-[400px] p-2"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              </>
                            )}
                          />
                        </div>
                      </div>,
                      <div className="" key={2}>
                        <Badge className="font-bold p-2 my-1">
                          <span className="animate-pulse">Pedido 03</span>
                        </Badge>

                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 flex items-center justify-center  border border-2 p-1 rounded-xl mb-2">
                          <div className="flex  items-center justify-center text-center ">
                            <FormField
                              control={form.control}
                              name="content03.amount"
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
                              name="content03.unit"
                              render={({ field }) => (
                                <>
                                  <FormItem>
                                    <FormLabel>
                                      <span className="font-bold text-md">
                                        Unidade
                                      </span>{" "}
                                    </FormLabel>
                                    <FormControl>
                                      <MultipleSelector
                                        className="w-36 px-2"
                                        value={field.value}
                                        onChange={field.onChange}
                                        defaultOptions={uniType}
                                        maxSelected={1}
                                        onMaxSelected={() =>
                                          toast.error(
                                            "Voçe só pode adicionar um."
                                          )
                                        }
                                        placeholder="Selecione unidade"
                                        emptyIndicator={
                                          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                                            Sem mais resultados
                                          </p>
                                        }
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
                              name="content03.code"
                              render={({ field }) => (
                                <>
                                  <FormItem>
                                    <FormLabel>
                                      <span className="font-bold text-md">
                                        Código
                                      </span>{" "}
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
                              name="content03.unit_price"
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
                        </div>
                        <div className="border border-2 p-1 rounded-xl flex items-center justify-start text-start w-full p-2  ">
                          <FormField
                            control={form.control}
                            name="content03.description"
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
                                      className="w-[400px] p-2"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              </>
                            )}
                          />
                        </div>
                      </div>,
                    ]).map((item, index) => (
                      <>
                        <CarouselItem key={index} className="w-32">
                          <Card>
                            <CardContent>{item}</CardContent>
                          </Card>
                        </CarouselItem>
                      </>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <div className="w-full ">
                  <Button onClick={() => setView(!view)} className="w-full">
                    {" "}
                    Voltar e concluir pedido
                  </Button>
                </div>
              </div>
            )}
          </form>
        </Form>
      </DialogContent>
    </>
  );
}
