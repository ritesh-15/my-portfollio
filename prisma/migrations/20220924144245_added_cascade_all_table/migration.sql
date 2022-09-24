-- DropForeignKey
ALTER TABLE "CloudImage" DROP CONSTRAINT "CloudImage_projectId_fkey";

-- DropForeignKey
ALTER TABLE "TechStack" DROP CONSTRAINT "TechStack_cloudImageId_fkey";

-- AddForeignKey
ALTER TABLE "CloudImage" ADD CONSTRAINT "CloudImage_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechStack" ADD CONSTRAINT "TechStack_cloudImageId_fkey" FOREIGN KEY ("cloudImageId") REFERENCES "CloudImage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
