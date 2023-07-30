import React from "react";
import Header from "../shared/Header/Header";
import { Container,Row,Col } from "react-bootstrap";

import RightNav from "../shared/RightNav/RightNav";
import LeftNav from "../shared/LeftNav/LeftNav/LeftNav";
import NewsLayout from "./NewsLayout";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3} className="border"><LeftNav/></Col>
          <Col lg={6} className="border">
            
            <Outlet/>
          </Col>
          <Col lg={ 3} className="border"><RightNav/></Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainLayout;
