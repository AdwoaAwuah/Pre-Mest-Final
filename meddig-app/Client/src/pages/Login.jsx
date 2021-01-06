import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";
import "../styles.css";

const Login = ({ login }) => {
  const [userObject, setUserObject] = useState({
    email: "",
    password: "",
  });
  const [redirectTo, setRedirectTo] = useState(null);

  const handleChange = (event) => {
    // console.log(event.target.value);
    setUserObject({
      ...userObject,
      [event.target.name]: event.target.value,
    });
  };

  const handlelogin = (event) => {
    event.preventDefault();

    const isLoggedin = axios.post("/login", {
      email: userObject.email,
      password: userObject.password,
    });
    if (isLoggedin) {
      setRedirectTo("/assessment");
    } else {
      alert("Wrong email or password");
    }
  };
  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />;
  }

  return (
    <div className="Login">
      <h1>Login Page</h1>
      <Form onSubmit={handlelogin}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            name="email"
            value={userObject.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={userObject.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button block size="lg" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
