import { TextInput, Button, Grid, Flex } from "@mantine/core";
import CardItem from "../components/CardItem";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { fetchAnimeByQuery } from "../slices/animeSlice";

const items = [1, 2, 3, 4, 5];

const Animes = () => {
  const [query, setQuery] = useState("");
  const state = useSelector((state) => state.anime);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (query) {
      dispatch(fetchAnimeByQuery(query));
      setQuery("");
    }
  };
  return (
    <Grid>
      <Grid.Col span={12} p={"lg"}>
        <Flex columnGap={"md"} justify={"center"}>
          <TextInput
            placeholder="Search Anime..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button onClick={handleClick}>Search</Button>
        </Flex>
      </Grid.Col>
      {state.status === "loading" && <p>Loading..</p>}
      {state.status === "failed" && <p>{state.error.message}</p>}

      {state.status === "succeeded" && (
        <>
          {state.data.map((item) => (
            <Grid.Col key={item} span={{ base: 12, md: 6, lg: 3 }}>
              <CardItem anime={item} />
            </Grid.Col>
          ))}
        </>
      )}
    </Grid>
  );
};

export default Animes;
