-- DropForeignKey
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_compositionId_fkey";

-- AlterTable
ALTER TABLE "Ingredient" ALTER COLUMN "compositionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_compositionId_fkey" FOREIGN KEY ("compositionId") REFERENCES "Composition"("id") ON DELETE SET NULL ON UPDATE CASCADE;
