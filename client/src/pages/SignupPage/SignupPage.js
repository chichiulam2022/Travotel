import React, { useState } from 'react';
import "./SignupPage.css";
import { Form, Button } from 'react-bootstrap'
import logo from '../../assets/logo.png'
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../../src/utils/mutations';
import 'animate.css'

export default function SigninPage(props) {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    // const mutationResponse = await addUser({
    //   variables: {
    //     username: "Sansa2",
    //     password: "queen1234",
    //     email: "sansa2@winterfell.com",
    //     _id: "123"

    //     username: formState.username,
    //     email: formState.email,
    //     password: formState.password,
    //     firstName: formState.firstName,
    //     lastName: formState.lastName,
    //   },
    // });
    // const token = mutationResponse.data.addUser.token;
    // Auth.login(token);




    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

  };


  return (
    <div className="signup-color-overlay d-flex
    justify-content-center align-items-center">
      <Form className="rounded p-4 p-sm-3 mx-5 signup-form rounded animate__animated animate__fadeIn animate__delay-1s" onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">

          <img src={logo} alt='logo' />

          <h5 className="signup-form-intro mt-4">Sign Up To Your <span className="signup-brand-name">TRAVÔTEL</span> Account</h5>
          <h5 className="signup-form-intro">Inscrivez-vous à votre compte <span className="signup-brand-name">TRAVÔTEL</span></h5>
          <br />
          {error &&
            <div>
              <p style={{ color: 'red', fontWeight: '900' }}>Sorry, sign up failed / Désolé, échec d'enregistrement</p>
            </div>}
          <Form.Label className="mt-2 email-txt">Email Address / Courriel</Form.Label>
          {/* <Form.Control type="email" required id='email' value={formState.email}
            placeholder="Your Email / Votre courriel" onChange={handleChange} /> */}

          <input
            placeholder='Email / Courriel'
            name='email'
            type='email'
            id='email'
            value={formState.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="password-txt">Username / Nom d'utilisateur</Form.Label>
          {/* <Form.Control type="username" required id='username' value={formState.username}
            placeholder="Your Username / Votre nom d'utilisateur" /> */}
          <input
            placeholder="Username / Nom d'utilisateur"
            name='username'
            type='username'
            id='username'
            value={formState.username}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="password-txt">Password / Mot de passe</Form.Label>
          {/* <Form.Control type="password" required id='password' value={formState.password}
            placeholder="Your password / Votre mot de passe" onChange={handleChange} /> */}
          <input
            placeholder="Password / Mot de passe"
            name='password'
            type='password'
            id='password'
            value={formState.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label='Remember Me / Se souvenir de moi' />
        </Form.Group>
        <Button variant="primary" type="submit" className="signup-btn">Submit / Soumettre
        </Button>
      </Form>
    </div >

  );
}
