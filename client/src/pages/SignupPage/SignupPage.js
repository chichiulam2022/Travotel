import React, { useState } from 'react';
import "./SignupPage.css";
import { Form, Button } from 'react-bootstrap'
import logo from '../../assets/logo.png'
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../../src/utils/mutations';

export default function SigninPage(props) {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: "Sansa2",
        password: "queen1234",
        email: "sansa2@winterfell.com",
        _id: "123"
        // username: formState.username,
        // email: formState.email,
        // password: formState.password,
        // firstName: formState.firstName,
        // lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };


  return (

    <div className="signup-color-overlay d-flex
    justify-content-center align-items-center">
      <Form className="rounded p-4 p-sm-3 mx-5 signup-form rounded" onSubmit={handleFormSubmit}>
        <Form.Group className="mb-5" controlId="formBasicEmail">
          <img src={logo} alt='logo' />
          <h5 className="signup-form-intro mt-4">Sign Up To Your <span className="signup-brand-name">TRAVÔTEL</span> Account</h5>
          <h5 className="signup-form-intro">Inscrivez-vous à votre compte <span className="signup-brand-name">TRAVÔTEL</span></h5>
          <br />
          <Form.Label className="mt-2 email-txt">Email Address / Courriel</Form.Label>
          <Form.Control type="email"
            placeholder="Your Email / Votre courriel" onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="password-txt">Password / Mot de passe</Form.Label>
          <Form.Control type="password"
            placeholder="Your password / Votre mot de passe" onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label='Remember Me / Se souvenir de moi' />
        </Form.Group>
        <Button variant="primary" type="submit" className="signup-btn">Submit / Soumettre
        </Button>
        {/* <h1>or sign up with</h1> */}
      </Form>
    </div >

  );
}
