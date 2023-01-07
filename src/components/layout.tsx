import { Box } from "./box";

export const Layout = ({ children }: any) => (
  <Box
    css={{
      maxW: "100%",
      //   border: "1px solid red",
      padding: "$0 $0 $5 $0",
    }}
  >
    {children}
  </Box>
);
