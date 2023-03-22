import React from "react";
import reactLogo from "../../assets/react.svg";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-3">
        <div className="container-fluid">
          {/* <a class="navbar-brand" href="#">
            AngelNet
          </a> */}
          <div>
            <a href="https://reactjs.org" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>

          {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> */}
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item active">
                <a class="nav-link text-light" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="/Angel-Investing/startup">
                  Startup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  Log in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
