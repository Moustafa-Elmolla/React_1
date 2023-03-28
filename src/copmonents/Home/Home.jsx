// import React, { useState } from 'react';
import avataaars from '../../images/avataaars.svg'

// import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'

const Home = () => {
  return (
    <>
      <header>
      <div className="container h-100 d-flex align-items-center flex-column justify-content-center">
          <img src= {avataaars}   alt="" />
          <h1 className=' mb-5'>START REACT</h1>
          <div className="star_custom d-flex justify-content-center align-items-center w-100">
            <div className="line_left"></div>
            <i className="fa-solid fa-star fa-2xl text-white"></i>
            <div className="line_right"></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
      </header>
    </>
  );
}

export default Home;
