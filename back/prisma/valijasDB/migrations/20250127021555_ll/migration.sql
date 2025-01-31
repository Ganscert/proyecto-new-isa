-- CreateTable
CREATE TABLE "valijas" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "usuarioACargo" TEXT NOT NULL,
    "llegada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ultimaModificacion" TIMESTAMP(3) NOT NULL,
    "valijaUsdId" INTEGER,
    "valijaDopId" INTEGER,
    "valijaEurId" INTEGER,

    CONSTRAINT "valijas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ValijaUsd" (
    "id" SERIAL NOT NULL,
    "depositos" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ValijaUsd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaccionesUsd" (
    "id" SERIAL NOT NULL,
    "D1" INTEGER NOT NULL DEFAULT 0,
    "D2" INTEGER NOT NULL DEFAULT 0,
    "D5" INTEGER NOT NULL DEFAULT 0,
    "D10" INTEGER NOT NULL DEFAULT 0,
    "D20" INTEGER NOT NULL DEFAULT 0,
    "D50" INTEGER NOT NULL DEFAULT 0,
    "D100" INTEGER NOT NULL DEFAULT 0,
    "valijaUsdId" INTEGER NOT NULL,

    CONSTRAINT "transaccionesUsd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ValijaDop" (
    "id" SERIAL NOT NULL,
    "depositos" INTEGER DEFAULT 0,
    "transacionDopId" INTEGER NOT NULL,

    CONSTRAINT "ValijaDop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaccionesDop" (
    "id" SERIAL NOT NULL,
    "D1" INTEGER NOT NULL DEFAULT 0,
    "D5" INTEGER NOT NULL DEFAULT 0,
    "D10" INTEGER NOT NULL DEFAULT 0,
    "D25" INTEGER NOT NULL DEFAULT 0,
    "D50" INTEGER NOT NULL DEFAULT 0,
    "D100" INTEGER NOT NULL DEFAULT 0,
    "D200" INTEGER NOT NULL DEFAULT 0,
    "D500" INTEGER NOT NULL DEFAULT 0,
    "D1000" INTEGER NOT NULL DEFAULT 0,
    "D2000" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "transaccionesDop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ValijaEur" (
    "id" SERIAL NOT NULL,
    "depositos" INTEGER NOT NULL DEFAULT 0,
    "transacionEurId" INTEGER NOT NULL,

    CONSTRAINT "ValijaEur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaccionesEur" (
    "id" SERIAL NOT NULL,
    "D10" INTEGER NOT NULL DEFAULT 0,
    "D20" INTEGER NOT NULL DEFAULT 0,
    "D50" INTEGER NOT NULL DEFAULT 0,
    "D100" INTEGER NOT NULL DEFAULT 0,
    "D200" INTEGER NOT NULL DEFAULT 0,
    "D500" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "transaccionesEur_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "valijas_codigo_key" ON "valijas"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "valijas_valijaUsdId_key" ON "valijas"("valijaUsdId");

-- CreateIndex
CREATE UNIQUE INDEX "valijas_valijaDopId_key" ON "valijas"("valijaDopId");

-- CreateIndex
CREATE UNIQUE INDEX "valijas_valijaEurId_key" ON "valijas"("valijaEurId");

-- CreateIndex
CREATE UNIQUE INDEX "ValijaDop_transacionDopId_key" ON "ValijaDop"("transacionDopId");

-- CreateIndex
CREATE UNIQUE INDEX "ValijaEur_transacionEurId_key" ON "ValijaEur"("transacionEurId");

-- AddForeignKey
ALTER TABLE "valijas" ADD CONSTRAINT "valijas_valijaUsdId_fkey" FOREIGN KEY ("valijaUsdId") REFERENCES "ValijaUsd"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "valijas" ADD CONSTRAINT "valijas_valijaDopId_fkey" FOREIGN KEY ("valijaDopId") REFERENCES "ValijaDop"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "valijas" ADD CONSTRAINT "valijas_valijaEurId_fkey" FOREIGN KEY ("valijaEurId") REFERENCES "ValijaEur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaccionesUsd" ADD CONSTRAINT "transaccionesUsd_valijaUsdId_fkey" FOREIGN KEY ("valijaUsdId") REFERENCES "ValijaUsd"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ValijaDop" ADD CONSTRAINT "ValijaDop_transacionDopId_fkey" FOREIGN KEY ("transacionDopId") REFERENCES "transaccionesDop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ValijaEur" ADD CONSTRAINT "ValijaEur_transacionEurId_fkey" FOREIGN KEY ("transacionEurId") REFERENCES "transaccionesEur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
