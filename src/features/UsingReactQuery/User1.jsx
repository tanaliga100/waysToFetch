import { useQuery } from "react-query";
import getUser from "../UsingReactQuery/getUser";
const User1 = () => {
  const { data, error, isLoading } = useQuery("user", getUser());
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <div>User1</div>
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong>{" "}
        <strong>✨ {data.stargazers_count}</strong>{" "}
        <strong>🍴 {data.forks_count}</strong>
      </div>
    </>
  );
};
export default User1;
