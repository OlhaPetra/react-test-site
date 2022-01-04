import React, { Component } from "react";
import { Container, Col, Row, Nav, Tab } from "react-bootstrap";

export default class AboutUsPage extends Component {
  render() {
    return (
      <>
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column mt-2">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Design</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Team</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Programming</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content className="mt-3">
                  <Tab.Pane eventKey="first">
                    <img
                      src="https://caphe.sfo2.cdn.digitaloceanspaces.com/assets/images/Smart-Home-Landing-Page-For-Figma-thumb.jpg"
                      alt="first"
                    />
                    <p>first</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                  <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJnZj3y_a3XgUTHc1SkTYdXYZfJYWUsXwmtHGdH2Fhk72xLTwmctoHzRpmX2Szn9UFwM&usqp=CAU"
                      alt="second"
                    />
                    <p>second</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>third</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <p>fourth</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <p>fifth</p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </>
    );
  }
}
