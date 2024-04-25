-- CreateEnum
CREATE TYPE "CompositionBadges" AS ENUM ('VERIFIED', 'DANGEROUS', 'EXPERT', 'FAVORITE', 'BEGINNER_FRIENDLY');

-- AlterTable
ALTER TABLE "Composition" ADD COLUMN     "badges" "CompositionBadges"[];

-- CreateTable
CREATE TABLE "CompositionBadge" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "CompositionBadge_pkey" PRIMARY KEY ("id")
);
