import axios from "axios";
import React from "react";
import { useQueries } from "react-query";

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:5000/superheroes/${heroId}`);
};
const DynamicParallel = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );
  console.log(queryResults);
  return <div>DynamicParallel</div>;
};

export default DynamicParallel;
