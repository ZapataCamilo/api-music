/*
  Warnings:

  - Added the required column `cuontry` to the `Artists` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cuontry` to the `Bands` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Artists" ADD COLUMN     "cuontry" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Bands" ADD COLUMN     "cuontry" TEXT NOT NULL;
