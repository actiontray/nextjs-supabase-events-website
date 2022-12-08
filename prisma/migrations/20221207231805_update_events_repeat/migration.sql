/*
  Warnings:

  - You are about to drop the `EventRepeat` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[eventRepeatIntervalId]` on the table `EventItem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[eventRepeatSelectionId]` on the table `EventItem` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "EventRepeat" DROP CONSTRAINT "EventRepeat_eventItemId_fkey";

-- AlterTable
ALTER TABLE "EventItem" ADD COLUMN     "eventRepeatIntervalId" TEXT,
ADD COLUMN     "eventRepeatSelectionId" TEXT;

-- DropTable
DROP TABLE "EventRepeat";

-- CreateTable
CREATE TABLE "EventRepeatInterval" (
    "id" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "eventItemId" TEXT NOT NULL,

    CONSTRAINT "EventRepeatInterval_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventRepeatSelection" (
    "id" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "eventItemId" TEXT NOT NULL,

    CONSTRAINT "EventRepeatSelection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EventRepeatInterval_eventItemId_key" ON "EventRepeatInterval"("eventItemId");

-- CreateIndex
CREATE UNIQUE INDEX "EventRepeatSelection_eventItemId_key" ON "EventRepeatSelection"("eventItemId");

-- CreateIndex
CREATE UNIQUE INDEX "EventItem_eventRepeatIntervalId_key" ON "EventItem"("eventRepeatIntervalId");

-- CreateIndex
CREATE UNIQUE INDEX "EventItem_eventRepeatSelectionId_key" ON "EventItem"("eventRepeatSelectionId");

-- AddForeignKey
ALTER TABLE "EventRepeatInterval" ADD CONSTRAINT "EventRepeatInterval_eventItemId_fkey" FOREIGN KEY ("eventItemId") REFERENCES "EventItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventRepeatSelection" ADD CONSTRAINT "EventRepeatSelection_eventItemId_fkey" FOREIGN KEY ("eventItemId") REFERENCES "EventItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
