import React from "react";
import "../../sass/pages/_about.scss";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import tipsData from "../../utils/tips.json";

function Tips() {
  return (
    <section className="padding-y-xxl position-relative  pt-3 pb-5 z-index-1">
      <Container className=" max-width-adaptive-sm position-relative z-index-2">
        <div className="text-component margin-bottom-sm  pt-5 text-center">
          <h1>
            <b>Mari Membaca </b>
          </h1>
          <div className="w-100 d-flex justify-content-center">
            <p className="col-lg-7 col-12">
              Beberapa manfaat membaca buku, salah satunya anda mendapat banyak
              referensi yang berguna kedepannya, sehingga buku disebut jendela
              dunia
            </p>
          </div>
        </div>
        <div className="row  col-lg-8 col-12 mx-lg-auto mx-0 pt-3  mb-5">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-search text-white bg-success"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </Container>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {
            tipsData.map((tips) => 
              <div className="col" key={tips.slug}>
                <Link to={"/tips/" + tips.slug} className="text-decoration-none text-dark">
                  <div className="card h-100 card-kegiatan">
                    <img src={window.location.origin + "/assets/images/tips/" + tips.thumbnail} alt={tips.judul} className="card-img-top img-fluid" />
                    <div className="card-body ">
                      <h5>{tips.judul}</h5>
                      <p className="card-text">{tips.tanggal}</p>
                    </div>
                  </div>
                </Link>
              </div>
            )
          }
        </div>
      </div>
    </section>
  );
}

export default Tips;
