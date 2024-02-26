import { Card, Image, Text } from "@mantine/core";

const CardItem = ({ game }) => {
  return (
    <Card shadow="sm" padding="xl" radius="md" withBorder>
      <Card.Section>
        <Image src={game.background_image} h={160} alt={game.name} />
      </Card.Section>

      <Text fw={500} size="lg" mt="md" lineClamp={2}>
        {game.name}
      </Text>

      <Text mt="xs" c="dimmed" size="sm" lineClamp={3}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, libero!
      </Text>
    </Card>
  );
};

export default CardItem;
