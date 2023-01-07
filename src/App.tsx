import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { Layout } from "./components/layout";
import Root, { loader as rootLoader } from "./routes/root";
import ErrorPage from "./pages/error";
import Jobs, { loader as jobsLoader } from "./routes/jobs";
import Home, { loader as homeLoader } from "./routes/home";
import Twitter, { loader as twitterLoader } from "./routes/twitter";

const router = createBrowserRouter([
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
    ],
  },
]);

export default function Index() {
  return (
    <NextUIProvider>
      <Layout>
        <RouterProvider router={router} />;
      </Layout>
    </NextUIProvider>
  );
}
