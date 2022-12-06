import React from "react";
import "./SignupPage.css";
import { Form, Button } from 'react-bootstrap'
import logo from '../../assets/logo.png'

export default function SigninPage() {
  return (
    <div className="signup-color-overlay d-flex
    justify-content-center align-items-center">
      <Form className="rounded p-4 p-sm-3 mx-5 signup-form rounded">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <img src={logo} alt='logo' />
          <h5 className="signup-form-intro mt-4">Sign Up To Your <span className="signup-brand-name">TRAVÔTEL</span> Account</h5>
          <h5 className="signup-form-intro">Inscrivez-vous à votre compte <span className="signup-brand-name">TRAVÔTEL</span></h5>
          <br />
          <Form.Label className="mt-2 email-txt">Email Address / Courriel</Form.Label>
          <Form.Control type="email" required
            placeholder="Your Email / Votre courriel" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="password-txt">Username / Nom d'utilisateur</Form.Label>
          <Form.Control type="username" required
            placeholder="Your Username / Votre nom d'utilisateur" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="password-txt">Password / Mot de passe</Form.Label>
          <Form.Control type="password" required
            placeholder="Your Password / Votre mot de passe" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="password-txt">Confirm Password / Confirmez le mot de passe</Form.Label>
          <Form.Control type="password" required
            placeholder="Your Password / Votre mot de passe" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label='Remember Me / Se souvenir de moi' />
        </Form.Group>
        <Button variant="primary" type="submit" className="signup-btn">Submit / Soumettre
        </Button>
      </Form>
    </div >

  );
}
