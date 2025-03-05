/*
  Warnings:

  - You are about to drop the column `D200` on the `transaccionesEur` table. All the data in the column will be lost.
  - You are about to drop the column `D500` on the `transaccionesEur` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "transaccionesEur" DROP COLUMN "D200",
DROP COLUMN "D500",
ADD COLUMN     "D5" INTEGER NOT NULL DEFAULT 0;
