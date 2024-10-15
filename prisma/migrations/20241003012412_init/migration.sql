-- CreateTable
CREATE TABLE "Bands" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "members" INTEGER NOT NULL,
    "genre" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Bands_pkey" PRIMARY KEY ("id")
);
