/*
  Warnings:

  - You are about to drop the column `title` on the `CompositionCategory` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "CompositionCategory_title_key";

-- AlterTable
ALTER TABLE "CompositionCategory" DROP COLUMN "title";
