import React from "react";
import { Grid, Pagination } from "@nextui-org/react";
import { CardItem } from "../components/card";

export default function List({ dataSource, view = true }: any) {
  const [state, setState] = React.useState(1);

  return (
    <div>
      <Grid.Container justify="center" gap={2}>
        {dataSource.map((item: any) => (
          <Grid xs={12} sm={3} key={item.id}>
            <CardItem description={item.description} data={item} view={view} />
          </Grid>
        ))}
      </Grid.Container>
      <Grid.Container justify="center">
        <Pagination
          total={10}
          initialPage={state}
          onChange={(info) => setState(info)}
        />
      </Grid.Container>
    </div>
  );
}
