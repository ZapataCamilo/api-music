-- CreateTable
CREATE TABLE "Artists" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "age" INTEGER,

    CONSTRAINT "Artists_pkey" PRIMARY KEY ("id")
);
