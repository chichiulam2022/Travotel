import React, { useEffect } from "react";
import "./LoginPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Background from "../../assets/login.png";
import Validation from "./Validation";

export default function LoginPage() {
const [values, setValues] = useState({
  name:'',
  password:''
})

const [errors,setError] = useState({})

function handleChange (e){
  setValues({...values, [e.target.name]:e.target.name})
}

function handleSubmit(){
  e.preventDefault();
  setError(Validation(values));
}

useEffect(()=>{
  if(Object.keys(errors.length ===0)&& (values.name !=="" && values.password !=="")) {
    alert("Form Submitted")
  }
}, [errors])

  return (
    <div className="main">
      <div className="mainForm card w-25">
        <h3 className="label text-center">LOGIN</h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="form mx-3 my-3 ">
            <Form.Label className="label">USER NAME</Form.Label>
            <Form.Control
              className="input"
              type="text"
              name = "name"
              placeholder="ENTER YOUR USER NAME HERE"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p style={{color:red}}>{errors.name}</p>}
          </Form.Group>
          <Form.Group className="form mx-3 my-3 ">
            <Form.Label className="label">PASSWORD</Form.Label>
            <Form.Control
              className="input"
              type="password"
              name="password"
              value={values.password}
              placeholder="ENTER YOUR PASSWORD HERE"
              onChange={handleChange} 
            />
            {errors.password && <p style={{color:red}}>{errors.password}</p>}
          </Form.Group>
          <Form.Group className="mx-3 my-3 ">
            <Form.Check type="checkbox" label="Keep me logged in" />
          </Form.Group>
          <Button variant="primary" className="btn mx-3 my-3 " type="submit">
            LOGIN
          </Button>
          <br></br>
          {/* <Link to {"../SignupPage/SignupPage.js"}>Don't have an account yet? Sign up now!</Link> */}
        </Form>
      </div>
    </div>
  );
}


import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import e from "express";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control

            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}