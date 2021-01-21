import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
class Slider extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item interval={2000}>
            <div className="row my-4 mx-2">
              <div className="col-md-4">
                <div className="card mb-2">
                  <img className="d-block w-100" src="https://i.ibb.co/2yqCXbr/besan.jpg"
                    alt="Slider"
                    height='250px' width='300px' />
                  <Carousel.Caption>
                     {/*
                      <h3>second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  */}
                  </Carousel.Caption>
                </div>
              </div>

              <div className="col-md-4 d-none d-md-block">
                <div className="card mb-2">
                  <img className="d-block w-100" src="https://i.ibb.co/RhCpRKW/haldi.jpg"
                    alt="Slider"
                    height='250px' width='300px' />
                  <Carousel.Caption>
                     {/*
                      <h3>second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  */}
                  </Carousel.Caption>
                </div>
              </div>

              <div className="col-md-4 d-none d-md-block">
                <div className="card mb-2">
                  <img className="d-block w-100" src="https://i.ibb.co/CMmvTMc/lal.jpg"
                    alt="Slider"
                    height='250px' width='300px' />
                  <Carousel.Caption>
                    {/*
                      <h3>second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  */}
                  </Carousel.Caption>
                </div>
              </div>
            </div>
          </Carousel.Item>
          
          <Carousel.Item interval={4000}>
            <div className="row my-4 mx-2">
              <div className="col-md-4">
                <div className="card mb-2">
                  <img className="d-block w-100" src="https://i.ibb.co/CMmvTMc/lal.jpg"
                    alt="Slider"
                    height='250px' width='300px' />
                  <Carousel.Caption>
                    {/*
                      <h3>second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  */}
                  </Carousel.Caption>
                </div>
              </div>

              <div className="col-md-4 d-none d-md-block">
                <div className="card mb-2">
                  <img className="d-block w-100" src="https://i.ibb.co/BL18HkZ/dhaniya.jpg"
                    alt="Slider"
                    height='250px' width='300px' />
                  <Carousel.Caption>
                    
                  </Carousel.Caption>
                </div>
              </div>

              <div className="col-md-4 d-none d-md-block">
                <div className="card mb-2">
                  <img className="d-block w-100" src="https://i.ibb.co/RhCpRKW/haldi.jpg"
                    alt="Slider"
                    height='250px' width='300px' />
                  <Carousel.Caption>
                    
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