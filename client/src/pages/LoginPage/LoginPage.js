import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../../src/utils/mutations';
import Auth from '../../utils/auth';
import "./LoginPage.css";
import logo from '../../assets/logo.png'
import 'animate.css'


export default function LoginPage(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="login-color-overlay d-flex
    justify-content-center align-items-center">

      <Form className="rounded p-4 p-sm-3 mx-5 loginup-form rounded animate__animated animate__fadeInLeft animate__delay-1s" onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <img src={logo} alt='logo' />
          <h5 className="loginup-form-intro mt-4">Welcome! Login In To Your <span className="loginup-brand-name">TRAVÔTEL</span> Account</h5>
          <h5 className="loginup-form-intro">Bienvenue! Connectez-vous à votre compte <span className="loginup-brand-name">TRAVÔTEL</span></h5>
          <br />
          {error &&
            <div>
              <p style={{ color: 'red', fontWeight: '900' }}>Sorry, login failed / Désolé, échec de connexion</p>
            </div>}
          <Form.Label className="mt-2 email-txt">Email Address / Courriel</Form.Label>
          {/* <Form.Control type="email required"
            placeholder="Your Email / Votre courriel" onChange={handleChange}/> */}
          <input
            placeholder="Email / Courriel"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="password-txt">Username / Nom d'utilisateur</Form.Label>
          <Form.Control type="username" required
            placeholder="Your Username / Votre nom d'utilisateur" />
          <input
            placeholder="Username / Nom d'utilisateur"
            name="username"
            type="username"
            id="username"
            value={formState.username}
            onChange={handleChange}
          />
        </Form.Group> */}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="password-txt">Password / Mot de passe</Form.Label>

          {/* <Form.Control type="password required"
            placeholder="Your password / Votre mot de passe" onChange={handleChange} /> */}
          <input
            placeholder="Password / Mot de passe"
            name="password"
            type="password"
            id="password"
            value={formState.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label='Remember Me / Se souvenir de moi' />
        </Form.Group>
        <Button variant="primary" type="submit" className="loginup-btn">Submit / Soumettre
        </Button>
        {/* <h1>or sign up with</h1> */}
      </Form>
    </div >
  );
}
