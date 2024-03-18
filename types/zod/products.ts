import { z } from "zod";

export const products = z.object({
  Codigo: z.string().min(1, { message: "Nescessário Código do produto" }),
  Descricao: z.string().min(1, { message: "Nescessário Descrição do produto" }),
  codFornecedor: z.string(),
  Fabricante: z.string(),
});
