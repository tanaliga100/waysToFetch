import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => axios.get("http://localhost:5000/superheroes");
export const useSuperHeroData = (onSuccess, onError) => {
  return useQuery("superHeroes", fetchSuperHeroes, {
    onSuccess: onSuccess,
    onError: onError,
    select: (data) => {
      const superHeroNames = data.data.map((hero) => hero.name);
      return superHeroNames;
    },
  });
};
