import React, { Component } from "react";
import { Container, Card, Button, CardGroup } from "react-bootstrap";
import CarouselBox from "../Components/CarouselBox";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Our team</h2>

          <CardGroup>
          <Card className="m-4">
            <Card.Img variant="top"
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <Card.Body>
            <Card.Title>Developers</Card.Title>
            <Card.Text>M-Files offers a fundamentally new and unique approach that eliminates information silos by providing quick and easy access to the right data and content from any business system and device.</Card.Text>
            <Button variant="primary">About us</Button>
          </Card.Body>
          </Card>

          <Card className="m-4" bg="light">            
          <Card.Body>
            <Card.Title>Developers</Card.Title>
            <Card.Text>M-Files offers a fundamentally new and unique approach that eliminates information silos by providing quick and easy access to the right data and content from any business system and device.</Card.Text>
            <Button variant="primary">About us</Button>
          </Card.Body>
          <Card.Img variant="bottom"
              src="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=500" />
          </Card>

          <Card className="m-4">
            <Card.Img variant="top"
              src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=500" />
          <Card.Body>
            <Card.Title>Developers</Card.Title>
            <Card.Text>M-Files offers a fundamentally new and unique approach that eliminates information silos by providing quick and easy access to the right data and content from any business system and device.</Card.Text>
            <Button variant="primary">About us</Button>
          </Card.Body>
          </Card>
                 
          </CardGroup>
        </Container>
      </>
    );
  }
}
