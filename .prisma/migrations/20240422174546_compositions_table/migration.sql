/*
  Warnings:

  - You are about to drop the column `compositionId` on the `CompositionCategory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Composition` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Composition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Composition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `videoId` to the `Composition` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `CompositionCategory` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "CompositionCategory" DROP CONSTRAINT "CompositionCategory_compositionId_fkey";

-- AlterTable
ALTER TABLE "Composition" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "videoId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CompositionCategory" DROP COLUMN "compositionId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "CompositionCategory_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "note" TEXT,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CompositionToIngredient" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CompositionToCompositionCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CompositionToIngredient_AB_unique" ON "_CompositionToIngredient"("A", "B");

-- CreateIndex
CREATE INDEX "_CompositionToIngredient_B_index" ON "_CompositionToIngredient"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CompositionToCompositionCategory_AB_unique" ON "_CompositionToCompositionCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_CompositionToCompositionCategory_B_index" ON "_CompositionToCompositionCategory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Composition_name_key" ON "Composition"("name");

-- AddForeignKey
ALTER TABLE "Composition" ADD CONSTRAINT "Composition_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "File"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompositionToIngredient" ADD CONSTRAINT "_CompositionToIngredient_A_fkey" FOREIGN KEY ("A") REFERENCES "Composition"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompositionToIngredient" ADD CONSTRAINT "_CompositionToIngredient_B_fkey" FOREIGN KEY ("B") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompositionToCompositionCategory" ADD CONSTRAINT "_CompositionToCompositionCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Composition"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompositionToCompositionCategory" ADD CONSTRAINT "_CompositionToCompositionCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "CompositionCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
