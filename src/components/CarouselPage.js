import React from "react";
import  Carousel  from "react-bootstrap/Carousel";
const CarouselPage=()=> {
  return (
    <div>
    <Carousel
    pause={false}
    interval={2300}
    controls={false} 
    indicators={false}
    >
    <Carousel.Item 
    >
      <img
        className="d-block w-100"
        
        src="https://image.shutterstock.com/image-photo/businessman-touching-icon-online-banking-260nw-1388903636.jpg"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item 
     >
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1559067341-04a52c7d06d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGxvYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item 
    >
      <img
        className="d-block w-100"
        src="https://www.fenceabroad.com/wp-content/uploads/2021/06/How-to-apply-education-loan.png"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default CarouselPage;