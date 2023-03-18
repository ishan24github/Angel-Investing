import React from "react";

const Newsletter = () => {
  return (
    <div>
      <section className="bg-primary text-light p-5">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-between">
            <h3 className="mb-3 mb-md-0 text-nowrap mx-3">Sign up to newsletter</h3>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Email"
              />
              <button
                class="btn btn-dark btn-md"
                type="button"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
