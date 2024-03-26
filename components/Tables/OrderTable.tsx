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
import { useEffect, useState } from "react";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function TableDemo({ invoice }: { invoice: any }) {
  const [content, setContent] = useState<Array<any>>([]);

  useEffect(() => {
    async function fethContent() {
      try {
        const response = await fetch(`/api/content?${invoice}`);
        const data: Array<any> = await response.json();
        setContent(data);
      } catch (err) {
        alert(err);
      }
    }
    fethContent();
  }, []);

  return (
    <>
      <div className="mx-0 lg:mx-32 border border-4 rounded-xl m-2 p-2">
        <Table>
          <TableCaption>
            Esta lista representa o que o cliente pediu .{" "}
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Quantidade</TableHead>
              <TableHead>Unidade</TableHead>
              <TableHead>Código do fornecedor</TableHead>
              <TableHead className="text-right">Descrição</TableHead>
              <TableHead className="text-right">Preço Unitário</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {content.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">{invoice.amount}</TableCell>
                <TableCell>{invoice.unit}</TableCell>
                <TableCell>{invoice.code}</TableCell>
                <TableCell className="text-right">
                  {invoice.description}
                </TableCell>
                <TableCell className="text-right">
                  {invoice.unit_price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter></TableFooter>
        </Table>
      </div>
    </>
  );
}
