import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => axios.get("http://localhost:5000/superheroes");

const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("perform side effect after fetching");
  };
  const onError = (error) => {
    console.log("perform side effect after encountering error");
  };
  const results = useQuery("superHeroes", fetchSuperHeroes, {
    onSuccess: onSuccess,
    onError: onError,
    select: (data) => {
      const superHeroNames = data.data.map((hero) => hero.name);
      return superHeroNames;
    },
  });
  const { isLoading, data, error, isError, isFetching } = results;

  if (isLoading) {
    return <p>Wait... loading...</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  console.log("select", data);
  console.log({ isLoading, isFetching });
  return (
    <div>
      <h3>RQSuperHeroesPage</h3>
      <section>
        {/* {data.data.map((s) => (
          <div key={s.id}>
            {s.name} :<small>{s.alterEgo}</small>
          </div>
        ))} */}
        {data.map((hero) => (
          <div key={hero}>{hero}</div>
        ))}
      </section>
    </div>
  );
};
export default RQSuperHeroesPage;
