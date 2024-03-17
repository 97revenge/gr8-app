/*
  Warnings:

  - You are about to drop the column `cidCLI` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `cnpjCLI` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `codCLI` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `fone1CLI` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `nomeCLI` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `ufCLI` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the `Produtos` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "clientes" DROP COLUMN "cidCLI",
DROP COLUMN "cnpjCLI",
DROP COLUMN "codCLI",
DROP COLUMN "email",
DROP COLUMN "fone1CLI",
DROP COLUMN "nomeCLI",
DROP COLUMN "ufCLI",
ADD COLUMN     "Cid_Cli" TEXT,
ADD COLUMN     "Cnpj_cpf_cli" TEXT,
ADD COLUMN     "CodCli" INTEGER,
ADD COLUMN     "Fone1_Cli" TEXT,
ADD COLUMN     "Nome_cli" TEXT,
ADD COLUMN     "Texto271" TEXT,
ADD COLUMN     "Uf_Cli" TEXT;

-- DropTable
DROP TABLE "Produtos";

-- CreateTable
CREATE TABLE "produtos" (
    "id" SERIAL NOT NULL,
    "Codigo" TEXT NOT NULL,
    "Descricao" TEXT NOT NULL,
    "codFornecedor" INTEGER NOT NULL,
    "Fabricante" TEXT,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);
