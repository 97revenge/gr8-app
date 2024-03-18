import { useEffect, useState } from "react";
import { ProductsType } from "@/types";
import {
  Table,
  TableCaption,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TableDemo() {
  const [products, setProducts] = useState<ProductsType>([] as any);

  useEffect(() => {
    async function fetchData() {
      try {
        const productResponse = await fetch("/api/products");
        const productsData = await productResponse.json();
        setProducts(productsData);
        console.log(products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="">
        <Table className="scroll-auto">
          <TableCaption>Lista de produtos </TableCaption>
          <TableHeader>
            <TableRow className="bg-gray-300 rounded-xl">
              <TableHead>ID</TableHead>
              <TableHead>Codigo</TableHead>
              <TableHead className="text-center">Descrição</TableHead>
              <TableHead>Código do Fornecedor</TableHead>
              <TableHead className="text-right">Fabricante</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="scroll-auto max-h-md  overflow-y-auto">
            {products.map((item) => (
              <TableRow key={item.Codigo} className="scroll-auto">
                <TableCell className="font-medium text-center text-white bg-gray-900  rounded-md">
                  {item.id}
                </TableCell>
                <TableCell className="font-medium text-center bg-white">
                  {item.Codigo}
                </TableCell>
                <TableCell className="font-medium text-start bg-white">
                  {item.Descricao}
                </TableCell>
                <TableCell className="font-medium text-center font-bold mx-10 hover:bg-gray-100">
                  {item.codFornecedor}
                </TableCell>
                <TableCell className="font-medium text-center bg-white">
                  {item.Fabricante}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              {/* <TableCell colSpan={3}>Total</TableCell> */}
              <TableCell className="text-right"></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  );
}
