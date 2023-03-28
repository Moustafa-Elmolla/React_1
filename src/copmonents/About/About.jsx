import React from "react";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <h2 className=" text-center text-white mb-5">About</h2>
          <div className="star_custom d-flex justify-content-center align-items-center w-100 mb-5">
            <div className="line_left"></div>
            <i className="fa-solid fa-star fa-2xl text-white"></i>
            <div className="line_right"></div>
          </div>
          <div className="container w-75 m-auto text-white">
            <div className="row">
              <div className="col-md-6">
                <p className="info">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6">
                <p className="info">
                  You can create your own custom avatar for the masthead, change
                  the icon in the dividers, and add your email address to the
                  contact form to make it fully functional!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
