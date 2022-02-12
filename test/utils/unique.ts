import { faker } from '@faker-js/faker';

export const uniqueString = (str: string) => {
  return `${str} ${faker.datatype.uuid()}`;
};
