import { heroesData } from "../data/heroes";

export const getHeroesByName = (name) => {
  if (!name || !name.trim()) return [];

  name = name.toLowerCase().trim();

  return heroesData.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
