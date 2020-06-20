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
        img: parking,
        text: 'Wykup miejsce na parkingu.'
      },
      {
        title: 'Pierwszeństwo',
        img: airport,
        text: 'Wykup pierwszeństwo wsiadania, aby nie czekać w kolejce.'
      },
      {
        title: 'Hotel',
        img: hotel,
        text: 'Zarezerwuj pokój w hotelu przy lotnisku.'
      }
    ]
  }, []);
  return <div className="container">
    <div className="row my-2">
      {services.map(service => <div className="col-lg-4">
        <div className="card my-2">
          <svg class="card-img-top"
            viewBox="0 0 100 100"
            style={{
              backgroundImage: `url(${service.img})`, backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover', backgroundPosition: 'center'
            }}>
            <defs>
              <linearGradient id="grad1" x1="1" y1="1" x2="0.2" y2="0.2">
                <stop offset="0%" stopColor="#ffe48d"></stop>
                <stop offset="80%" stopColor="white"></stop>
              </linearGradient>
            </defs>
            <path d="M 0,100 L 100,80 V100 H0" fill="url(#grad1)"></path>
            <text x="50%" y="90" textAnchor='middle' stroke="black" strokeWidth="0.02rem" strokeLinecap="butt" fill="white" style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{service.title}</text>
          </svg>

          <div className={`card-body text-left ${styles.cardBody}`}>
            <p className="card-text">{service.text}</p>
            <button href="#" class="btn btn-outline-secondary" disabled>Wykup</button>
          </div>
        </div>
      </div>)}
    </div>
  </div>;
};

export default Services;
