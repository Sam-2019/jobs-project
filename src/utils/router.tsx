import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error";
import Art, { loader as artLoader } from "../routes/art";
import Root, { loader as rootLoader } from "../routes/root";
import Jobs, { loader as jobsLoader } from "../routes/jobs";
import Home, { loader as homeLoader } from "../routes/home";
import News, { loader as newsLoader } from "../routes/news";
import Movies, { loader as moviesLoader } from "../routes/movies";
import Twitter, { loader as twitterLoader } from "../routes/twitter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/jobs",
        element: <Jobs />,
        loader: jobsLoader,
      },
      {
        path: "/twitter",
        element: <Twitter />,
        loader: twitterLoader,
      },
      {
        path: "/news",
        element: <News />,
        loader: newsLoader,
      },
      {
        path: "/movies",
        element: <Movies />,
        loader: moviesLoader,
      },
      {
        path: "/art",
        element: <Art />,
        loader: artLoader,
      },
    ],
  },
]);
