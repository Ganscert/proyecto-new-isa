/*
  Warnings:

  - The `SupervisorID` column on the `usuarios` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_SupervisorID_fkey";

-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "SupervisorID",
ADD COLUMN     "SupervisorID" INTEGER;

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_SupervisorID_fkey" FOREIGN KEY ("SupervisorID") REFERENCES "usuarios"("codigoEmpleado") ON DELETE SET NULL ON UPDATE CASCADE;
