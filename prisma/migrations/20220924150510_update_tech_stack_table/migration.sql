/*
  Warnings:

  - A unique constraint covering the columns `[cloudImageId]` on the table `TechStack` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "CloudImage" ADD COLUMN     "techStackId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "TechStack_cloudImageId_key" ON "TechStack"("cloudImageId");
