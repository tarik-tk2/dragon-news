
import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const GroupList = () => {
    return (
      <ListGroup>
        <ListGroup.Item>
          <FaSquareFacebook className="me-2" />
          Facebook
        </ListGroup.Item>
        <ListGroup.Item>
          <FaSquareTwitter className="me-2" />
          Twitter
        </ListGroup.Item>
        <ListGroup.Item>Youtube</ListGroup.Item>
        <ListGroup.Item><FaYoutube/> Instagram</ListGroup.Item>
        <ListGroup.Item>Printstar</ListGroup.Item>
      </ListGroup>
    );
};

export default GroupList;