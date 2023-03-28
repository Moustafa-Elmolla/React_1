import React from "react";
import cabin from "../../images/cabin.png";
import cake from "../../images/cake.png";
import circus from "../../images/circus.png";
import game from "../../images/game.png";
import safe from "../../images/safe.png";
import submarine from "../../images/submarine.png";
// import $ from 'jquery';

const Portfolio = () => {
  
  return (
    <>
      <section id="portfolio">
        <div className="container">
          <h2 className=" text-center">PORTFOLIO</h2>
          <div className="star_custom d-flex justify-content-center align-items-center w-100 mt-5 mb-5">
            <div className="line_left_p"></div>
            <i className="fa-solid fa-star fa-2xl text-dark"></i>
            <div className="line_right_p"></div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card position-relative overflow-hidden" id="card1">
                <div className="card_layout d-flex justify-content-center align-items-center h-100 w-100 position-absolute">
                  <div className="card_layout_cont">
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
                <img src={cabin} className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col">
              <div className="card overflow-hidden">
                <div className="card_layout d-flex justify-content-center align-items-center h-100 w-100 position-absolute">
                  <div className="card_layout_cont">
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
                <img src={cake} className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col">
              <div className="card overflow-hidden">
                <div className="card_layout d-flex justify-content-center align-items-center h-100 w-100 position-absolute">
                  <div className="card_layout_cont">
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
                <img src={circus} className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col">
              <div className="card overflow-hidden">
                <div className="card_layout d-flex justify-content-center align-items-center h-100 w-100 position-absolute">
                  <div className="card_layout_cont">
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
                <img src={game} className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col">
              <div className="card overflow-hidden">
                <div className="card_layout d-flex justify-content-center align-items-center h-100 w-100 position-absolute">
                  <div className="card_layout_cont">
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
                <img src={safe} className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col">
              <div className="card overflow-hidden">
                <div className="card_layout d-flex justify-content-center align-items-center h-100 w-100 position-absolute">
                  <div className="card_layout_cont">
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
                <img src={submarine} className="card-img-top" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="portfoilo_item text-center position-fixed" id="portfolio_item1">
        <div className="item">
          <div className="item_cont py-4 position-relative">
            <div className="icon_x  position-absolute">
              <i class="fa-solid fa-x fa-2xl"></i>
            </div>
            <div className="item_body text-center mt-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2>LOG CABIN</h2>
                    <div className="star_custom d-flex justify-content-center align-items-center w-100 mt-5 mb-5">
                      <div className="line_left_p"></div>
                      <i className="fa-solid fa-star fa-2xl text-dark"></i>
                      <div className="line_right_p"></div>
                    </div>
                    <img src={cabin} className="w-100 mb-5" alt="" />
                    <p className=" mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <button className="btn btn-success">
                    <i class="fa-solid fa-x fa-lg"></i>
                    <span>Close Window</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Portfolio;
