import React, { useMemo } from "react";
import styles from './Services.module.css';
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
            className={styles.serviceImg}
            style={{ backgroundImage: `url(${service.img})` }}>
            <defs>
              <linearGradient id="grad1" x1="1" x2="0.9" y1="1" y2="0">
                <stop offset="0%" stopColor="#ffe48d"></stop>
                <stop offset="80%" stopColor="white"></stop>
              </linearGradient>
            </defs>
            <path d="M 0,100 L 100,80 V100 H0" fill="url(#grad1)"></path>
            <text x="50" y="90" dx="-50%" fill="white" style={{ font: '1rem' }}>{service.title}</text>
          </svg>

          <div className={`card-body text-left ${styles.cardBody}`}>

            <p className="card-text">text</p>
          </div>
        </div>
      </div>)}
    </div>
  </div>;
};

export default Services;
