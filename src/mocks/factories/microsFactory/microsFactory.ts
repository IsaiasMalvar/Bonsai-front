import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import { MicroStructure } from "../../../store/types";

const microsFactory = Factory.define<MicroStructure>(() => ({
  id: faker.database.mongodbObjectId.toString(),
  title: faker.lorem.words(),
  dateOfCreation: faker.date.birthdate().toString(),
  genre: faker.lorem.word(),
  isPublic: faker.datatype.boolean(),
  image: faker.image.url(),
  story: faker.lorem.paragraphs(),
  author: faker.person.firstName(),
}));

export const getMicrosMockData = (howMany: number, data?: MicroStructure) =>
  microsFactory.buildList(howMany, data);

export const getMicroMockData = (data?: Partial<MicroStructure>) =>
  microsFactory.build(data);

export const getMicrosPartialMockData = (
  howMany: number,
  data?: Partial<MicroStructure>
) => microsFactory.buildList(howMany, data);
