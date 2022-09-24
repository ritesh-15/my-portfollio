/*
  Warnings:

  - Added the required column `demoLink` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "demoLink" TEXT NOT NULL,
ADD COLUMN     "isMobileApplication" BOOLEAN NOT NULL DEFAULT false;
