/*
  Warnings:

  - Made the column `year` on table `Episodes` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Episodes" ALTER COLUMN "year" SET NOT NULL;
