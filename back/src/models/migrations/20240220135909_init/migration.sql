-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "hash_password" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "house_number" TEXT NOT NULL,
    "address_supplement" TEXT,
    "birthday" TIMESTAMP(3) NOT NULL,
    "phone_number" TEXT NOT NULL,
    "img_url" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" MONEY NOT NULL,
    "discount" MONEY,
    "publish_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "edition" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "authors" TEXT[],

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "book_id" INTEGER NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("book_id","category")
);

-- CreateTable
CREATE TABLE "BooksOnFavorites" (
    "user_id" INTEGER NOT NULL,
    "book_id" INTEGER NOT NULL,

    CONSTRAINT "BooksOnFavorites_pkey" PRIMARY KEY ("user_id","book_id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "user_id" INTEGER NOT NULL,
    "book_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "publish_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("user_id","book_id","publish_date")
);

-- CreateTable
CREATE TABLE "UsersOnComments" (
    "user_id" INTEGER NOT NULL,
    "book_id" INTEGER NOT NULL,
    "publish_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UsersOnComments_pkey" PRIMARY KEY ("user_id","book_id","publish_date")
);

-- CreateTable
CREATE TABLE "Cart" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "total_value" MONEY NOT NULL,
    "quantity" INTEGER NOT NULL,
    "insert_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BooksOnCart" (
    "cart_id" INTEGER NOT NULL,
    "book_id" INTEGER NOT NULL,

    CONSTRAINT "BooksOnCart_pkey" PRIMARY KEY ("cart_id","book_id")
);

-- CreateTable
CREATE TABLE "Purchase" (
    "user_id" INTEGER NOT NULL,
    "cart_id" INTEGER NOT NULL,
    "purchase_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total_value" MONEY NOT NULL,
    "payment_method" TEXT NOT NULL,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("user_id","cart_id")
);

-- CreateTable
CREATE TABLE "PurchaseOnUser" (
    "cart_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "purchase_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ammount" MONEY NOT NULL,

    CONSTRAINT "PurchaseOnUser_pkey" PRIMARY KEY ("cart_id","user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_number_key" ON "User"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Book_user_id_key" ON "Book"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Category_book_id_key" ON "Category"("book_id");

-- CreateIndex
CREATE UNIQUE INDEX "BooksOnFavorites_user_id_key" ON "BooksOnFavorites"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "BooksOnFavorites_book_id_key" ON "BooksOnFavorites"("book_id");

-- CreateIndex
CREATE UNIQUE INDEX "Comment_user_id_key" ON "Comment"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Comment_book_id_key" ON "Comment"("book_id");

-- CreateIndex
CREATE UNIQUE INDEX "UsersOnComments_user_id_key" ON "UsersOnComments"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "UsersOnComments_book_id_key" ON "UsersOnComments"("book_id");

-- CreateIndex
CREATE UNIQUE INDEX "Cart_user_id_key" ON "Cart"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "BooksOnCart_cart_id_key" ON "BooksOnCart"("cart_id");

-- CreateIndex
CREATE UNIQUE INDEX "BooksOnCart_book_id_key" ON "BooksOnCart"("book_id");

-- CreateIndex
CREATE UNIQUE INDEX "Purchase_user_id_key" ON "Purchase"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Purchase_cart_id_key" ON "Purchase"("cart_id");

-- CreateIndex
CREATE UNIQUE INDEX "PurchaseOnUser_cart_id_key" ON "PurchaseOnUser"("cart_id");

-- CreateIndex
CREATE UNIQUE INDEX "PurchaseOnUser_user_id_key" ON "PurchaseOnUser"("user_id");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BooksOnFavorites" ADD CONSTRAINT "BooksOnFavorites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BooksOnFavorites" ADD CONSTRAINT "BooksOnFavorites_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnComments" ADD CONSTRAINT "UsersOnComments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnComments" ADD CONSTRAINT "UsersOnComments_user_id_book_id_publish_date_fkey" FOREIGN KEY ("user_id", "book_id", "publish_date") REFERENCES "Comment"("user_id", "book_id", "publish_date") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BooksOnCart" ADD CONSTRAINT "BooksOnCart_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BooksOnCart" ADD CONSTRAINT "BooksOnCart_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseOnUser" ADD CONSTRAINT "PurchaseOnUser_cart_id_user_id_fkey" FOREIGN KEY ("cart_id", "user_id") REFERENCES "Purchase"("cart_id", "user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseOnUser" ADD CONSTRAINT "PurchaseOnUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
