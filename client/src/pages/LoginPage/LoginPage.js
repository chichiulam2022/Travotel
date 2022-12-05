import React from "react";
import "./LoginPage.css";
import { Form, Button } from "react-bootstrap";
import logo from "../../assets/logo.png";

export default function LoginPage() {
  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  const [errors, setError] = useState({});

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.name });
  }

  function handleSubmit() {
    e.preventDefault();
    setError(Validation(values));
  }

  useEffect(() => {
    if (
      Object.keys(errors.length === 0) &&
      values.name !== "" &&
      values.password !== ""
    ) {
      alert("Form Submitted");
    }
  }, [errors]);

  return (
    <div
      className="login-color-overlay d-flex
    justify-content-center align-items-center"
    >
      <Form
        className="rounded p-4 p-sm-3 mx-5 loginup-form rounded"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-5" controlId="formBasicEmail">
          <img src={logo} alt="logo" />
          <h5 className="loginup-form-intro mt-4">
            Welcome! Login In To Your{" "}
            <span className="loginup-brand-name">TRAVÔTEL</span> Account
          </h5>
          <h5 className="loginup-form-intro">
            Bienvenue! Connectez-vous à votre compte{" "}
            <span className="loginup-brand-name">TRAVÔTEL</span>
          </h5>
          <br />
          <Form.Label className="mt-2 email-txt">
            Email Address / Courriel
          </Form.Label>
          <Form.Control
            type="email"
            name="name"
            placeholder="Your Email / Votre courriel"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: red }}>{errors.name}</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label
            className="password-txt"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          >
            {errors.password && <p style={{ color: red }}>{errors.password}</p>}
            Password / Mot de passe
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password / Votre mot de passe"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Remember Me / Se souvenir de moi"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="loginup-btn">
          Submit / Soumettre
        </Button>
        {/* <h1>or sign up with</h1> */}
      </Form>
    </div>
  );
}
