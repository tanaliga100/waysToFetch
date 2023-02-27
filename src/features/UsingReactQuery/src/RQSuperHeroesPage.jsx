import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => axios.get("http://localhost:5000/superheroes");

const RQSuperHeroesPage = () => {
  const results = useQuery("superHeroes", fetchSuperHeroes, {
    staleTime: 30000,
  });
  const { isLoading, data, error, isError, isFetching } = results;
  if (isLoading) {
    return <p>Wait... loading...</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  console.log({ isLoading, isFetching });
  return (
    <div>
      <h3>RQSuperHeroesPage</h3>
      <section>
        {data.data.map((s) => (
          <div key={s.id}>{s.name}</div>
        ))}
      </section>
    </div>
  );
};
export default RQSuperHeroesPage;
