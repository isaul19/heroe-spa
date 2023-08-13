import { heroesData } from "../data/heroes";

export const getHeroesById = (id) => {
  return heroesData.find((hero) => hero.id === id);
};
