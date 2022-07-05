import { NextUIProvider, Container } from "@nextui-org/react";
import Jobs from "./jobs";

export default function App() {
 return (
  <NextUIProvider>
   <Container>
    <Jobs />
   </Container>
  </NextUIProvider>
 );
}