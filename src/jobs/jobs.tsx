import { Grid } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";
import { CardItem } from "../components/card copy";
import Types from "./types";

export default function JobList({ dataSource }: any) {
  return (
    <div>
      <Grid.Container justify="center" gap={2}>
        <Types />

        {dataSource.map((item: any) => (
          <Grid xs={12} sm={4} key={item.id}>
            <CardItem description={item.description} data={item} />
          </Grid>
        ))}
      </Grid.Container>
      <div>
        <Pagination total={10} initialPage={1} />
      </div>
    </div>
  );
}
