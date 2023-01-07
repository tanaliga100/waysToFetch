import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import User1 from "./User1";
import User2 from "./User2";

const index = () => {
  const client = new QueryClient();

  return (
    <div>
      <h3>Using React Query</h3>
      <QueryClientProvider client={client}>
        <User1 />
        <User2 />
      </QueryClientProvider>
    </div>
  );
};
export default index;
