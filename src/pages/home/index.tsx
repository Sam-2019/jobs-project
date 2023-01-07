import { Container } from "@nextui-org/react";
import List from "./list";

export default function Home(data: any) {
  console.log("home");
  return (
    <Container>
      <List dataSource={data} />
    </Container>
  );
}
