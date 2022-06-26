import React from "react";
import "../../sass/pages/_about.scss";
import gambarSatu from "../../assets/images/Tips/gambar-satu.png";
import gambarDua from "../../assets/images/Tips/gambar-dua.png";
import gambarTiga from "../../assets/images/Tips/gambar-tiga.png";
import gambarEmpat from "../../assets/images/Tips/gambar-empat.png";
import gambarLima from "../../assets/images/Tips/gambar-lima.png";
import gambarEnam from "../../assets/images/Tips/gambar-enam.png";
import { Container } from "react-bootstrap";

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
          <div className="col">
            <a
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="text-decoration-none text-dark"
              href="/Artikel"
            >
              <div className="card h-100 card-kegiatan">
                <img src={gambarSatu} alt="" className="card-img-top img" />
                <div className="card-body ">
                  <h5>Belajar dengan siswa SMA Malang</h5>
                  <p className="card-text">4 Sep 2021</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="text-decoration-none text-dark"
              href="/Artikel"
            >
              <div className="card h-100 card-kegiatan">
                <img src={gambarDua} alt="" className="card-img-top img" />
                <div className="card-body">
                  <h5>Ngoding bersama mahasiswa UMM</h5>
                  <p className="card-text">4 Sep 2021</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="text-decoration-none text-dark"
              href="/Artikel"
            >
              <div className="card h-100 card-kegiatan">
                <img src={gambarTiga} alt="" className="card-img-top img" />
                <div className="card-body">
                  <h5>Bootcamp laravel collab with Labit UMM</h5>
                  <p className="card-text">4 Sep 2021</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="text-decoration-none text-dark"
              href="/Artikel"
            >
              <div className="card h-100 card-kegiatan">
                <img src={gambarEmpat} alt="" className="card-img-top img" />
                <div className="card-body">
                  <h5>Lomba prototype web app </h5>
                  <p className="card-text">4 Sep 2021</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="text-decoration-none text-dark"
              href="/Artikel"
            >
              <div className="card h-100 card-kegiatan">
                <img src={gambarLima} alt="" className="card-img-top img" />
                <div className="card-body">
                  <h5>Lomba kecerdasan buatan</h5>
                  <p className="card-text">4 Sep 2021</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="text-decoration-none text-dark"
              href="/Artikel"
            >
              <div className="card h-100 card-kegiatan">
                <img src={gambarEnam} alt="" className="card-img-top img" />
                <div className="card-body">
                  <h5>Lomba prototype mobile app</h5>
                  <p className="card-text">4 Sep 2021</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tips;
