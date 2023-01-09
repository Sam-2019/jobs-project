import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error";
import Art, { loader as artLoader } from "../routes/art";
import Root, { loader as rootLoader } from "../routes/root";
import Jobs, { loader as jobsLoader } from "../routes/jobs";
import Home, { loader as homeLoader } from "../routes/home";
import News, { loader as newsLoader } from "../routes/news";
import Movies, { loader as moviesLoader } from "../routes/movies";
import Twitter, { loader as twitterLoader } from "../routes/twitter";
import { collapseItems } from "./data";

export const router = createBrowserRouter([
  {
    path: collapseItems[0].path,
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: collapseItems[0].path,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: collapseItems[1].path,
        element: <News />,
        loader: newsLoader,
      },
      {
        path: collapseItems[2].path,
        element: <Art />,
        loader: artLoader,
      },
      {
        path: collapseItems[3].path,
        element: <Movies />,
        loader: moviesLoader,
      },
      {
        path: collapseItems[4].path,
        element: <Twitter />,
        loader: twitterLoader,
      },
      {
        path: collapseItems[5].path,
        element: <Jobs />,
        loader: jobsLoader,
      },
    ],
  },
]);
