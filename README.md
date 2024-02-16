# Papiro

**Status do Projeto** : Em andamento    

![Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Badge](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Badge](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)


## Tabela de Conteúdo

1. [Tecnologias utilizadas](#tecnologias-utilizadas)

2. [Download](#Download)

3. [Instalação](#Instalação)

4. [Configurações](#Configurações)

5. [Execução](#Execução)

6. [Arquitetura](#arquitetura)

7. [Autores](#autores)

<br>
<hr>

## Tecnologias utilizadas

Essas são as frameworks e ferramentas que você precisará instalar para desenvolver esse projeto:

**[Node.js](https://nodejs.org/en/)**  
**[React](https://pt-br.reactjs.org/)**  
**[Expo](https://expo.dev/)**   
**[Prisma](https://www.prisma.io/)**

<br>
<hr>

##  Download

*Para que seja possível a execução dos arquivos deste repositório, o usuário deve clonar através da ferramenta **[git](https://git-scm.com/downloads)**. Abrindo o terminal do seu sistema operacional ou o GitBash, insira o seguinte comando na pasta desejada:*

``` git
git clone https://github.com/AntonioNazar/underflow.git
```

## Instalação

Para o correto funcionamento do aplicativo, terão que ser feitas as instalações das dependências, tanto da pasta `back`, quanto da pasta `front`. Para isso entre na pasta que foi clonada pelo comando e exclua a pasta `.git`:

``` bash
cd underflow

```

### Na pasta `back`

Abra o seu terminal e execute o comando para instalar as dependências da pasta `back`.

``` bash
cd back
npm install -g lemon-pie-cli

```

### Na pasta `front`

Agora, execute os comandos abaixo para instalar as dependências da pasta `front`.

``` bash
cd ..
cd front
yarn global add expo-cli

```

<br>
<hr>

## Configurações

Após a instalação, algumas preparações anteriores devem ser realizadas na pasta `back`.

A partir dos comandos abaixo, será feita a configuração da pasta `back`:

```bash
cd ..
cd back
npx prisma migrate dev --papiro init

```

Também é preciso configurar o .env com o Postgres.
Exemplo padrão: postgresql://user:password@host:port/dbname?schema=public

No front é necessário baixar qualquer eventual dependência na pasta `front`:

```bash

cd front
yarn expo install react-native-web react-dom @expo/metro-runtime

```

##  Execução

Ainda na pasta `back`, execute o seguinte comando para servir o aplicativo em um servidor customizado para posterior execução no front-end:

``` bash
npm run dev ou npm start

Com as configurações feitas, mude a seguir para a pasta `front`, para a execução do aplicativo utilizando o **Expo** utilizando os seguintes comandos:

``` bash
cd ..
cd front
npx expo start

```
Para parar a execução do aplicativo, basta executar o comando `CTRL + C` no terminal.

<br>
<hr>    

- [Trello](https://trello.com/invite/b/4VAZmeI2/ATTI19764f6eaa2f928a520c9ccbb89a936b5C8031E4/squad-1-tt-20241)

- [Figma](https://www.figma.com/file/moGIv0ie9JGpWYFLGQGRF3/Papiro?type=design&node-id=0-1&mode=design&t=iFcf1D1QFMsL1aoF-0)

- [Figma UX](https://www.figma.com/file/A6JxcTNTW8RboBF0HNZGMT/%5BTemplate%5D-Processo-de-UX---Squad-Dev-(Copy)-(Copy)?type=whiteboard&node-id=0-1&t=k7W7xZCcH2Se5orX-0)

- [Modelagem]-()

## Autores


* Gerente - Francisco

* Tech Lead - Antonio

* Dev Front-end - Gabriel Ayres

* Dev Front-end - Miguel Ângelo

* Dev Back-end - Sòcrates de Sousa