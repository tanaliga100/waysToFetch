import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import DynamicParallel from "./src/components/DynamicParallel";
import Home from "./src/components/Home";
import ParallelQueries from "./src/components/ParallelQueries";
import RQSuperHero from "./src/components/RQSuperHero";
import RQSuperHeroesPage from "./src/components/RQSuperHeroesPage";
import SuperHeroesPage from "./src/components/SuperHeroesPage";

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
            <Route path="/rq-parallel" element={<ParallelQueries />} />
            <Route
              path="/rq-dynamic-parallel"
              element={<DynamicParallel heroIds={[1, 3]} />}
            />

            <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
            <Route path="/rq-super-heroes/:heroId" element={<RQSuperHero />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};
export default ReactQuery;
