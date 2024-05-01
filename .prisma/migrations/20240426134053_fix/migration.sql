/*
  Warnings:

  - You are about to drop the column `name` on the `File` table. All the data in the column will be lost.
  - Added the required column `location` to the `File` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "File_name_key";

-- AlterTable
ALTER TABLE "Composition" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "File" DROP COLUMN "name",
ADD COLUMN     "location" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Composition" ADD CONSTRAINT "Composition_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
