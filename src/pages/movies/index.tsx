import { Container } from "@nextui-org/react";
import List from "../../components/list";

export default function Movies(data: any) {
  console.log("movies");
  return (
    <Container>
      <List dataSource={data} />
    </Container>
  );
}
