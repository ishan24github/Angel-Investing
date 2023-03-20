import React from "react";

const Form = () => {
  return (
    <div>
      <section className="p-5">
        <div>
            <div>
                <h5 className="text-muted">Application Form</h5>
            </div>
          <form>
            <div className="form-group my-3">
              <label for="exampleInputEmail1" className="my-2 mx-1">
                Your Name
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group my-3">
              <label for="exampleInputPassword1" className="mt-2 my-2 mx-1">
                Company Email address
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-group my-3">
              <label for="exampleInputPassword1" className="mt-2 my-2 mx-1">
                Registered Company Name
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-group my-3">
              <label for="exampleInputPassword1" className="mt-2 my-2 mx-1">
                Linkedin's URL
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-group my-3">
              <label for="exampleInputPassword1" className="mt-2 my-2 mx-1">
                Website
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-group my-3">
              <label for="exampleFormControlTextarea1" className="mt-2 my-2 mx-1">
                Describe your product
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="form-group my-3">
              <label for="exampleFormControlTextarea1" className="mt-2 my-2 mx-1">
                Describe your revenue
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="form-group my-3">
              <label for="exampleFormControlTextarea1" className="mt-2 my-2 mx-1">Upload your Pitch</label>
              <div className="file-upload-wrapper">
                <input type="file" id="input-file-now" className="file-upload" />
              </div>
            </div>

            <div className="form-check my-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Form;
