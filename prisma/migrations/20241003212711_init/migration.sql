-- DropForeignKey
ALTER TABLE "Albums" DROP CONSTRAINT "Albums_artistId_fkey";

-- DropForeignKey
ALTER TABLE "Albums" DROP CONSTRAINT "Albums_bandsId_fkey";

-- AddForeignKey
ALTER TABLE "Albums" ADD CONSTRAINT "Albums_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Albums" ADD CONSTRAINT "Albums_bandsId_fkey" FOREIGN KEY ("bandsId") REFERENCES "Bands"("id") ON DELETE CASCADE ON UPDATE CASCADE;
