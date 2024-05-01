/*
  Warnings:

  - Made the column `compositionId` on table `Ingredient` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_compositionId_fkey";

-- AlterTable
ALTER TABLE "Ingredient" ALTER COLUMN "compositionId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_compositionId_fkey" FOREIGN KEY ("compositionId") REFERENCES "Composition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
