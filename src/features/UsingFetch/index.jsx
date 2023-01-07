import React, { useEffect, useState } from "react";
import { apiURL } from "..";
const index = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        console.log("from fetch", data.message);
        setData(data?.message);
      })

      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div>
      <h3>Using Fetch</h3>
      <img src={data} width={300} height={300} alt="dog" />
    </div>
  );
};
export default index;
