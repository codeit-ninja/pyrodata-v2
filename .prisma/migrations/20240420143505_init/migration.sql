-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'EDITOR', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "File" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "mimeType" TEXT,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Composition" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Composition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompositionCategory" (
    "title" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "compositionId" TEXT
);

-- CreateTable
CREATE TABLE "HazardSymbols" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,

    CONSTRAINT "HazardSymbols_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chemical" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "formula" TEXT,
    "pageId" TEXT NOT NULL,

    CONSTRAINT "Chemical_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Page" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "featuredImageId" TEXT,
    "pageContentId" TEXT NOT NULL,
    "categorySlug" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PageContent" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "html" TEXT NOT NULL DEFAULT '',
    "sidebar" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "PageContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Widget" (
    "id" TEXT NOT NULL,
    "pageContentId" TEXT NOT NULL,

    CONSTRAINT "Widget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImageWidget" (
    "id" TEXT NOT NULL,
    "widgetId" TEXT NOT NULL,
    "fileId" TEXT NOT NULL,

    CONSTRAINT "ImageWidget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EditorWidget" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "EditorWidget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ChemicalToHazardSymbols" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Session_userId_key" ON "Session"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "File_name_key" ON "File"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CompositionCategory_title_key" ON "CompositionCategory"("title");

-- CreateIndex
CREATE UNIQUE INDEX "CompositionCategory_name_key" ON "CompositionCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CompositionCategory_slug_key" ON "CompositionCategory"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "HazardSymbols_name_key" ON "HazardSymbols"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Chemical_name_key" ON "Chemical"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Chemical_pageId_key" ON "Chemical"("pageId");

-- CreateIndex
CREATE UNIQUE INDEX "Page_title_key" ON "Page"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Page_slug_key" ON "Page"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Category_title_key" ON "Category"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ImageWidget_widgetId_key" ON "ImageWidget"("widgetId");

-- CreateIndex
CREATE UNIQUE INDEX "_ChemicalToHazardSymbols_AB_unique" ON "_ChemicalToHazardSymbols"("A", "B");

-- CreateIndex
CREATE INDEX "_ChemicalToHazardSymbols_B_index" ON "_ChemicalToHazardSymbols"("B");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompositionCategory" ADD CONSTRAINT "CompositionCategory_compositionId_fkey" FOREIGN KEY ("compositionId") REFERENCES "Composition"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chemical" ADD CONSTRAINT "Chemical_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Page" ADD CONSTRAINT "Page_featuredImageId_fkey" FOREIGN KEY ("featuredImageId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Page" ADD CONSTRAINT "Page_pageContentId_fkey" FOREIGN KEY ("pageContentId") REFERENCES "PageContent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Page" ADD CONSTRAINT "Page_categorySlug_fkey" FOREIGN KEY ("categorySlug") REFERENCES "Category"("slug") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Widget" ADD CONSTRAINT "Widget_pageContentId_fkey" FOREIGN KEY ("pageContentId") REFERENCES "PageContent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImageWidget" ADD CONSTRAINT "ImageWidget_widgetId_fkey" FOREIGN KEY ("widgetId") REFERENCES "Widget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImageWidget" ADD CONSTRAINT "ImageWidget_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChemicalToHazardSymbols" ADD CONSTRAINT "_ChemicalToHazardSymbols_A_fkey" FOREIGN KEY ("A") REFERENCES "Chemical"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChemicalToHazardSymbols" ADD CONSTRAINT "_ChemicalToHazardSymbols_B_fkey" FOREIGN KEY ("B") REFERENCES "HazardSymbols"("id") ON DELETE CASCADE ON UPDATE CASCADE;
