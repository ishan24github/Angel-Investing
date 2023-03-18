import React from "react";
import StartupImage from "../../assets/Startup-Invest.png";

const Showcase = () => {
  return (
    <div>
      <section className="bg-dark text-light p-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div className="m-4">
              <h1>AngelNet</h1>
              <h5>Invest in startups</h5>
              {/* <h5 className="text-wrap">Grow your wealth with higher returns</h5> */}
              {/* <div className="row"> */}
              <div className="d-flex justify-content-center">
                <button className="btn btn-primary btn-md my-2">
                  Start Investing
                </button>
                {/* </div>
              <div className="col"> */}
                <button className="btn btn-primary btn-md m-2">
                  Raise Funds
                </button>
              </div>
              {/* </div> */}
            </div>
            <img
              className="image-fluid w-50 d-none d-sm-block"
              src={StartupImage}
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Showcase;
