import React, { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
  Modal,
  Button,
  Form,
} from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Corrected import
import "../Header/Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;

    if (scrollTop > 0) {
      header.classList.add("is-sticky");
      header.style.backgroundColor = "white";
    } else {
      header.classList.remove("is-sticky");
      header.style.backgroundColor = "rgb(54, 152, 185)";
    }
  };

  return (
    <>
      <header className="header-section">
        <Container>
          <Navbar expand="lg" className="p-0">
            <Navbar.Brand>
              <NavLink className="nav-link" to="/">
                <b>Welcome To GYP</b>
              </NavLink>
            </Navbar.Brand>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
              show={open}
            >
              <Offcanvas.Header>
                <h1 className="logo">GET YOUR PROJECT</h1>
                <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                  <i className="bi bi-x-lg"></i>
                </span>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className="nav-link" to="/">
                    HOME
                  </NavLink>
                  <NavLink className="nav-link" to="/about">
                    ABOUT US
                  </NavLink>
                  <NavDropdown
                    title="PROJECTS"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item as={NavLink} to="/aipage">
                      Artificial Intelligence
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/backendpage">
                      Machine Learning
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/frontendpage">
                      Frontend Development
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={NavLink}
                      to="/pythonfullstackpage"
                    >
                      Python Full Stack
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <div className="ms-md-4 ms-2">
              <span
                className="primaryBtn d-inline-block"
                onClick={handleModalShow}
              >
                Request A Project
              </span>
              <li className="d-inline-block d-lg-none ms-3 toggle_btn">
                <i
                  className={open ? "bi bi-x-lg" : "bi bi-list"}
                  onClick={toggleMenu}
                ></i>
              </li>
            </div>
          </Navbar>
        </Container>
      </header>

      <Modal
        show={showModal}
        onHide={handleModalClose}
        centered
        className="contact-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Request A Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formProjectDetails" className="mt-3">
              <Form.Label>Project Details</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Describe your project"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4 w-100">
              Submit Request
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
