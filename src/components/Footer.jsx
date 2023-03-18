import React from "react";

const Footer = () => {
  return (
    <div>
      <section>
      <div class="container">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
      </a>
      <h1 className="text-muted"> AngelNet </h1>
      <p class="text-muted">&copy; 2022</p>
    </div>

    <div class="col mb-3">

    </div>

    <div class="col mb-3">
      <h5 className="text-muted">Investers</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Get Started</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Risk</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5 className="text-muted">Startups</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Raise</a></li>
        {/* <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Help</a></li> */}
      </ul>
    </div>

    <div class="col mb-3">
      <h5 className="text-muted">Company</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Contact</a></li>
      </ul>
    </div>
  </footer>
</div>

      </section>
    </div>
  );
};

export default Footer;
