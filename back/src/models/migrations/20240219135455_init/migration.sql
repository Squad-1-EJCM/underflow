-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "cpf" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "senha_hasheada" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero_rua" TEXT NOT NULL,
    "complemento" TEXT,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "ddd" TEXT NOT NULL,
    "numero_telefone" TEXT NOT NULL,
    "img_url" TEXT,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Livro" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "autor" TEXT[],
    "preco" MONEY NOT NULL,
    "data_publicacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idioma" TEXT NOT NULL,
    "integridade" TEXT NOT NULL,
    "encardenacao" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "usuario_publicador" INTEGER NOT NULL,

    CONSTRAINT "Livro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Autor" (
    "id_livro" INTEGER NOT NULL,
    "autor" TEXT NOT NULL,

    CONSTRAINT "Autor_pkey" PRIMARY KEY ("id_livro","autor")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id_livro" INTEGER NOT NULL,
    "categoria" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id_livro","categoria")
);

-- CreateTable
CREATE TABLE "LivroFavoritado" (
    "idusuario" INTEGER NOT NULL,
    "idLivro" INTEGER NOT NULL,

    CONSTRAINT "LivroFavoritado_pkey" PRIMARY KEY ("idusuario","idLivro")
);

-- CreateTable
CREATE TABLE "Comentario" (
    "id_usuario" INTEGER NOT NULL,
    "id_livro" INTEGER NOT NULL,
    "conteudo" TEXT NOT NULL,
    "data_publicacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comentario_pkey" PRIMARY KEY ("id_usuario","id_livro","data_publicacao")
);

-- CreateTable
CREATE TABLE "ComentariosPostados" (
    "id_usuario" INTEGER NOT NULL,
    "id_livro" INTEGER NOT NULL,
    "data_publicacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ComentariosPostados_pkey" PRIMARY KEY ("id_usuario","id_livro","data_publicacao")
);

-- CreateTable
CREATE TABLE "Carrinho" (
    "id" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "valor_total" MONEY NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "data_adicionado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Carrinho_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LivroNoCarrinho" (
    "id_carrinnho" INTEGER NOT NULL,
    "id_livro" INTEGER NOT NULL,

    CONSTRAINT "LivroNoCarrinho_pkey" PRIMARY KEY ("id_carrinnho","id_livro")
);

-- CreateTable
CREATE TABLE "Compra" (
    "id_usuario" INTEGER NOT NULL,
    "id_carrinho" INTEGER NOT NULL,
    "data_compra" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valor_pago" MONEY NOT NULL,
    "metodo_pagamento" INTEGER NOT NULL,
    "metodoPagamento" TEXT NOT NULL,

    CONSTRAINT "Compra_pkey" PRIMARY KEY ("id_usuario","id_carrinho")
);

-- CreateTable
CREATE TABLE "CompraEfetuada" (
    "id_carrinho" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "data_compra" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valor" MONEY NOT NULL,
    "metodo_pagamento" TEXT NOT NULL,

    CONSTRAINT "CompraEfetuada_pkey" PRIMARY KEY ("id_carrinho","id_usuario")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Livro_usuario_publicador_key" ON "Livro"("usuario_publicador");

-- CreateIndex
CREATE UNIQUE INDEX "Autor_id_livro_key" ON "Autor"("id_livro");

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_id_livro_key" ON "Categoria"("id_livro");

-- CreateIndex
CREATE UNIQUE INDEX "LivroFavoritado_idusuario_key" ON "LivroFavoritado"("idusuario");

-- CreateIndex
CREATE UNIQUE INDEX "LivroFavoritado_idLivro_key" ON "LivroFavoritado"("idLivro");

-- CreateIndex
CREATE UNIQUE INDEX "Comentario_id_usuario_key" ON "Comentario"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Comentario_id_livro_key" ON "Comentario"("id_livro");

-- CreateIndex
CREATE UNIQUE INDEX "ComentariosPostados_id_usuario_key" ON "ComentariosPostados"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "ComentariosPostados_id_livro_key" ON "ComentariosPostados"("id_livro");

-- CreateIndex
CREATE UNIQUE INDEX "Carrinho_id_usuario_key" ON "Carrinho"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "LivroNoCarrinho_id_carrinnho_key" ON "LivroNoCarrinho"("id_carrinnho");

-- CreateIndex
CREATE UNIQUE INDEX "LivroNoCarrinho_id_livro_key" ON "LivroNoCarrinho"("id_livro");

-- CreateIndex
CREATE UNIQUE INDEX "Compra_id_usuario_key" ON "Compra"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Compra_id_carrinho_key" ON "Compra"("id_carrinho");

-- CreateIndex
CREATE UNIQUE INDEX "Compra_metodo_pagamento_key" ON "Compra"("metodo_pagamento");

-- CreateIndex
CREATE UNIQUE INDEX "CompraEfetuada_id_carrinho_key" ON "CompraEfetuada"("id_carrinho");

-- CreateIndex
CREATE UNIQUE INDEX "CompraEfetuada_id_usuario_key" ON "CompraEfetuada"("id_usuario");

-- AddForeignKey
ALTER TABLE "Livro" ADD CONSTRAINT "Livro_usuario_publicador_fkey" FOREIGN KEY ("usuario_publicador") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Autor" ADD CONSTRAINT "Autor_id_livro_fkey" FOREIGN KEY ("id_livro") REFERENCES "Livro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Categoria" ADD CONSTRAINT "Categoria_id_livro_fkey" FOREIGN KEY ("id_livro") REFERENCES "Livro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LivroFavoritado" ADD CONSTRAINT "LivroFavoritado_idusuario_fkey" FOREIGN KEY ("idusuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LivroFavoritado" ADD CONSTRAINT "LivroFavoritado_idLivro_fkey" FOREIGN KEY ("idLivro") REFERENCES "Livro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComentariosPostados" ADD CONSTRAINT "ComentariosPostados_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComentariosPostados" ADD CONSTRAINT "ComentariosPostados_id_usuario_id_livro_data_publicacao_fkey" FOREIGN KEY ("id_usuario", "id_livro", "data_publicacao") REFERENCES "Comentario"("id_usuario", "id_livro", "data_publicacao") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carrinho" ADD CONSTRAINT "Carrinho_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LivroNoCarrinho" ADD CONSTRAINT "LivroNoCarrinho_id_carrinnho_fkey" FOREIGN KEY ("id_carrinnho") REFERENCES "Carrinho"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LivroNoCarrinho" ADD CONSTRAINT "LivroNoCarrinho_id_livro_fkey" FOREIGN KEY ("id_livro") REFERENCES "Livro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompraEfetuada" ADD CONSTRAINT "CompraEfetuada_id_carrinho_id_usuario_fkey" FOREIGN KEY ("id_carrinho", "id_usuario") REFERENCES "Compra"("id_carrinho", "id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompraEfetuada" ADD CONSTRAINT "CompraEfetuada_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
