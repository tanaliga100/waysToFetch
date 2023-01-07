import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiURL } from "..";
const index = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(apiURL).then((res) => {
      setData(res.data);
    });
  }, [data]);
  return (
    <div>
      <h3>Using Axios</h3>
      <img src={data.message} width={300} height={300} alt="dog" />
    </div>
  );
};
export default index;
