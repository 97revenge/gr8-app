import { useEffect, useState } from "react";
import { BudgetsType } from "@/types";
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

export default function BudgetTable() {
  const [budget, setBudget] = useState<BudgetsType>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const productResponse = await fetch("/api/budget");
        const productsData = await productResponse.json();
        setBudget(productsData);
        console.log(budget);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <Table className="scroll-auto">
          <TableCaption>Lista de orçamentos </TableCaption>
          <TableHeader>
            <TableRow className="bg-gray-300 rounded-xl">
              <TableHead>ID</TableHead>
              <TableHead>Numero de Ordem</TableHead>
              <TableHead className="text-center">Data de emissão</TableHead>
              <TableHead>Nome do Cliente</TableHead>
              <TableHead className="text-center">Valor Total</TableHead>
              <TableHead className="text-center">Andamento</TableHead>
              <TableHead className="text-center">Data de Entrega</TableHead>
              <TableHead className="text-center">Nome do Vendedor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="scroll-auto max-h-md overflow-y-auto">
            {budget.map((item) => (
              <TableRow key={item.id} className="scroll-auto">
                <TableCell className="font-medium border border-x-2 text-center text-white bg-gray-900  rounded-md">
                  {item.id}
                </TableCell>
                <TableCell className="font-medium text-center bg-white border border-x-2">
                  {item.NumOrc}
                </TableCell>
                <TableCell className="font-medium text-start bg-white border border-x-2">
                  {item.DtEmissao}
                </TableCell>
                <TableCell className="font-medium text-center font-bold mx-10 hover:bg-gray-100 border border-x-2">
                  {item.Nome_cli}
                </TableCell>
                <TableCell className="font-medium text-center bg-white border border-x-2">
                  {item.ValorTotal}
                </TableCell>
                <TableCell
                  className={
                    item.DescSituacao == "A Confirmar"
                      ? "font-medium text-center text-green-500 border border-x-2"
                      : "font-medium text-center text-red-500 border border-x-2"
                  }
                >
                  {item.DescSituacao}
                </TableCell>
                <TableCell className="font-medium text-center bg-white border border-x-2">
                  {item.DataEntrega}
                </TableCell>
                <TableCell className="font-medium text-center bg-white">
                  {item.Vend_Nome}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              {/* <TableCell colSpan={3}>Total</TableCell> */}
              <TableCell className="text-center"></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  );
}
