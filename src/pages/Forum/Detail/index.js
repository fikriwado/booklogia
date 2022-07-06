import React from "react";
import { useParams } from "react-router-dom";
import dataThreads from "../../../utils/threads.json";
import { Col, Container, Row, Card } from "react-bootstrap";
import "../../../sass/pages/_forum.scss";
import Desainzero from "../../../assets/images/Forum/Desainzero.png";
import User from "../../../assets/images/Forum/User.png";
import { useSelector } from "react-redux";
import dataUser from "../../../utils/users.json";

function Thread() {
  const { isAuthorized, user } = useSelector((state) => state.auth);
  let params = useParams();
  let threadSelected = dataThreads.find((threads) => {
    return threads.slug === params.slug;
  });

  let postauthor = dataUser.find((user) => {
    return user.id === threadSelected.id_user;
  });

  return (
    <div>
      <section>
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
                <h1 className="">{threadSelected.judul}</h1>
                <p className="mt-3 mb-4">
                  <span className="fw-medium">{threadSelected.deskripsi}</span>
                </p>
                <div className="d-flex pb-2">
                  <img
                    src={User}
                    className="bg-secondary rounded"
                    alt=""
                    width="12%"
                  />
                  <Container className=" d-flex align-items-center ml-2">
                    <div>
                      <h6>
                        By: {postauthor.nama}
                        <br />
                        <span className="text-sub-blog">
                          {threadSelected.tanggal}
                        </span>
                      </h6>
                    </div>
                  </Container>
                  <span className="label">{threadSelected.like} Likes</span>
                </div>
              </Col>
            </div>
          </Row>
          <Card className="comment-container">
            <div className="d-flex ">
              <Card.Img className="comment-img" variant="top" src={User} />
              <Container className=" d-flex align-items-center ml-2">
                <div className="comment-name">
                  {isAuthorized ? (
                    <>
                      <h5 style={{ fontWeight: 600 }}>
                        {user.nama} <br />
                      </h5>
                    </>
                  ) : (
                    <>
                      <h5 style={{ fontWeight: 600 }}>
                        Cristiano Ronaldo <br />
                      </h5>
                    </>
                  )}
                </div>
              </Container>
            </div>
            <div className="comment-div">
              <textarea className="comment-input"></textarea>
            </div>
            <div className="comment-btn-div">
              <button className="comment-btn">Submit</button>
            </div>
          </Card>
          {threadSelected.komens.map((komen) => (
            <>
              <Card className="comment-container mt-3">
                <div className="d-flex ">
                  <Card.Img className="comment-img" variant="top" src={User} />
                  <Container className=" d-flex align-items-center ml-2">
                    <div className="comment-name">
                      <h5 style={{ fontWeight: 600 }}>
                        {
                          dataUser.find((user) => {
                            return user.id === komen.id_user;
                          }).nama
                        }
                        <br />
                      </h5>
                    </div>
                  </Container>
                </div>
                <div
                  className="comment-div"
                  style={{
                    justifyContent: "left",
                    marginTop: "1px",
                    paddingLeft: "90px",
                    paddingRight: "90px",
                  }}
                >
                  <p>{komen.komentar}</p>
                </div>
                <Row style={{ display: "flex", justifyContent: "end" }}>
                  <Col className="col-comment-inside">
                    <div
                      className="comment-like"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginLeft: "30px",
                        marginRight: "30px",
                      }}
                    >
                      <span className="label">{komen.like} Likes</span>

                      <button
                        className="comment-btn"
                        style={{ backgroundColor: "#25546F" }}
                      >
                        <i
                          className="fa fa-thumbs-up pr-3 pl-3 text-white"
                          style={{ marginRight: "6px" }}
                        ></i>
                        Like
                      </button>

                      <button
                        className="comment-btn"
                        style={{ backgroundColor: "#25546F" }}
                      >
                        <i
                          className="fa fa-message pr-3 pl-3 text-white"
                          style={{ marginRight: "6px" }}
                        ></i>
                        Comment
                      </button>

                      <button
                        className="comment-btn"
                        style={{ backgroundColor: "#25546F" }}
                      >
                        <i
                          className="fa fa-trash pr-3 pl-3 text-white"
                          style={{ marginRight: "6px" }}
                        ></i>
                        Delete
                      </button>
                    </div>
                  </Col>
                </Row>
              </Card>
              {komen.komen_lagi.length !== 0 ? (
                <Card
                  className="comment-container-inside"
                  style={{ backgroundColor: "#B3DDDA" }}
                >
                  {komen.komen_lagi.map((komen_lagi) => (
                    <>
                      <div className="d-flex">
                        <Card.Img
                          className="comment-img-inside"
                          variant="top"
                          src={User}
                        />
                        <Container className=" d-flex align-items-center ml-2">
                          <div className="comment-name-inside">
                            <h5 style={{ fontWeight: 600 }}>
                              {
                                dataUser.find((user) => {
                                  return user.id === komen_lagi.id_user;
                                }).nama
                              }
                              <br />
                            </h5>
                          </div>
                        </Container>
                      </div>
                      <div
                        className="comment-div-inside"
                        style={{
                          justifyContent: "left",
                          marginTop: "1px",
                          paddingLeft: "90px",
                          paddingRight: "90px",
                        }}
                      >
                        <p>{komen_lagi.komentar}</p>
                      </div>
                    </>
                  ))}
                </Card>
              ) : (
                <></>
              )}
            </>
          ))}
        </Container>
      </section>
    </div>
  );
}

export default Thread;
