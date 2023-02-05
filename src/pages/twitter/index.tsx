import { Container } from "@nextui-org/react";
import List from "../../components/twitter";

export default function Twitter(data: any) {
  console.log("twitter");
  return (
    <Container>
      <List dataSource={data} />
    </Container>
  );
}
