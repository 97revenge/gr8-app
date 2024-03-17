/*
  Warnings:

  - You are about to alter the column `Fone1_Cli` on the `clientes` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Unsupported("String")`.
  - Made the column `Fone1_Cli` on table `clientes` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "clientes" ALTER COLUMN "Fone1_Cli" SET NOT NULL,
ALTER COLUMN "Fone1_Cli" SET DATA TYPE String;
