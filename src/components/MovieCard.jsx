import { Card, Image, Text } from "@mantine/core";

const imgBaseUrl = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie }) => {
  return (
    <Card shadow="sm" padding="xl" radius="md" withBorder>
      <Card.Section>
        <Image
          src={`${imgBaseUrl}/${movie.backdrop_path}`}
          h={160}
          alt={movie.original_title}
          fallbackSrc="https://placehold.co/600x400?text=image"
        />
      </Card.Section>

      <Text fw={500} size="lg" mt="md" lineClamp={2}>
        {movie.original_title}
      </Text>

      <Text mt="xs" c="dimmed" size="sm" lineClamp={3}>
        {movie.overview}
      </Text>
    </Card>
  );
};

export default MovieCard;
