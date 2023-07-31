import React, { useContext } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../../logo/logo/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { LiaWeightHangingSolid } from "./../../../node_modules/react-icons/lia/index.esm";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user, handleSignOut,loading } = useContext(AuthContext);
  const handleLogOut = () => {
    handleSignOut()
    
  }
  if (loading) {
    return null
  }
  return (
    <Container className="mb-4">
      <div className="d-flex  align-items-center flex-column">
        <img src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd MMMM D YYYY")}</p>
      </div>
      <div className="d-flex flex-row bg-light">
        <Button variant="danger" className=" ms-0 border-0 rounded-0 ">
          Latest{" "}
        </Button>{" "}
        <Marquee>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <Navbar data-bs-theme="light">
        <Container>
          <div></div>
          <div>
            <Link
              to="/"
              className=" text-decoration-none me-2 text-dark fw-semibold"
            >
              Home
            </Link>
            <Link
              to="/about"
              className=" text-decoration-none me-2 text-dark fw-semibold"
            >
              About
            </Link>
            <Link
              to="/career"
              className=" text-decoration-none me-2 text-dark fw-semibold"
            >
              Career
            </Link>
          </div>
          <div>
            <Link className="me-2" t0={"some"}>
              {user ? (
                <Image src={user?.photoURL} style={{width:'40px',height:'40px',borderRadius:'50%'}}></Image>
              ) : (
                <FaCircleUser className=" fs-3  bg-light" />
              )}
            </Link>
            <Link className="ms-3" to="/login/signin">
              {user ? (
                <Button
                  variant="dark"
                  className="rounded-0 border-0 px-4"
                  onClick={() => handleLogOut()}
                >
                  LogOut
                </Button>
              ) : (
                <Button variant="dark" className="rounded-0 border-0 px-4">
                  Login
                </Button>
              )}
            </Link>
          </div>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
