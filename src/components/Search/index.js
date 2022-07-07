import React, { useState } from 'react';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import '../../sass/pages/_forum.scss';
import Desainzero from '../../assets/images/Forum/Desainzero.png';
import User from '../../assets/images/Forum/User.png';
import dataThreads from '../../utils/threads.json';
import { Link } from 'react-router-dom';

const Search = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [search, setSearch] = useState('');

    return (
        <>
            <Col className="search mr-2">
                <Col className="w-100 h-100 d-flex justify-content-center align-items-center ">
                    <form
                        action="/action_page.php"
                        className="d-flex align-items-center form-container">
                        <input
                            type="text"
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search.."
                            name="search "
                            className="search-input p-2 mr-5"
                        />

                        <button
                            type="button"
                            className="btn btn-primary mx-md-2 button-search mb-5 mt-5"
                            onClick={handleShow}>
                            <i className="fa fa-search pr-3 pl-3 text-white"> </i>
                        </button>
                    </form>

                    <Modal size="xl" show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Search</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="Modal-Search">
                            {dataThreads
                                .filter((val) => {
                                    if (search === '') {
                                        return val;
                                    } else if (
                                        val.judul.toLowerCase().includes(search.toLowerCase())
                                    ) {
                                        return val;
                                    }
                                })
                                .map((val) => {
                                    return (
                                        <Container key={val.id}>
                                            <Link
                                                to={'/thread/' + val.slug}
                                                className="text-decoration-none text-dark">
                                                <Row className="row" key={val.slug}>
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
                                                            <h1 className="">{val.judul}</h1>
                                                            <p className="mt-3 mb-4">
                                                                <span className="fw-medium"></span>{' '}
                                                                {val.story}
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
                                                                            By: {val.penulis} <br />
                                                                            <span className="text-sub-blog">
                                                                                {val.tanggal}
                                                                            </span>
                                                                        </h6>
                                                                    </div>
                                                                </Container>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </Row>
                                            </Link>
                                        </Container>
                                    );
                                })}
                        </Modal.Body>
                    </Modal>
                </Col>
            </Col>
        </>
    );
};

export default Search;
