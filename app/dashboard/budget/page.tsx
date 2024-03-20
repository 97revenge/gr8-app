"use client";

import ProductDialog from "@/components/Dialogs/ProductDialog";
import TableBreadCrumb from "@/components/Breadcrumbs/TableBreadcrumb";

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
import { BudgetsType } from "@/types";
import { useEffect, useState } from "react";

import BudgetDialog from "@/components/Dialogs/BudgetDialog";
import DeleteBudgetDialog from "@/components/Dialogs/DeleteBudgetDialog";
import EditBudgetDialog from "@/components/Dialogs/EditBudgetDialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import CubeLoader from "@/components/Loaders/CubeLoader";

export default function Home() {
  const [budgets, setBudgets] = useState<BudgetsType>([] as any);

  useEffect(() => {
    async function fetchData() {
      try {
        const productResponse = await fetch("/api/budget");
        const productsData = await productResponse.json();
        setBudgets(productsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const data = budgets;

  type Budgets = {
    id: string;
    NumOrc: string;
    DtEmissao: string;
    Nome_cli?: string;
    ValorTotal: string;
    DescSituacao: string;
    DataEntrega: string;
    Vend_Nome: string;
  };

  const columns: ColumnDef<Budgets>[] = [
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
      accessorKey: "NumOrc",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Numero de Ordem
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("NumOrc")}</div>
      ),
    },

    {
      accessorKey: "DtEmissao",
      header: "Data de emissão",
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("DtEmissao")}</div>
      ),
    },
    {
      accessorKey: "Nome_cli",
      header: "Nome do cliente ",
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("Nome_cli")}</div>
      ),
    },
    {
      accessorKey: "ValorTotal",
      header: "Valor Total",
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("ValorTotal")}</div>
      ),
    },
    {
      accessorKey: "DescSituacao",
      header: "Andamento",
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("DescSituacao")}</div>
      ),
    },
    {
      accessorKey: "DataEntrega",
      header: "Data de entrega",
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("DataEntrega")}</div>
      ),
    },
    {
      accessorKey: "Vend_Nome",
      header: "Nome do vendedor",
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("Vend_Nome")}</div>
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
              <div className="p-2">
                <Dialog>
                  <DialogTrigger>Editar</DialogTrigger>
                  <EditBudgetDialog
                    status={{ id: payment.id, NumOrc: payment.NumOrc }}
                  />
                </Dialog>
              </div>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copiar ID
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.NumOrc)}
              >
                Copiar Numero de Ordem
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
            placeholder="Procure pelo nome do cliente"
            value={
              (table.getColumn("Nome_cli")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("Nome_cli")?.setFilterValue(event.target.value)
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
                    <div className="my-28  w-auto h-auto flex items-center justify-center">
                      <CubeLoader />
                    </div>
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
        <div className="p-12 mt-6">
          <div className="flex flex-row w-full h-auto  items-center justify-start gap-3 p-2">
            <Dialog>
              <DialogTrigger>
                <Button variant={"default"}>Adicionar </Button>
              </DialogTrigger>
              <BudgetDialog />
            </Dialog>
            <Dialog>
              <DialogTrigger>
                <Button className="bg-blue-500">Editar </Button>
              </DialogTrigger>
              <EditBudgetDialog />
            </Dialog>
            <Dialog>
              <DialogTrigger>
                <Button variant={"destructive"}>Excluir </Button>
              </DialogTrigger>
              <DeleteBudgetDialog />
            </Dialog>
          </div>
          <DataTableDemo />
        </div>
      </div>
    </>
  );
}
