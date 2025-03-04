import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "Bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import Employee from "./Employee";

function Add() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0,8);
    console.log(uniqueId);

    let a = name;
    let b = age;

    Employee.push({id: uniqueId, Name: a, Age: b});

    history("/");
  }

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter your Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder="Enter your Age"
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Add;
