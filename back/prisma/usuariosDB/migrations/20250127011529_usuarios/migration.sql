-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "codigoEmpleado" SERIAL NOT NULL,
    "cargo" TEXT NOT NULL DEFAULT 'cajero',
    "inventario" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "transferencia" BOOLEAN NOT NULL DEFAULT false,
    "recepcion" BOOLEAN NOT NULL DEFAULT false,
    "preparacion" BOOLEAN NOT NULL DEFAULT true,
    "EIE" BOOLEAN NOT NULL DEFAULT false,
    "SupervisorID" TEXT,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_id_key" ON "usuarios"("id");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_nombre_key" ON "usuarios"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_codigoEmpleado_key" ON "usuarios"("codigoEmpleado");

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_SupervisorID_fkey" FOREIGN KEY ("SupervisorID") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;
