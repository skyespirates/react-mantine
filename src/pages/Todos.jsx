import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, TextInput } from "@mantine/core";

import { useState } from "react";

const Todos = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [todo, setTodo] = useState("");
  return (
    <>
      <Modal opened={opened} onClose={close} title="Add Todo Item" centered>
        <TextInput
          label="Add Todo"
          placeholder="jogging"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button
          fullWidth
          styles={{
            root: {
              margin: "16px 0",
            },
          }}
          onClick={() => {
            if (todo) {
              console.log(todo);
              setTodo("");
            }
          }}
        >
          Add Todo
        </Button>
      </Modal>

      <Button onClick={open}>Add Todo</Button>
    </>
  );
};

export default Todos;
