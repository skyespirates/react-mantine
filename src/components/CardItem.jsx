import { Card, Image, Text } from "@mantine/core";

const CardItem = ({ anime }) => {
  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      href={anime?.url}
      target="_blank"
    >
      <Card.Section>
        <Image
          src={anime?.images.jpg.large_image_url}
          h={160}
          alt={anime?.title}
        />
      </Card.Section>

      <Text fw={500} size="lg" mt="md" lineClamp={2}>
        {anime?.title}
      </Text>

      <Text mt="xs" c="dimmed" size="sm" lineClamp={3}>
        {anime?.synopsis}
      </Text>
    </Card>
  );
};

export default CardItem;
