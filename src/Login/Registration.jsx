import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Registration = () => {
  const { handleSignUp,handleSignOut } = useContext(AuthContext);
  const [checked, setChecked] = useState(false);
const navigate=useNavigate()
  const handleChecked = (event) => {
    setChecked(!checked);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    handleSignUp(email, password)
      .then((user) => {
        navigate("/login/signin");
        handleSignOut();
      
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
 
  };
  return (
    <div className="w-25 mx-auto p-3 border rounded-1">
      <h5 className="text-center fw-bold text-danger">SinUp Here</h5>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Accept terms & condition"
            className="text-info"
            onChange={handleChecked}
          />
        </Form.Group>
        {checked ? (
          <Button variant="primary" type="submit" >
            Submit
          </Button>
        ) : (
          <Button variant="primary" type="submit" disabled>
            Submit
          </Button>
        )}
        <p>
          <small>
            Already Register?<Link to="/login/signin">Login Here!</Link>
          </small>
        </p>
      </Form>
    </div>
  );
};

export default Registration;
