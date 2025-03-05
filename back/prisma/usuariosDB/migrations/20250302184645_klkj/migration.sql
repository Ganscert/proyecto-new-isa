/*
  Warnings:

  - You are about to drop the column `usuarioId` on the `Saldo` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[saldoId]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `saldoId` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Saldo" DROP CONSTRAINT "Saldo_usuarioId_fkey";

-- DropIndex
DROP INDEX "Saldo_usuarioId_key";

-- AlterTable
ALTER TABLE "Saldo" DROP COLUMN "usuarioId";

-- AlterTable
ALTER TABLE "usuarios" ADD COLUMN     "saldoId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_saldoId_key" ON "usuarios"("saldoId");

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_saldoId_fkey" FOREIGN KEY ("saldoId") REFERENCES "Saldo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
