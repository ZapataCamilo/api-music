/*
  Warnings:

  - You are about to drop the column `cuontry` on the `Artists` table. All the data in the column will be lost.
  - You are about to drop the column `cuontry` on the `Bands` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Artists" DROP COLUMN "cuontry";

-- AlterTable
ALTER TABLE "Bands" DROP COLUMN "cuontry";
