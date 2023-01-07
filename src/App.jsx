import { Suspense, useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import { UsingAxios, UsingFetch, UsingReactQuery, UsingSWR } from "./features";

function App() {
  return (
    <>
      <h1>Ways to FETCH THE DATA</h1>
      <div className=" container">
        {/* <Suspense fllback={<h1>Loading...</h1>}> */}
        {/* <UsingFetch /> */}
        {/* <UsingAxios /> */}
        {/* <UsingSWR /> */}
        <UsingReactQuery />
        {/* </Suspense> */}
      </div>
    </>
  );
}
export default App;
