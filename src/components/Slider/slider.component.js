import React, { Component } from 'react';
import Logo from '../../assets/cognizant.png';
import Carousel from 'react-bootstrap/Carousel';
class Slider extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item interval={2000}>
            <div class="row my-4 mx-2">
              <div class="col-md-4">
                <div class="card mb-2">
                  <img class="d-block w-100" src={Logo}
                    alt="Slider"
                    height='250px' width='300px' />
                  <Carousel.Caption>
                    <h3>first slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </div>
              </div>

              <div class="col-md-4 d-none d-md-block">
                <div class="card mb-2">
                  <img class="d-block w-100" src={Logo}
                    alt="Slider"
                    height='250px' width='300px' />
                  <Carousel.Caption>
                    <h3>first slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </div>
              </div>

              <div class="col-md-4 d-none d-md-block">
                <div class="card mb-2">
                  <img class="d-block w-100" src={Logo}
                    alt="Slider"
                    height='250px' width='300px' />
                  <Carousel.Caption>
                    <h3>first slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </div>
              </div>
            </div>
          </Carousel.Item>
          
          <Carousel.Item interval={2000}>
            <div class="row my-4 mx-2">
              <div class="col-md-4">
                <div class="card mb-2">
                  <img class="d-block w-100" src={Logo}
                    alt="Slider"
                    height='250px' width='300px' />
                  <Carousel.Caption>
                    <h3>second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </div>
              </div>

              <div class="col-md-4 d-none d-md-block">
                <div class="card mb-2">
                  <img class="d-block w-100" src={Logo}
                    alt="Slider"
                    height='250px' width='300px' />
                  <Carousel.Caption>
                    <h3>second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </div>
              </div>

              <div class="col-md-4 d-none d-md-block">
                <div class="card mb-2">
                  <img class="d-block w-100" src={Logo}
                    alt="Slider"
                    height='250px' width='300px' />
                  <Carousel.Caption>
                    <h3>second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <div class="row my-4 mx-2">
              <div class="col-md-4">
                <div class="card mb-2">
                  <img class="d-block w-100" src={Logo}
                    alt="Slider"
                    height='250px' width='300px' />
                  <Carousel.Caption>
                    <h3>third slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </div>
              </div>

              <div class="col-md-4 d-none d-md-block">
                <div class="card mb-2">
                  <img class="d-block w-100" src={Logo}
                    alt="Slider"
                    height='250px' width='300px' />
                  <Carousel.Caption>
                    <h3>third slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </div>
              </div>

              <div class="col-md-4 d-none d-md-block">
                <div class="card mb-2">
                  <img class="d-block w-100" src={Logo}
                    alt="Slider"
                    height='250px' width='300px' />
                  <Carousel.Caption>
                    <h3>third slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Slider;