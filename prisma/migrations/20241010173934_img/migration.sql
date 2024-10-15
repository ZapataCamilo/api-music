/*
  Warnings:

  - Added the required column `image` to the `Albums` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Artists` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Bands` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Episodes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Podcasts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Albums" ADD COLUMN     "desacription" TEXT,
ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Artists" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Bands" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Episodes" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Podcasts" ADD COLUMN     "image" TEXT NOT NULL;
