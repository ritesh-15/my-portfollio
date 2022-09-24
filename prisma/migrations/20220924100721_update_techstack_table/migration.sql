/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `TechStack` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TechStack_name_key" ON "TechStack"("name");
