/*
  Warnings:

  - Made the column `description` on table `Episodes` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `author` to the `Podcasts` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Podcasts` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Episodes" ADD COLUMN     "audiobookId" TEXT,
ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "Podcasts" ADD COLUMN     "author" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- CreateTable
CREATE TABLE "Audiobooks" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "country" TEXT,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Audiobooks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Episodes" ADD CONSTRAINT "Episodes_audiobookId_fkey" FOREIGN KEY ("audiobookId") REFERENCES "Audiobooks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
