-- DropForeignKey
ALTER TABLE "CloudImage" DROP CONSTRAINT "CloudImage_projectId_fkey";

-- AlterTable
ALTER TABLE "CloudImage" ALTER COLUMN "projectId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "CloudImage" ADD CONSTRAINT "CloudImage_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
