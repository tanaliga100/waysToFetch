import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { apiURL } from "..";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const index = () => {
  const { data, error, loading } = useSWR(apiURL, fetcher, {
    suspense: true,
  });
  if (error) {
    return <h3>there wan an error</h3>;
  }
  return (
    <div>
      <h3>Using SWR</h3>
      <img src={data.message} width={300} height={300} alt="dog" />
    </div>
  );
};
export default index;
