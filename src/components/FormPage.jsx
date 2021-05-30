import React, { useRef } from "react";
import { Row, Col, Form, FormControl, FormGroup } from "react-bootstrap";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import _default from "react-bootstrap/esm/CardColumns";

const FormPage = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const inputRef = useRef(null);

  //write some JS code
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText) {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: new Date().getTime().toString(),
        },
      ]);
      setInputText("");
    } else {
      let inputTab = inputRef.current;
      inputTab.focus();
    }
  };

  const handleSetStatus = (e) => {
    setStatus(e.target.value);
  };
  let defaultText = "add todo list...";
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row id="row">
          <Col id="plus-input" lg="8">
            <FormControl
              type="text"
              id="todo-input"
              onChange={inputTextHandler}
              value={inputText}
              ref={inputRef}
              placeholder={defaultText}
              mr="3"
            />
            <button type="submit" className="todo-button">
              <i className="fas fa-plus-square"></i>
            </button>
          </Col>

          <Col
            as="select"
            className="select"
            className="filter-todos"
            name="todos"
            onChange={handleSetStatus}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default FormPage;
