import React from "react";
import "../../sass/pages/_forum.scss";
import { Col, Container, Row } from "react-bootstrap";
import Desainzero from "../../assets/images/Forum/Desainzero.png";
import User from "../../assets/images/Forum/User.png";

function Forum() {
  return (
    <div>
      <Col className="banner-blog-parent ">
        <Container className="py-5 z-index-1 w-100 d-flex justify-content-center">
          <Col
            md={9}
            className="w-100 d-flex justify-content-center pt-5 mt-5 pb-5 mb-5"
          >
            <Col xs={11} md={4} className="text-center">
              <h1> Dirodi Entertaining </h1> <h1> "Blog" </h1>
              <p>
                dirodi entertaining blog dirodi
                <span>
                  <br />
                  entertaing birodi blog
                </span>
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <Col className="search mr-2">
                  <Col className="w-100 h-100 d-flex justify-content-center align-items-center ">
                    <form
                      action="/action_page.php"
                      className="d-flex align-items-center form-container"
                    >
                      <input
                        type="text"
                        placeholder="Search.."
                        name="search "
                        className="search-input p-2 mr-5"
                      />

                      <button
                        type="button"
                        className="btn btn-primary mx-md-2 button-search mb-5 mt-5"
                      >
                        <i className="fa fa-search pr-3 pl-3 text-white"> </i>
                      </button>
                    </form>
                  </Col>
                </Col>
                <div className="add">
                  <button
                    type="button"
                    className="w-100 btn btn-danger mx-md-2  mb-5 mt-5 "
                  >
                    <i className="fa fa-solid fa-plus pr-3 pl-3 text-white">
                      {" "}
                    </i>
                  </button>
                </div>
              </div>
            </Col>
          </Col>
        </Container>
      </Col>

      <Container>
        <Row>
          <Col className="col-sm  flex-center w-100 d-flex justify-content-center mt-4 mb-3">
            <img
              className="img-fluid img-round"
              src={Desainzero}
              alt=""
              width="100%"
            />
          </Col>

          <div className="col-sm d-flex align-items-center">
            <Col className="title-inside">
              <h1 className="">
                How to Choose Bicycle For Spring In Australia Shopping Center?
              </h1>
              <p className="mt-3 mb-4">
                <span className="fw-medium">Booklogia </span> menyediakan banyak
                jasa yang dapat di pilih sesuai yang di butuhkan konsumen. Jika
                anda ingin meneruskan bisa klik I'm Order...
                <span className="fa-solid fa-arrow-right-long"></span>
              </p>
              <div className="d-flex ">
                <img
                  src={User}
                  className="bg-secondary rounded"
                  alt=""
                  width="12%"
                />
                <Container className=" d-flex align-items-center ml-2">
                  <div>
                    <h6>
                      By: Cristiano Ronaldo <br />
                      <span className="text-sub-blog">16 June 2022</span>
                    </h6>
                  </div>
                </Container>
              </div>
            </Col>
          </div>
        </Row>
      </Container>

      <Col md={12} className="pageabout-3 bg-light pt-3">
        <Container className="pb-5">
          <Row className="row row-cols-1 row-cols-md-3 g-4 pb-4">
            <Col>
              <img className="img-round" src={Desainzero} alt="" width="100%" />

              <div className="d-flex align-items-center pt-3">
                <div>
                  <h4>
                    How to Choose Bicycle For Spring In Australia Shopping
                    Center?
                  </h4>
                  <p class="mt-3 mb-4">
                    <span class="fw-medium">Booklogia </span> menyediakan banyak
                    jasa yang dapat di pilih sesuai yang di butuhkan konsumen...
                    <span className="fa-solid fa-arrow-right-long"></span>
                  </p>
                  <div className="d-flex ">
                    <img
                      src={User}
                      className="bg-secondary rounded"
                      alt=""
                      width="12%"
                    />
                    <Container className=" d-flex align-items-center ml-2">
                      <div>
                        <h6>
                          By: Cristiano Ronaldo <br />
                          <span className="text-sub-blog">16 June 2022</span>
                        </h6>
                      </div>
                    </Container>
                  </div>
                </div>
              </div>
            </Col>

            <Col>
              <img className="img-round" src={Desainzero} alt="" width="100%" />

              <div className="d-flex align-items-center pt-3">
                <div>
                  <h4>
                    How to Choose Bicycle For Spring In Australia Shopping
                    Center?
                  </h4>
                  <p class="mt-3 mb-4">
                    <span class="fw-medium">Booklogia </span> menyediakan banyak
                    jasa yang dapat di pilih sesuai yang di butuhkan konsumen...
                    <span className="fa-solid fa-arrow-right-long"></span>
                  </p>
                  <div className="d-flex ">
                    <img
                      src={User}
                      className="bg-secondary rounded"
                      alt=""
                      width="12%"
                    />
                    <Container className=" d-flex align-items-center ml-2">
                      <div>
                        <h6>
                          By: Cristiano Ronaldo <br />
                          <span className="text-sub-blog">16 June 2022</span>
                        </h6>
                      </div>
                    </Container>
                  </div>
                </div>
              </div>
            </Col>

            <Col>
              <img className="img-round" src={Desainzero} alt="" width="100%" />

              <div className="d-flex align-items-center pt-3">
                <div>
                  <h4>
                    How to Choose Bicycle For Spring In Australia Shopping
                    Center?
                  </h4>
                  <p class="mt-3 mb-4">
                    <span class="fw-medium">Booklogia </span> menyediakan banyak
                    jasa yang dapat di pilih sesuai yang di butuhkan konsumen...
                    <span className="fa-solid fa-arrow-right-long"></span>
                  </p>
                  <div className="d-flex ">
                    <img
                      src={User}
                      className="bg-secondary rounded"
                      alt=""
                      width="12%"
                    />
                    <Container className=" d-flex align-items-center ml-2">
                      <div>
                        <h6>
                          By: Cristiano Ronaldo <br />
                          <span className="text-sub-blog">16 June 2022</span>
                        </h6>
                      </div>
                    </Container>
                  </div>
                </div>
              </div>
            </Col>
            {/* Baris ke kedua */}
            <Col>
              <img className="img-round" src={Desainzero} alt="" width="100%" />

              <div className="d-flex align-items-center pt-3">
                <div>
                  <h4>
                    How to Choose Bicycle For Spring In Australia Shopping
                    Center?
                  </h4>
                  <p class="mt-3 mb-4">
                    <span class="fw-medium">Booklogia </span> menyediakan banyak
                    jasa yang dapat di pilih sesuai yang di butuhkan konsumen...
                    <span className="fa-solid fa-arrow-right-long"></span>
                  </p>
                  <div className="d-flex ">
                    <img
                      src={User}
                      className="bg-secondary rounded"
                      alt=""
                      width="12%"
                    />
                    <Container className=" d-flex align-items-center ml-2">
                      <div>
                        <h6>
                          By: Cristiano Ronaldo <br />
                          <span className="text-sub-blog">16 June 2022</span>
                        </h6>
                      </div>
                    </Container>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <img className="img-round" src={Desainzero} alt="" width="100%" />

              <div className="d-flex align-items-center pt-3">
                <div>
                  <h4>
                    How to Choose Bicycle For Spring In Australia Shopping
                    Center?
                  </h4>
                  <p class="mt-3 mb-4">
                    <span class="fw-medium">Booklogia </span> menyediakan banyak
                    jasa yang dapat di pilih sesuai yang di butuhkan konsumen...
                    <span className="fa-solid fa-arrow-right-long"></span>
                  </p>
                  <div className="d-flex ">
                    <img
                      src={User}
                      className="bg-secondary rounded"
                      alt=""
                      width="12%"
                    />
                    <Container className=" d-flex align-items-center ml-2">
                      <div>
                        <h6>
                          By: Cristiano Ronaldo <br />
                          <span className="text-sub-blog">16 June 2022</span>
                        </h6>
                      </div>
                    </Container>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <img className="img-round" src={Desainzero} alt="" width="100%" />

              <div className="d-flex align-items-center pt-3">
                <div>
                  <h4>
                    How to Choose Bicycle For Spring In Australia Shopping
                    Center?
                  </h4>
                  <p class="mt-3 mb-4">
                    <span class="fw-medium">Booklogia </span> menyediakan banyak
                    jasa yang dapat di pilih sesuai yang di butuhkan konsumen...
                    <span className="fa-solid fa-arrow-right-long"></span>
                  </p>
                  <div className="d-flex ">
                    <img
                      src={User}
                      className="bg-secondary rounded"
                      alt=""
                      width="12%"
                    />
                    <Container className=" d-flex align-items-center ml-2">
                      <div>
                        <h6>
                          By: Cristiano Ronaldo <br />
                          <span className="text-sub-blog">16 June 2022</span>
                        </h6>
                      </div>
                    </Container>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Col>
    </div>
  );
}

export default Forum;
