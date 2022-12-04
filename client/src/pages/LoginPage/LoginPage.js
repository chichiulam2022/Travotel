import React from "react";
import "./LoginPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Background from "../../assets/login.png";

export default function LoginPage() {
  return (
    <div className="main">
      <div className="mainForm card w-25">
        <h3 className="label text-center">LOGIN</h3>

        <Form>
          <Form.Group className="form mx-3 my-3 ">
            <Form.Label className="label">USER NAME</Form.Label>
            <Form.Control
              className="input"
              type="text"
              placeholder="ENTER YOUR USER NAME HERE"
            />
          </Form.Group>
          <Form.Group className="form mx-3 my-3 ">
            <Form.Label className="label">PASSWORD</Form.Label>
            <Form.Control
              className="input"
              type="password"
              placeholder="ENTER YOUR PASSWORD HERE"
            />
          </Form.Group>
          <Form.Group className="mx-3 my-3 ">
            <Form.Check type="checkbox" label="Keep me logged in" />
          </Form.Group>
          <Button variant="primary" className="btn mx-3 my-3 ">
            LOGIN
          </Button>
          <br></br>
          {/* <Link to {"../SignupPage/SignupPage.js"}>Don't have an account yet? Sign up now!</Link> */}
        </Form>
      </div>
    </div>
  );
}
