/*
  Warnings:

  - You are about to drop the column `compositionId` on the `Ingredient` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_compositionId_fkey";

-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "compositionId";

-- CreateTable
CREATE TABLE "CompositionIngredients" (
    "id" SERIAL NOT NULL,
    "compositionId" TEXT NOT NULL,
    "ingredientId" TEXT NOT NULL,

    CONSTRAINT "CompositionIngredients_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CompositionIngredients" ADD CONSTRAINT "CompositionIngredients_compositionId_fkey" FOREIGN KEY ("compositionId") REFERENCES "Composition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompositionIngredients" ADD CONSTRAINT "CompositionIngredients_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
