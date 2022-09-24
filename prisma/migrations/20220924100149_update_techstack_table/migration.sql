/*
  Warnings:

  - You are about to drop the column `projectId` on the `TechStack` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TechStack" DROP CONSTRAINT "TechStack_projectId_fkey";

-- AlterTable
ALTER TABLE "TechStack" DROP COLUMN "projectId";

-- CreateTable
CREATE TABLE "_ProjectToTechStack" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToTechStack_AB_unique" ON "_ProjectToTechStack"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToTechStack_B_index" ON "_ProjectToTechStack"("B");

-- AddForeignKey
ALTER TABLE "_ProjectToTechStack" ADD CONSTRAINT "_ProjectToTechStack_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTechStack" ADD CONSTRAINT "_ProjectToTechStack_B_fkey" FOREIGN KEY ("B") REFERENCES "TechStack"("id") ON DELETE CASCADE ON UPDATE CASCADE;
