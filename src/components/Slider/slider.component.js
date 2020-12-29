import React, { Component } from 'react';
import Logo from '../../assets/cognizant.png';
import Carousel from 'react-bootstrap/Carousel';
class Slider extends Component {
    render() {
        return (
            <div>
            <Carousel>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={Logo}
                  alt="lide"
                  height='300px'
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={Logo}
                alt="lide"
                height='300px'
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={Logo}
                alt="lide"
                height='300px'
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
        );
    }
}

export default Slider;