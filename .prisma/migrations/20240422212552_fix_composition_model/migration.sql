-- DropForeignKey
ALTER TABLE "Composition" DROP CONSTRAINT "Composition_videoId_fkey";

-- AlterTable
ALTER TABLE "Composition" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "videoId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Composition" ADD CONSTRAINT "Composition_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;
