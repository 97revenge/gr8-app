/*
  Warnings:

  - You are about to drop the column `dataEntrega` on the `orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `descSituacao` on the `orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `dtEmissao` on the `orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `nomeCLI` on the `orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `numOrc` on the `orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `valorTotal` on the `orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `vendNome` on the `orcamento` table. All the data in the column will be lost.
  - Added the required column `DescSituacao` to the `orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `DtEmissao` to the `orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Nome_cli` to the `orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NumOrc` to the `orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ValorTotal` to the `orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Vend_Nome` to the `orcamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orcamento" DROP COLUMN "dataEntrega",
DROP COLUMN "descSituacao",
DROP COLUMN "dtEmissao",
DROP COLUMN "nomeCLI",
DROP COLUMN "numOrc",
DROP COLUMN "valorTotal",
DROP COLUMN "vendNome",
ADD COLUMN     "DataEntrega" TEXT,
ADD COLUMN     "DescSituacao" TEXT NOT NULL,
ADD COLUMN     "DtEmissao" TEXT NOT NULL,
ADD COLUMN     "Nome_cli" TEXT NOT NULL,
ADD COLUMN     "NumOrc" INTEGER NOT NULL,
ADD COLUMN     "ValorTotal" INTEGER NOT NULL,
ADD COLUMN     "Vend_Nome" TEXT NOT NULL;
