import React, { Component } from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import Logo from "../Images/logo.jpg";
import "../App.css";
import HomePage from '../Pages/HomePage';
import AboutUsPage from '../Pages/AboutUsPage';
import ContactsPage from '../Pages/ContactsPage';
import BlogPage from '../Pages/BlogPage';


export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar          
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src={Logo}
                height="50"
                width="50"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About us</Nav.Link>
                <Nav.Link href="/contacts">Contacts</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
              </Nav>
              <Form inline="true">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </>
    );
  }
}
