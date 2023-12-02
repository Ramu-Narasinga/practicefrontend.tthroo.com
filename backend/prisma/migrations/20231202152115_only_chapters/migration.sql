/*
  Warnings:

  - You are about to drop the column `additionalFiles` on the `Chapter` table. All the data in the column will be lost.
  - You are about to drop the column `unitId` on the `Chapter` table. All the data in the column will be lost.
  - You are about to drop the `Course` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Unit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Chapter" DROP CONSTRAINT "Chapter_unitId_fkey";

-- DropForeignKey
ALTER TABLE "Unit" DROP CONSTRAINT "Unit_courseId_fkey";

-- AlterTable
ALTER TABLE "Chapter" DROP COLUMN "additionalFiles",
DROP COLUMN "unitId",
ADD COLUMN     "additionalfiles" JSONB,
ADD COLUMN     "img" VARCHAR;

-- DropTable
DROP TABLE "Course";

-- DropTable
DROP TABLE "Unit";
