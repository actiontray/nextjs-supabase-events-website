-- CreateTable
CREATE TABLE "EventAttribute" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "eventItemId" TEXT NOT NULL,

    CONSTRAINT "EventAttribute_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EventAttribute_slug_key" ON "EventAttribute"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "EventAttribute_eventItemId_key" ON "EventAttribute"("eventItemId");

-- AddForeignKey
ALTER TABLE "EventAttribute" ADD CONSTRAINT "EventAttribute_eventItemId_fkey" FOREIGN KEY ("eventItemId") REFERENCES "EventItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
