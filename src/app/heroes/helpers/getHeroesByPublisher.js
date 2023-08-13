import { heroesData } from "../data/heroes";

const publishers = ["DC Comics", "Marvel Comics"];

export const getHeroesByPublisher = (publisher) => {
  if (!publishers.includes(publisher)) {
    throw new Error(`${publisher} is not valid publisher`);
  }

  return heroesData.filter((hero) => hero.publisher === publisher);
};
