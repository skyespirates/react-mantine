import {
  TextInput,
  Button,
  Grid,
  Flex,
  Pagination,
  Loader,
} from "@mantine/core";
import GameCard from "../components/GameCard";
import AlertItem from "../components/AlertItem";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { fetchGame } from "../slices/gameSlice";

const SIZE = 8;

const Games = () => {
  const [query, setQuery] = useState("");
  const state = useSelector((state) => state.game);
  state;
  const dispatch = useDispatch();
  const handleClick = () => {
    if (query) {
      dispatch(fetchGame(query));
    }
  };

  // pagination
  const [page, setPage] = useState(1);
  page;
  const [records, setRecords] = useState(state.data);
  records;
  useEffect(() => {
    const from = (page - 1) * SIZE;
    const to = (page - 1) * SIZE + SIZE;
    setRecords(state.data.slice(from, to));
  }, [page, state.data]);

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
      {state.status === "loading" && (
        <Grid.Col span={12}>
          <Flex justify="center">
            <Loader color="blue" />
          </Flex>
        </Grid.Col>
      )}
      {state.status === "failed" && (
        <Grid.Col span={12}>
          <Flex justify="center">
            <AlertItem message={state.error.message} />
          </Flex>
        </Grid.Col>
      )}

      {state.status === "succeeded" && (
        <>
          {records.map((item) => (
            <Grid.Col key={item.id} span={{ base: 12, md: 6, lg: 3 }}>
              <GameCard game={item} />
            </Grid.Col>
          ))}
          <Grid.Col
            span={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Pagination
              value={page}
              onChange={setPage}
              total={Math.ceil(state.data.length / SIZE)}
            />
          </Grid.Col>
        </>
      )}
    </Grid>
  );
};

export default Games;
