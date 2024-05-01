/*
  Warnings:

  - You are about to drop the `CompositionIngredients` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CompositionIngredients" DROP CONSTRAINT "CompositionIngredients_compositionId_fkey";

-- DropForeignKey
ALTER TABLE "CompositionIngredients" DROP CONSTRAINT "CompositionIngredients_ingredientId_fkey";

-- DropTable
DROP TABLE "CompositionIngredients";

-- CreateTable
CREATE TABLE "CompositionIngredient" (
    "id" SERIAL NOT NULL,
    "compositionId" TEXT NOT NULL,
    "ingredientId" TEXT NOT NULL,

    CONSTRAINT "CompositionIngredient_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CompositionIngredient" ADD CONSTRAINT "CompositionIngredient_compositionId_fkey" FOREIGN KEY ("compositionId") REFERENCES "Composition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompositionIngredient" ADD CONSTRAINT "CompositionIngredient_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
