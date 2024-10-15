/*
  Warnings:

  - The primary key for the `Artists` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Artists" DROP CONSTRAINT "Artists_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Artists_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Artists_id_seq";
