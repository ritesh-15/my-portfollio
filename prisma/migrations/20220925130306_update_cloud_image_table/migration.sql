-- DropForeignKey
ALTER TABLE "CloudImage" DROP CONSTRAINT "CloudImage_projectId_fkey";

-- AddForeignKey
ALTER TABLE "CloudImage" ADD CONSTRAINT "CloudImage_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
