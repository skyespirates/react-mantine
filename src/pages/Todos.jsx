import { useDisclosure } from "@mantine/hooks";
import {
  Container,
  Modal,
  Button,
  TextInput,
  Space,
  List,
} from "@mantine/core";

import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../slices/todoSlice";

import { useState } from "react";

const Todos = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [todo, setTodo] = useState("");

  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todo) {
      dispatch(addTodo(todo));
      setTodo("");
      close();
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <Container>
      <Modal opened={opened} onClose={close} title="Add Todo Item">
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
          onClick={handleAddTodo}
        >
          Add Todo
        </Button>
      </Modal>

      <Button onClick={open}>Add Todo</Button>
      <Space h="md" />
      <List>
        {todos.map((todo) => (
          <List.Item
            key={todo.id}
            style={{ cursor: "pointer" }}
            onClick={() => handleRemoveTodo(todo.id)}
          >
            {todo.title}
          </List.Item>
        ))}
      </List>
    </Container>
  );
};

export default Todos;
