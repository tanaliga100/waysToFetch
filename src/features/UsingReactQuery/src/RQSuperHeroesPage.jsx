import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useSuperHeroesData } from "./hooks/useSuperHeroesData";

const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("perform side effect after fetching");
  };
  const onError = (error) => {
    console.log("perform side effect after encountering error");
  };

  const { isLoading, data, error, isError, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  if (isLoading) {
    return <p>Wait... loading...</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  // console.log("select", data);
  // console.log({ isLoading, isFetching });
  return (
    <div>
      <h3>RQSuperHeroesPage</h3>
      <section>
        {data.data.map((hero) => (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>
              <h3>{hero.name}</h3>
            </Link>
          </div>
        ))}
        {/* {data.map((hero) => (
          <div key={hero}>{hero}</div>
        ))} */}
      </section>
    </div>
  );
};
export default RQSuperHeroesPage;
