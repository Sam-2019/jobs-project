import { Container } from "@nextui-org/react";
import List from "../../components/list";

export default function Jobs(data: any) {
  console.log("jobs");
  return (
    <Container>
      <List dataSource={data} view={false} />
    </Container>
  );
}
