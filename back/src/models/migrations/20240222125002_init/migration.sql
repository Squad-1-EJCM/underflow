-- CreateTable
CREATE TABLE "user" (
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

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "book" (
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
    "has_been_purchased" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "book_id" INTEGER NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("book_id","category")
);

-- CreateTable
CREATE TABLE "books_on_favorites" (
    "user_id" INTEGER NOT NULL,
    "book_id" INTEGER NOT NULL,
    "insertion_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "books_on_favorites_pkey" PRIMARY KEY ("user_id","book_id")
);

-- CreateTable
CREATE TABLE "comment" (
    "user_id" INTEGER NOT NULL,
    "book_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "publish_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("user_id","book_id","publish_date")
);

-- CreateTable
CREATE TABLE "user_on_comment" (
    "user_id" INTEGER NOT NULL,
    "book_id" INTEGER NOT NULL,
    "publish_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_on_comment_pkey" PRIMARY KEY ("user_id","book_id","publish_date")
);

-- CreateTable
CREATE TABLE "cart" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "total_value" MONEY NOT NULL DEFAULT 0.00,
    "creation_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "purchase_made" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "books_on_cart" (
    "cart_id" INTEGER NOT NULL,
    "book_id" INTEGER NOT NULL,
    "ammonut" INTEGER NOT NULL,
    "insertion_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "books_on_cart_pkey" PRIMARY KEY ("cart_id","book_id")
);

-- CreateTable
CREATE TABLE "purchase" (
    "user_id" INTEGER NOT NULL,
    "cart_id" INTEGER NOT NULL,
    "purchase_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total_value" MONEY NOT NULL,
    "payment_method" TEXT NOT NULL,

    CONSTRAINT "purchase_pkey" PRIMARY KEY ("user_id","cart_id")
);

-- CreateTable
CREATE TABLE "purchase_on_user" (
    "cart_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "purchase_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "purchase_on_user_pkey" PRIMARY KEY ("cart_id","user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_cpf_key" ON "user"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_number_key" ON "user"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "book_user_id_key" ON "book"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "category_book_id_key" ON "category"("book_id");

-- CreateIndex
CREATE UNIQUE INDEX "books_on_favorites_user_id_key" ON "books_on_favorites"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "books_on_favorites_book_id_key" ON "books_on_favorites"("book_id");

-- CreateIndex
CREATE UNIQUE INDEX "comment_user_id_key" ON "comment"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "comment_book_id_key" ON "comment"("book_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_on_comment_user_id_key" ON "user_on_comment"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_on_comment_book_id_key" ON "user_on_comment"("book_id");

-- CreateIndex
CREATE UNIQUE INDEX "cart_user_id_key" ON "cart"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "books_on_cart_cart_id_key" ON "books_on_cart"("cart_id");

-- CreateIndex
CREATE UNIQUE INDEX "books_on_cart_book_id_key" ON "books_on_cart"("book_id");

-- CreateIndex
CREATE UNIQUE INDEX "purchase_user_id_key" ON "purchase"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "purchase_cart_id_key" ON "purchase"("cart_id");

-- CreateIndex
CREATE UNIQUE INDEX "purchase_on_user_cart_id_key" ON "purchase_on_user"("cart_id");

-- CreateIndex
CREATE UNIQUE INDEX "purchase_on_user_user_id_key" ON "purchase_on_user"("user_id");

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books_on_favorites" ADD CONSTRAINT "books_on_favorites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books_on_favorites" ADD CONSTRAINT "books_on_favorites_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_on_comment" ADD CONSTRAINT "user_on_comment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_on_comment" ADD CONSTRAINT "user_on_comment_user_id_book_id_publish_date_fkey" FOREIGN KEY ("user_id", "book_id", "publish_date") REFERENCES "comment"("user_id", "book_id", "publish_date") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books_on_cart" ADD CONSTRAINT "books_on_cart_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books_on_cart" ADD CONSTRAINT "books_on_cart_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase" ADD CONSTRAINT "purchase_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_on_user" ADD CONSTRAINT "purchase_on_user_cart_id_user_id_fkey" FOREIGN KEY ("cart_id", "user_id") REFERENCES "purchase"("cart_id", "user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_on_user" ADD CONSTRAINT "purchase_on_user_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
