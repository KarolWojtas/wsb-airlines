import React, { useMemo } from "react";
import parking from '../assets/underground-parking.jpg'
import airport from '../assets/airport.jpg';
import hotel from '../assets/hotel.jpg'

const Services = () => {
  const services = useMemo(() => {
    return [
      {
        title: 'Parking',
        img: parking
      },
      {
        title: 'Pierwszeństwo wsiadania',
        img: airport
      },
      {
        title: 'Hotel',
        img: hotel
      }
    ]
  }, []);
  return <div className="container">
    <div className="row my-4">
      {services.map(service => <div className="col-md-4">
        <div className="card">
          <svg class="card-img-top"
            viewBox="0 0 100 100"
            style={{ width: '100%', backgroundImage: `url(${service.img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPositionX: 'center' }}>
            <path d="M 0,100 L 100,80 V100 H0" fill="white"></path>
          </svg>

          <div className="card-body bg-gradient-light">
            <h5 className="card-title">{service.title}</h5>
            <p className="card-text">text</p>
          </div>
        </div>
      </div>)}
    </div>
  </div>;
};

export default Services;
