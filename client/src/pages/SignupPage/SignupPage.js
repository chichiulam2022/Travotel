import React from "react";
import "./SignupPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Background from "../../assets/login.png";

export default function SigninPage() {
  return (
    <div className="main">
      <div className="mainForm card w-25">
        <h3 className="label text-center">SIGN UP</h3>

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
            <Form.Label className="label">E-MAIL</Form.Label>
            <Form.Control
              className="input"
              type="text"
              placeholder="ENTER YOUR E-MAIL HERE"
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

          <Form.Group className="form mx-3 my-3 ">
            <Form.Label className="label">RE-ENTER PASSWORD</Form.Label>
            <Form.Control
              className="input"
              type="password"
              placeholder="RE-ENTER YOUR PASSWORD HERE"
            />
          </Form.Group>

          <Button variant="primary" className="btn mx-3 my-3 ">
            SIGN UP
          </Button>
          <br></br>
        </Form>
      </div>
    </div>
  );
}
