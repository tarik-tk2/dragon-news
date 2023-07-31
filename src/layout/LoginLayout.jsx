import React from "react";
import Header from "../shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Outlet/>
      </Container>
    </div>
  );
};

export default LoginLayout;
