import React from "react";
import Header from "../shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={9} className="border">
            <Outlet />
          </Col>
          <Col lg={3} className="border">
            <RightNav />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsLayout;
