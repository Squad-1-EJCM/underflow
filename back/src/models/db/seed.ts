import { faker } from "@faker-js/faker/locale/pt_BR";
import { Prisma, PrismaClient } from "@prisma/client";
import auth from "../../config/auth";
import { Decimal } from "@prisma/client/runtime/library";
import CategoryController from "../../controllers/CategoryController";

const prisma = new PrismaClient();

const NUMBER_OF_USERS = 30

interface User {
  name: string;
  lastName: string;
  cpf: string;
  email: string;
  hashPassword: string;
  salt: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  cep: string;
  houseNumber: string;
  addressSupplement: string;
  birthday: Date;
  phoneNumber: string;
}

interface Book {
  title: string;
  price: number;
  discount: number;
  edition: string;
  authors: string[];
  language: string;
  condition: string;
  format: string;
  description: string;
  imgUrl: string;
  publisheruser: {
    connect: {
      id: number;
    };
  };
}

let userData: User[] = [];
let bookData: Prisma.BookCreateInput[] = [];


function getRandomCategory(): string {
    const cathegory: string[] = [
      "Romance",
      "Fantasia",
      "Poesia",
      "Ficção científica",
      "Terror",
      "Drama",
      "Biografia",
      "História",
      "Autoajuda",
      "Humor",
    ];
  
    const randomIndex = Math.floor(Math.random() * cathegory.length);
  
    return cathegory[randomIndex];
  }

export async function clientSeed() {
  for (let i = 0; i < NUMBER_OF_USERS; i++) {
    const input: User = {
      name: faker.person.firstName(),
      lastName: faker.person.lastName(),
      cpf: faker.location.zipCode(),
      email: faker.internet.email(),
      hashPassword: faker.internet.password(),
      salt: "",
      state: faker.location.state(),
      city: faker.location.city(),
      neighborhood: faker.location.street(),
      street: faker.location.street(),
      cep: faker.location.zipCode(),
      houseNumber: faker.location.buildingNumber(),
      addressSupplement: faker.location.ordinalDirection(),
      birthday: faker.date.birthdate(),
      phoneNumber: faker.phone.number(),
    };

    const { hashPassword, salt } = auth.generatePassword(input.hashPassword);
    input.hashPassword = hashPassword;
    input.salt = salt;

    userData.push(input);
  }

  await prisma.user.createMany({
    data: userData,
  });
}

export async function bookSeed() {
  if (userData.length == 0) {
    console.log("seed client list is empty!");
    process.exit(1);
  }

  for (let i = 1; i <= NUMBER_OF_USERS; i++) {

    const input: Prisma.BookCreateInput = {
      title: faker.company.catchPhraseAdjective(),
      price: Number(faker.commerce.price()),
      discount: 0,
      edition: faker.number.int().toString(),
      authors: [faker.person.fullName()],
      language: "Portugês",
      condition: "Usado",
      format: "Capa-dura",
      description: faker.lorem.paragraph(),
      imgUrl: "",
      publisherUser:{
        connect:{
          id:i
        }
      }
    };
    
    bookData.push(input);

   const createdBook = await prisma.book.create({
      data: input,
    });

    let categories:string[] = []

    let numberOfCathegories = 2 + Math.floor(Math.random() * 4)
    for(let i = 0; i < numberOfCathegories; i++){
        let randomCategory = getRandomCategory()

        if((categories.indexOf(randomCategory) < 0) && !(categories.includes(randomCategory))){
          categories.push(randomCategory)
        }
    }
    

   await CategoryController.createManyFromArray(categories,createdBook.id)

  }
}
async function main() {
 await clientSeed();
 await bookSeed();
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
