import React from "react";
import ReactLogo from "../../assets/react.svg";

const Cards = () => {
  return (
    <div>
      {/* create a loop in jsx , starups from database */}

      <section className="p-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md mb-3">
              <div className="card" style={{width: "18rem;"}}>
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <img src={ReactLogo} alt="" />
                  </div>
                  <h4 className="card-title">Startup Name</h4>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem, voluptas.
                  </p>
                  <a href="#" className="btn btn-primary">Read more</a>
                </div>
              </div>
            </div>
            <div className="col-md mb-3">
              <div className="card">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <img src={ReactLogo} alt="" />
                  </div>
                  <h4 className="card-title">Startup Name</h4>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem, voluptas.
                  </p>
                  <a href="#" className="btn btn-primary">Read more</a>
                </div>
              </div>
            </div>
            <div className="col-md mb-3">
              <div className="card">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <img src={ReactLogo} alt="" />
                  </div>
                  <h4 className="card-title">Startup Name</h4>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem, voluptas.
                  </p>
                  <a href="#" className="btn btn-primary">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;
