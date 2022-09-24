-- DropForeignKey
ALTER TABLE "TechStack" DROP CONSTRAINT "TechStack_cloudImageId_fkey";

-- AddForeignKey
ALTER TABLE "TechStack" ADD CONSTRAINT "TechStack_cloudImageId_fkey" FOREIGN KEY ("cloudImageId") REFERENCES "CloudImage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
