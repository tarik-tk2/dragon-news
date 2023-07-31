import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const { handleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const from= location.state?.from?.pathname||'/'

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        handleSignIn(email, password)
            .then((user) => {
                if (user) {
                    navigate(from)
                } else { 
                    navigate('/login/signin')
                }
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
       
     }
    return (
      <div className=" w-25 mx-auto border rounded-1 p-3">
        <h5 className="text-center fw-bold text-danger">SignIn Here</h5>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p className="center">
            <small>
              New User Here?
              <Link to="/login/signup">Registration Please!</Link>
            </small>
          </p>
        </Form>
      </div>
    );
};

export default Login;