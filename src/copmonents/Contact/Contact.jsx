import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="container">
          <h2 className=" text-center">CONTACT ME</h2>
          <div className="star_custom d-flex justify-content-center align-items-center w-100 mt-5 mb-5">
            <div className="line_left_p"></div>
            <i className="fa-solid fa-star fa-2xl text-dark"></i>
            <div className="line_right_p"></div>
          </div>
          <div className="input_group w-75 m-auto">
          <input type="text" className=" form-control border-0 border-bottom mb-4" placeholder="Name" />
          <input type="text" className=" form-control border-0 border-bottom mb-4" placeholder="Email Address" />
          <input type="text" className=" form-control border-0 border-bottom mb-4" placeholder="Phone Number" />
          <input type="text" className=" form-control border-0 mb-4" placeholder="Message" />
          
          <div className="btn_send border-top">
          <button className="btn btn_xl mt-4">Send</button>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
