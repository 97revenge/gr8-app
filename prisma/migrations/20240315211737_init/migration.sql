-- CreateTable
CREATE TABLE "orcamento" (
    "id" SERIAL NOT NULL,
    "numOrc" INTEGER NOT NULL,
    "dtEmissao" TEXT NOT NULL,
    "nomeCLI" TEXT NOT NULL,
    "valorTotal" INTEGER NOT NULL,
    "descSituacao" TEXT NOT NULL,
    "dataEntrega" TEXT,
    "vendNome" TEXT NOT NULL,

    CONSTRAINT "orcamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clientes" (
    "id" SERIAL NOT NULL,
    "codCLI" INTEGER NOT NULL,
    "nomeCLI" TEXT NOT NULL,
    "cnpjCLI" TEXT NOT NULL,
    "fone1CLI" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cidCLI" TEXT NOT NULL,
    "ufCLI" TEXT NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produtos" (
    "id" SERIAL NOT NULL,
    "codigo" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "codFornecedor" INTEGER NOT NULL,
    "fabricante" TEXT,

    CONSTRAINT "Produtos_pkey" PRIMARY KEY ("id")
);
