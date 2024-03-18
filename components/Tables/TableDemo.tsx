"use client";

import { ProductsType } from "@/types";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import dynamic from "next/dynamic";

export default async function TableDemo() {
  // const response = await fetch(
  //   "http://localhost:3000/api/products" || "http://gr8-app/api/products"
  // );

  // const data: ProductsType = await response.json();

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <Table className="scroll-auto">
      <TableCaption>Lista</TableCaption>
      <TableHeader>
        <TableRow className="bg-gray-300 rounded-xl">
          <TableHead>Codigo</TableHead>
          <TableHead className="text-center">Descrição</TableHead>
          <TableHead>Código do Fornecedor</TableHead>
          <TableHead className="text-right">Fabricante</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="scroll-auto max-h-md overflow-y-auto">
        {/* {data.map((item) => (
          <TableRow key={item.id} className="scroll-auto ">
            <TableCell className="font-medium text-center bg-white">
              {item.Codigo}
            </TableCell>
            <TableCell className="font-medium text-start bg-white">
              {item.Descricao}
            </TableCell>
            <TableCell className="font-medium text-center  font-bold mx-10 hover:bg-gray-100">
              {item.codFornecedor}
            </TableCell>
            <TableCell className="font-medium text-center bg-white">
              {item.Fabricante}
            </TableCell>
          </TableRow>
        ))} */}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right"></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
