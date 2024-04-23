/*
  Warnings:

  - You are about to drop the `_CompositionToIngredient` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `compositionId` to the `Ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CompositionToIngredient" DROP CONSTRAINT "_CompositionToIngredient_A_fkey";

-- DropForeignKey
ALTER TABLE "_CompositionToIngredient" DROP CONSTRAINT "_CompositionToIngredient_B_fkey";

-- AlterTable
ALTER TABLE "Ingredient" ADD COLUMN     "compositionId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_CompositionToIngredient";

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_compositionId_fkey" FOREIGN KEY ("compositionId") REFERENCES "Composition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
