/*
  Warnings:

  - You are about to drop the `CompositionIngredient` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `compositionId` to the `Ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CompositionIngredient" DROP CONSTRAINT "CompositionIngredient_compositionId_fkey";

-- DropForeignKey
ALTER TABLE "CompositionIngredient" DROP CONSTRAINT "CompositionIngredient_ingredientId_fkey";

-- AlterTable
ALTER TABLE "Ingredient" ADD COLUMN     "compositionId" TEXT NOT NULL;

-- DropTable
DROP TABLE "CompositionIngredient";

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_compositionId_fkey" FOREIGN KEY ("compositionId") REFERENCES "Composition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
