-- CreateTable
CREATE TABLE "news" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "data" DATE NOT NULL,
    "excerpt" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "news_pkey" PRIMARY KEY ("id")
);
