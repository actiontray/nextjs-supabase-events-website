-- AlterTable
ALTER TABLE "EventItem" ADD COLUMN     "duration" INTEGER;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventRepeat" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "eventItemId" TEXT NOT NULL,

    CONSTRAINT "EventRepeat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventPossibleTimeframe" (
    "id" TEXT NOT NULL,
    "required" BOOLEAN NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "eventItemId" TEXT NOT NULL,

    CONSTRAINT "EventPossibleTimeframe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventExcludedTimeframe" (
    "id" TEXT NOT NULL,
    "required" BOOLEAN NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "eventItemId" TEXT NOT NULL,

    CONSTRAINT "EventExcludedTimeframe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventMember" (
    "id" TEXT NOT NULL,
    "required" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,
    "eventItemId" TEXT NOT NULL,

    CONSTRAINT "EventMember_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "EventRepeat" ADD CONSTRAINT "EventRepeat_eventItemId_fkey" FOREIGN KEY ("eventItemId") REFERENCES "EventItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventPossibleTimeframe" ADD CONSTRAINT "EventPossibleTimeframe_eventItemId_fkey" FOREIGN KEY ("eventItemId") REFERENCES "EventItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventExcludedTimeframe" ADD CONSTRAINT "EventExcludedTimeframe_eventItemId_fkey" FOREIGN KEY ("eventItemId") REFERENCES "EventItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventMember" ADD CONSTRAINT "EventMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventMember" ADD CONSTRAINT "EventMember_eventItemId_fkey" FOREIGN KEY ("eventItemId") REFERENCES "EventItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
