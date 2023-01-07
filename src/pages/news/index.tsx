import { Container } from "@nextui-org/react";
import List from "../../components/list";

export default function News(data: any) {
  console.log("new");
  return (
    <Container>
      <List dataSource={data} />
    </Container>
  );
}
