import React from "react";
import { Container } from "react-bootstrap";
import logo from "../Assets/Images/BookLogia.png";

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <Container>
        <div className="footer w-100 bg-dark  mt-3 mb-3">
          <div className="w-100 pb-0">
            <div className="row g-0">
              <div className="col-md-3 col-lg-3 col-xl-3 mt-3 ">
                <h6 className="text-uppercase mb-4 font-weight-bold text-white text-decoration-none">
                  <h5 className="text-white text-start">Company name</h5>
                </h6>
                <img className=" mb-4  text-center" src={logo} alt=" " />
              </div>

              <hr className="w-100 bg-secondary  d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold text-white">
                  <h5 className="text-white text-start">Popular</h5>
                </h6>
                <p>
                  <div className="text-white text-decoration-none sub-footer">
                    <p className="sub-footer text-start">
                      Becoming by Michelle Obama
                    </p>
                  </div>
                </p>
                <p>
                  <div className="text-white text-decoration-none">
                    <p className="sub-footer text-start">Dear Tomorrow</p>
                  </div>
                </p>
                <p>
                  <div className="text-white text-decoration-none">
                    <p className="sub-footer text-start">Merdeka Sejak Hati</p>
                  </div>
                </p>
                <p>
                  <div className="text-white text-decoration-none">
                    <p className="sub-footer text-start">A Wrinkle in Time</p>
                  </div>
                </p>
              </div>

              <hr className="w-100 bg-secondary   d-md-none" />

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold text-white">
                  <h5 className="text-white text-start">About</h5>
                </h6>
                <p>
                  <div className="text-white text-decoration-none">
                    <p className="sub-footer text-start">
                      Anda dapat menemukan rekomendasi buku disini.
                    </p>
                  </div>
                </p>
              </div>

              <hr className="w-100 bg-secondary   d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3  mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold text-white">
                  <h5 className="text-white text-start">Contact</h5>
                </h6>
                <p className="text-white">
                  <div className="sub-footer text-start">
                    <i className="fas fa-home mr-3 text-white"></i>{" "}
                    <span className=" m-lg-1"> Indonesia </span>
                  </div>
                </p>
                <p className="text-white">
                  <p className="sub-footer text-start">
                    <i className="fas fa-envelope mr-3 text-white"></i>{" "}
                    <span className=" m-lg-1"> booklogia@gmail.com </span>
                  </p>
                </p>
                <p className="text-white">
                  <p className="sub-footer text-start">
                    <i className="fas fa-phone mr-3 text-white"></i>{" "}
                    <span className=" m-lg-1"> +6282131715623 </span>
                  </p>
                </p>
                <div class=" mb-4 mb-md-0 ">
                  <form action="#" class="subscribe">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your e-mail"
                    />
                    <input
                      type="submit"
                      class="btn btn-submits text-white"
                      value="Send"
                    />
                  </form>
                </div>
              </div>
            </div>

            <hr className="my-3 bg-secondary " />

            <section className=" pt-0">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  <div className=" text-white">
                    © 2022 Copyright:
                    <a
                      className="text-white text-decoration-none"
                      href="https://google.com/"
                    >
                      BookLogia
                    </a>
                  </div>
                </div>

                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end ">
                  <a
                    className="btn btn-floating m-1 border-0 text-white"
                    role="button"
                    href="https://www.instagram.com/"
                  >
                    <i className="fab fa-instagram  icon-media-footer"></i>
                  </a>
                  <a
                    className="btn btn-floating m-1 border-0 text-white"
                    role="button"
                    href="https://www.facebook.com/"
                  >
                    <i className="fab fa-facebook-f icon-media-footer"></i>
                  </a>

                  <a
                    className="btn btn-floating m-1 border-0 text-white"
                    role="button"
                    href="https://twitter.com/"
                  >
                    <i className="fab fa-twitter icon-media-footer"></i>
                  </a>

                  <a
                    className="btn btn-floating m-1 border-0 text-white"
                    role="button"
                    href="https://google.com/"
                  >
                    <i className="fab fa-google icon-media-footer"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
