-- CreateTable
CREATE TABLE "Podcasts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "country" TEXT,
    "description" TEXT,

    CONSTRAINT "Podcasts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Episodes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "podcastId" TEXT,
    "duration" INTEGER NOT NULL,
    "description" TEXT,
    "year" INTEGER,

    CONSTRAINT "Episodes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Episodes" ADD CONSTRAINT "Episodes_podcastId_fkey" FOREIGN KEY ("podcastId") REFERENCES "Podcasts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
