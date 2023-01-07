import { Container } from "@nextui-org/react";
import List from "./list";

export default function Twitter(data: any) {
  console.log("twitter");
  return (
    <Container>
      <List dataSource={data} />
    </Container>
  );
}
