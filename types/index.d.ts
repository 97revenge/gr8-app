import { z } from "zod";

const budgets = z.array({
  NumOrc: z.number(),
  DtEmissao: z.string(),
  Nome_cli: z.string(),
  ValorTotal: z.string(),
  DescSituacao: z.string(),
  DataEntrega: z.string(),
  Vend_Nome: z.string(),
});

const clients = z.array({
  CodCli: z.number(),
  Nome_cli: z.string(),
  Cnpj_cpf_cli: z.string(),
  Fone1_Cli: z.string(),
  Texto271: z.string(),
  Cid_Cli: z.string(),
  Uf_Cli: z.string(),
});

const products = z.array({
  Codigo: z.string().min(1, { message: "Nescessário Código do produto" }),
  Descricao: z.string().min(1, { message: "Nescessário Descrição do produto" }),
  codFornecedor: z.string(),
  Fabricante: z.string(),
});

export interface BudgetsType extends z.infer<typeof budgets> {}

export interface ClientsType extends z.infer<typeof clients> {}

export interface ProductsType extends z.infer<typeof products> {
  Fabricante: any;
  codFornecedor: any;
  Descricao: any;
  Codigo: any;
}

export { products };
