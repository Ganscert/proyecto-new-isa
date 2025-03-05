-- DropIndex
DROP INDEX "usuarios_id_key";

-- CreateTable
CREATE TABLE "Saldo" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "Saldo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Saldo_usuarioId_key" ON "Saldo"("usuarioId");

-- AddForeignKey
ALTER TABLE "Saldo" ADD CONSTRAINT "Saldo_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
