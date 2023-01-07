import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { Layout } from "./components/layout";
import Root, { loader as rootLoader } from "./routes/root";
import ErrorPage from "./pages/error";
import Jobs, { loader as jobsLoader } from "./routes/jobs";
import Home, { loader as homeLoader } from "./routes/home";
import Twitter, { loader as twitterLoader } from "./routes/twitter";

const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: "$green200",
      primaryLightHover: "$green300",
      primaryLightActive: "$green400",
      primaryLightContrast: "$green600",
      primary: "#4ADE7B",
      primaryBorder: "$green500",
      primaryBorderHover: "$green600",
      primarySolidHover: "$green700",
      primarySolidContrast: "$white",
      primaryShadow: "$green500",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",

      // you can also create your own color
      myColor: "#ff4ecd",

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});

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
    <NextUIProvider theme={theme}>
      <Layout>
        <RouterProvider router={router} />;
      </Layout>
    </NextUIProvider>
  );
}
