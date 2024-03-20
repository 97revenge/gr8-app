"use client";

import ProductDialog from "@/components/Dialogs/ProductDialog";
import TableBreadCrumb from "@/components/Breadcrumbs/TableBreadcrumb";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import PageLoader from "@/components/Loaders/PageLoader";
import DeleteProductDialog from "@/components/Dialogs/DeleteProductDialog";
import EditProductDialog from "@/components/Dialogs/EditProductDialog";

import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BudgetsType, ProductsType } from "@/types";
import { useEffect, useState } from "react";

const Dynamic = dynamic(() => import("@/components/Layouts/TableLayout"), {
  loading: () => (
    <>
      <div>
        <PageLoader />
      </div>
    </>
  ),
});

export default function Home() {
  const [products, setProducts] = useState<ProductsType>([] as any);

  useEffect(() => {
    async function fetchData() {
      try {
        const productResponse = await fetch("/api/products");
        const productsData = await productResponse.json();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const data = products;

  type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
  };

  type Products = {
    id: string;
    Codigo: string;
    Descricao: string;
    codFornecedor?: string;
    Fabricante: string;
  };

  const columns: ColumnDef<Products>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value: any) =>
            table.toggleAllPageRowsSelected(!!value)
          }
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value: any) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: "ID do produto",
      cell: ({ row }) => (
        <div className="lowercase font-bold text-lg">{row.getValue("id")}</div>
      ),
    },
    {
      accessorKey: "Codigo",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Código do Produto
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("Codigo")}</div>
      ),
    },

    {
      accessorKey: "Descricao",
      header: "Descrição do produto",
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("Descricao")}</div>
      ),
    },
    {
      accessorKey: "codFornecedor",
      header: "Código do fornecedor",
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("codFornecedor")}</div>
      ),
    },
    {
      accessorKey: "Fabricante",
      header: "Fabricante",
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("Fabricante")}</div>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <DotsHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  function DataTableDemo() {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] =
      React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] =
      React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});

    const table = useReactTable({
      data,
      columns,
      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      onColumnVisibilityChange: setColumnVisibility,
      onRowSelectionChange: setRowSelection,
      state: {
        sorting,
        columnFilters,
        columnVisibility,
        rowSelection,
      },
    });

    return (
      <div className="w-full">
        <div className="flex flex-col lg:flex-row  items-center py-4">
          <Input
            placeholder="Procure pelo Código do produto "
            value={
              (table.getColumn("Codigo")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("Codigo")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Especificações <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value: any) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="rounded-md border shadow-xl">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} className="bg-gray-400/50">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className="rounded-xl shadow-xl">
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="bg-gray-200 border border-b-2 border-gray-300"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    <b className="text-xl">Sem resultados .</b>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} itens selecionados
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Anterior
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Próximo
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex  flex-col p-6 items-center justify-center w-full h-full bg-gradient-to-r from-gray-100 to-teal-100">
        <TableBreadCrumb>Produtos</TableBreadCrumb>
        <div className="p-12 mt-6 w-full">
          <div className="  flex flex-row w-full h-auto  items-center justify-start gap-3 ">
            <div className=" border border-2 border-gray-200 w-auto gap-x-3 flex items-center justify-start p-2 rounded-xl">
              <Dialog>
                <DialogTrigger>
                  <Button variant={"default"}>Adicionar </Button>
                </DialogTrigger>
                <ProductDialog />
              </Dialog>
              <Dialog>
                <DialogTrigger>
                  <Button variant={"destructive"}>Excluir </Button>
                </DialogTrigger>
                <DeleteProductDialog />
              </Dialog>
              <Dialog>
                <DialogTrigger>
                  <Button className="bg-blue-500">Editar </Button>
                </DialogTrigger>
                <EditProductDialog />
              </Dialog>
            </div>
          </div>
          <Dynamic>
            <DataTableDemo />
          </Dynamic>
        </div>
      </div>
    </>
  );
}
