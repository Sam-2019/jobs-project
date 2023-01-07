import { Container } from "@nextui-org/react";
import List from "../../components/list";

export default function Art(data: any) {
  console.log("art");
  return (
    <Container>
      <List dataSource={data} />
    </Container>
  );
}
