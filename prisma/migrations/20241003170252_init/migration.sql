-- CreateTable
CREATE TABLE "Albums" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "year" TEXT,
    "artistId" TEXT,
    "bandsId" TEXT,
    "songs" TEXT[],

    CONSTRAINT "Albums_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Albums" ADD CONSTRAINT "Albums_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artists"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Albums" ADD CONSTRAINT "Albums_bandsId_fkey" FOREIGN KEY ("bandsId") REFERENCES "Bands"("id") ON DELETE SET NULL ON UPDATE CASCADE;
