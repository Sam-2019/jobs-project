import { RouterProvider } from "react-router-dom";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { Layout } from "./components/layout";
import { router } from "./utils/router";

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
    breakpoints: {
      xs: "650px",
      sm: "960px",
      md: "1280px",
      lg: "1400px",
      xl: "1920px",
    },
  },
});

export default function App() {
  return (
    <NextUIProvider theme={theme}>
      <Layout>
        <RouterProvider router={router} />;
      </Layout>
    </NextUIProvider>
  );
}
