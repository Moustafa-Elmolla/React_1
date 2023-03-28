import React from "react";

const Footer = () => {
  return (
    <>
    <footer className="text-white text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 className=" mb-4">LOCATION</h3>
            <p>
              2215 John Daniel Drive <br />
              Clark, MO 65243
            </p>
          </div>
          <div className="col-md-4">
            <h3 className=" mb-4">AROUND THE WEB</h3>
            <div className="icons d-flex justify-content-center align-items-center">
              <div className="icon_cont d-flex justify-content-center align-items-center mx-2">
              <i className="fa-brands fa-facebook-f fa-lg"></i>
              </div>
              <div className="icon_cont d-flex justify-content-center align-items-center mx-2">
              <i className="fa-brands fa-twitter fa-lg"></i>
              </div>
              <div className="icon_cont d-flex justify-content-center align-items-center mx-2">
              <i className="fa-brands fa-linkedin-in fa-lg"></i>
              </div>
              <div className="icon_cont d-flex justify-content-center align-items-center mx-2">
              <i className="fa-brands fa-dribbble fa-lg"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h3 className=" mb-4">ABOUT FREELANCER</h3>
            <p>
            Freelance is a free to use, MIT licensed Bootstrap theme created by Route
            </p>
          </div>
        </div>
      </div>
    </footer>
      <div className="copyright p-4 bg-dark text-white text-center">
        <div className="container">
        <p className=" mb-0">Copyright © Your Website 2021</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
