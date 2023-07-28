import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import ListGroup from './ListGroup/GroupList';
import Q_Zone from './Q_Zone/Q_Zone';


const RightNav = () => {
    return (
      <div>
        <h3>Login With</h3>
        <div >
          <Button variant="outline-primary " className=" w-100 mb-1">
            <FaGoogle className="me-2" />
            Login With Google
          </Button>
          <Button variant="outline-primary" className=" w-100 mb-1">
            <FaSquareFacebook className="me-2 " />
            Login With Facebook
          </Button>
          <Button variant="outline-primary" className=" w-100 mb-1">
            <FaGithub className="me-2" />
            Login With Github
          </Button>
            </div>
            <div>
                <h4>Find Us On</h4>
                <ListGroup/>
        </div>
        <Q_Zone/>
      </div>
    );
};

export default RightNav;