import {
  TextInput,
  Button,
  Grid,
  Flex,
  Pagination,
  Loader,
} from "@mantine/core";
import CardItem from "../components/CardItem";
import AlertItem from "../components/AlertItem";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { fetchAnimeByQuery } from "../slices/animeSlice";

const SIZE = 8;

const Animes = () => {
  const [query, setQuery] = useState("");
  const state = useSelector((state) => state.anime);
  state;
  const dispatch = useDispatch();
  const handleClick = () => {
    if (query) {
      dispatch(fetchAnimeByQuery(query));
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
          {
            // <p>Anime</p>

            records.map((item) => (
              <Grid.Col key={item.title} span={{ base: 12, md: 6, lg: 3 }}>
                <CardItem anime={item} />
              </Grid.Col>
            ))
          }
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

export default Animes;
