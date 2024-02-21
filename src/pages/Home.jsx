import { Grid } from "@mantine/core";

import CardItem from "../components/CardItem";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Home = () => {
  return (
    <Grid>
      {items.map((item) => (
        <Grid.Col key={item} span={4}>
          <CardItem />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default Home;
