import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Home from "./src/Home";
import RQSuperHeroesPage from "./src/RQSuperHeroesPage";
import SuperHeroesPage from "./src/SuperHeroesPage";

// query Instance
const queryClient = new QueryClient();
const ReactQuery = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <nav>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                gap: "1rem",
                justifyContent: "space-between",
                width: "80vw",
                fontSize: "2rem",
              }}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/super-heroes" element={<SuperHeroesPage />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};
export default ReactQuery;
