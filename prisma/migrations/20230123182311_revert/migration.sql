/*
  Warnings:

  - You are about to drop the `EventAttribute` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EventAttribute" DROP CONSTRAINT "EventAttribute_eventItemId_fkey";

-- DropTable
DROP TABLE "EventAttribute";
