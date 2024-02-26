import { Alert } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

const AlertItem = ({ message }) => {
  const icon = <IconInfoCircle />;
  return (
    <Alert variant="light" color="red" title="Ouch!" icon={icon}>
      {message}
    </Alert>
  );
};

export default AlertItem;
