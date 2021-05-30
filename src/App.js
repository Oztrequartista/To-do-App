import React, { useState, useEffect } from "react";
import "./App.css";
//importing components

import Todos from "./components/Todos";
import {Container, Row, Col} from "react-bootstrap"
import FormPage from "./components/FormPage";

function App() {
  //instead of creating the INPUT state here and passing it down as props, you can create the state values directly into the form component

  //RUN ONCE WHEN THE APP STARTS
  useEffect(() => {
    getLocalTodos();
  }, []);
  //STATES
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //FUNCTIONS that checks whether todo status is true or false
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //USE EFFECT TO HANDLE STATUS CHANGES
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //save everything to local storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  //create another function that doesn't refresh todos when refreshed
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localtodo = JSON.parse(localStorage.getItem("todos"));
      // console.log(localtodo);
      setTodos(localtodo);
    }
  };
  return (
    <Container fluid className="App">
      <Row as="header">
        <Col as="h1" >Edmund's Todo List</Col>
      </Row>
      <FormPage
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        status={status}
        setStatus={setStatus}
      />
      <Todos todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </Container>
  );
}

export default App;
