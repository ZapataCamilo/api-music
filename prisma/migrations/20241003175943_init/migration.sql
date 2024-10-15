/*
  Warnings:

  - The `year` column on the `Albums` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `albumsId` to the `Albums` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Albums" ADD COLUMN     "albumsId" TEXT NOT NULL,
DROP COLUMN "year",
ADD COLUMN     "year" INTEGER;
