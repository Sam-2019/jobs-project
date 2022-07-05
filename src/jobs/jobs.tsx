import { Grid } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";
import { CardItem } from "../components/card";
import { userData } from "../utils/data";
import Types from "./types";

export default function JobList(dataSource: any) {
 console.log(dataSource);
 
 return (
  <Grid.Container justify="center" gap={2}>
   <Types />
   {userData.map((item) => (
    <Grid xs={12} sm={4} key={item.key}>
     <CardItem />
    </Grid>
   ))}
   <Pagination total={10} initialPage={1} />
  </Grid.Container>
 );
}
