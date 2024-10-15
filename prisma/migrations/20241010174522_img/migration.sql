/*
  Warnings:

  - You are about to drop the column `desacription` on the `Albums` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Albums" DROP COLUMN "desacription",
ADD COLUMN     "description" TEXT;
