/*
  Warnings:

  - You are about to drop the `Author` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Author" DROP CONSTRAINT "Author_book_id_fkey";

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "authors" TEXT[];

-- DropTable
DROP TABLE "Author";
