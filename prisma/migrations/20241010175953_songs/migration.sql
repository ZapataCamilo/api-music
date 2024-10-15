/*
  Warnings:

  - You are about to drop the column `songs` on the `Albums` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Albums" DROP COLUMN "songs";

-- CreateTable
CREATE TABLE "Songs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "albumId" TEXT,

    CONSTRAINT "Songs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Songs" ADD CONSTRAINT "Songs_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Albums"("id") ON DELETE CASCADE ON UPDATE CASCADE;
