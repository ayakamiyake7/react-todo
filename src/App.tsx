import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Input, Typography, Layout, Button, Select } from "antd";

const { Text, Title } = Typography;
const { Header } = Layout;
const { Option } = Select;

type Todo = {
  Option: string;
};

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleInputChange = (e: any) => {
    setTodoText(e.target.value);
    console.log(e.target.value);
  };
  const handleClickCreate = () => {
    if (todoText === "") return;
    const newTodo = {
      text: todoText,
      status: "Not Started",
    };
    // const newTodos = [...todos, todoText];
    // setTodos(newTodos);
    setTodos([
      // copy the current values in state
      ...todos,
    ]);
    console.log("todos-", todos);
    console.log("todoText=", todoText);
  };

  return (
    <div className="App">
      <Header
        style={{
          backgroundColor: "#ff7a45",
          height: "auto",
          padding: "10px 50px",
          margin: "0 0 40px",
        }}
      >
        <Title style={{ color: "#fff", margin: 0 }}>Todo List</Title>
      </Header>
      <Input
        placeholder="Enter a todo"
        type="text"
        value={todoText}
        onChange={handleInputChange}
        style={{ width: "20%", marginRight: "20px" }}
      />
      <Button onClick={handleClickCreate}>Create</Button>
      <ul style={{ width: "50%", margin: "20px auto 0" }}>
        <li style={{ textAlign: "left" }}>
          <Text style={{ marginRight: "10px" }}>Test</Text>
          <Select style={{ width: "30%", marginRight: "20px" }}>
            <Option value="Not Started">Not Started</Option>
            <Option value="Not Started">In Progress</Option>
            <Option value="Not Started">Completed</Option>
          </Select>
          <Button style={{ marginRight: "10px" }}>Update</Button>
          <Button>Delete</Button>
        </li>
        {todos.map((todo, index) => (
          <li key={index} style={{ textAlign: "center" }}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
