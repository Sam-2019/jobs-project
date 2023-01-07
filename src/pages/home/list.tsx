import { Grid, Pagination } from "@nextui-org/react";
import { CardItem } from "../../components/card";

export default function JobList({ dataSource }: any) {
  return (
    <div>
      <Grid.Container justify="center" gap={2}>
        {dataSource.map((item: any) => (
          <Grid xs={12} sm={3} key={item.id}>
            <CardItem description={item.description} data={item} />
          </Grid>
        ))}
      </Grid.Container>
      <Grid.Container justify="center">
        <Pagination total={10} initialPage={1} />
      </Grid.Container>
    </div>
  );
}
