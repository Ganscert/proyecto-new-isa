/*
  Warnings:

  - You are about to drop the column `transacionDopId` on the `ValijaDop` table. All the data in the column will be lost.
  - You are about to drop the column `transacionEurId` on the `ValijaEur` table. All the data in the column will be lost.
  - Added the required column `valijaDopId` to the `transaccionesDop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valijaEurId` to the `transaccionesEur` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ValijaDop" DROP CONSTRAINT "ValijaDop_transacionDopId_fkey";

-- DropForeignKey
ALTER TABLE "ValijaEur" DROP CONSTRAINT "ValijaEur_transacionEurId_fkey";

-- DropIndex
DROP INDEX "ValijaDop_transacionDopId_key";

-- DropIndex
DROP INDEX "ValijaEur_transacionEurId_key";

-- AlterTable
ALTER TABLE "ValijaDop" DROP COLUMN "transacionDopId";

-- AlterTable
ALTER TABLE "ValijaEur" DROP COLUMN "transacionEurId";

-- AlterTable
ALTER TABLE "transaccionesDop" ADD COLUMN     "valijaDopId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "transaccionesEur" ADD COLUMN     "valijaEurId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "transaccionesDop" ADD CONSTRAINT "transaccionesDop_valijaDopId_fkey" FOREIGN KEY ("valijaDopId") REFERENCES "ValijaDop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaccionesEur" ADD CONSTRAINT "transaccionesEur_valijaEurId_fkey" FOREIGN KEY ("valijaEurId") REFERENCES "ValijaEur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
