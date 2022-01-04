import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import skyImg from '../assets/sky.jpeg';
import snowImg from '../assets/snow.jpeg';
import cloudesImg from '../assets/cloudes.jpeg';

export default class CarouselBox extends Component {
  render() {
    return (
      <>
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100"
                src={skyImg} 
                alt="Sky"/>
                <Carousel.Caption>
                    <h3>Sky image</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"
                src={snowImg} 
                alt="Snow"/>
                <Carousel.Caption>
                    <h3>Snow image</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"
                src={cloudesImg} 
                alt="Cloudes"/>
                <Carousel.Caption>
                    <h3>Cloudes image</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </>
    );
  }
}