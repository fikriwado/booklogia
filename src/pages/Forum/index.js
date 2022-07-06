import { React } from 'react';
import '../../sass/pages/_forum.scss';
import { Col, Container, Row, Button, Modal, Form } from 'react-bootstrap';
import Desainzero from '../../assets/images/Forum/Desainzero.png';
import User from '../../assets/images/Forum/User.png';
import { useState } from 'react';
import Search from '../../components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { setThreads } from '../../redux/threadsSlice';

function Forum() {
    const { threads } = useSelector((state) => state.threads);

    return (
        <div>
            <Col className="banner-blog-parent ">
                <Container className="py-5 z-index-1 w-100 d-flex justify-content-center">
                    <Col md={9} className="w-100 d-flex justify-content-center pt-5 mt-5 pb-5 mb-5">
                        <Col xs={11} md={5} className="text-center">
                            <h1>
                                <b> Temukan Referensi </b>
                            </h1>
                            <h1>
                                <b> &quot;Buku&quot;; </b>
                            </h1>
                            <p>
                                Anda dapat menemukan beberapa buku
                                <span>
                                    <br />
                                    booklogia adalah solusi anda
                                </span>
                            </p>
                            <div className="d-flex justify-content-center align-items-center">
                                <Search />
                                <div className="add">
                                    <Example />
                                </div>
                            </div>
                        </Col>
                    </Col>
                </Container>
            </Col>

            <Container>
                <Row>
                    <Col className="col-sm  flex-center w-100 d-flex justify-content-center mt-4 mb-3">
                        <img className="img-fluid img-round" src={Desainzero} alt="" width="100%" />
                    </Col>

                    <div className="col-sm d-flex align-items-center">
                        <Col className="title-inside">
                            <h1 className="">
                                How to Choose Bicycle For Spring In Australia Shopping Center?
                            </h1>
                            <p className="mt-3 mb-4">
                                <span className="fw-medium">Booklogia </span> menyediakan banyak
                                jasa yang dapat di pilih sesuai yang di butuhkan konsumen. Jika anda
                                ingin meneruskan bisa klik I&apos;m Order...
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
                        {threads
                            .slice()
                            .sort((a, b) => b.id - a.id)
                            .map((thread) => (
                                <Col key={thread.id}>
                                    <img
                                        className="img-round"
                                        src={Desainzero}
                                        alt=""
                                        width="100%"
                                    />

                                    <div className="d-flex align-items-center pt-3">
                                        <div>
                                            <h4>{thread.judul}</h4>
                                            <p className="mt-3 mb-4">
                                                <span className="fw-medium"> </span>
                                                {thread.story}
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
                                                            By: {thread.penulis}
                                                            <br />
                                                            <span className="text-sub-blog">
                                                                {thread.tanggal}
                                                            </span>
                                                        </h6>
                                                    </div>
                                                </Container>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                    </Row>
                </Container>
            </Col>
        </div>
    );
}

export default Forum;

// -------- Modal --------
const Example = () => {
    const { threads } = useSelector((state) => state.threads);
    const [show, setShow] = useState(false);
    const [inputThread, setInputThread] = useState({
        title: '',
        writer: '',
        date: '',
        description: ''
    });

    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputThread({ ...inputThread, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let lastId = threads[threads.length - 1].id;

        const newThread = {
            judul: inputThread.title,
            id: ++lastId,
            fotobuku: '../../assets/images/Forum/Desainzero.png',
            deskripsi: inputThread.description,
            story: 'Buku ini menjadi salah satu buku yang paling laris di antara beberapa buku terkait self improvemen',
            penulis: inputThread.writer,
            tanggal: inputThread.date,
            like: 0,
            id_user: 5,
            edit: 0,
            delete: 0,
            createAt: null,
            editAt: null,
            deleteAt: null,
            komen: []
        };

        dispatch(setThreads(newThread));

        setInputThread({
            title: '',
            writer: '',
            date: '',
            description: ''
        });

        handleClose();
    };

    return (
        <>
            <Button
                onClick={handleShow}
                type="button"
                data-toggle="modal"
                className="w-100 btn btn-danger mx-md-2  mb-5 mt-5 ">
                <i className="fa fa-solid fa-plus pr-3 pl-3 text-white"> </i>
            </Button>

            <Modal size="xl" show={show} onHide={handleClose}>
                <Form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Label>Judul</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                name="title"
                                value={inputThread.title}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput2">
                            <Form.Label>Penulis</Form.Label>
                            <Form.Control
                                type="text"
                                name="writer"
                                value={inputThread.writer}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput3">
                            <Form.Label>Tanggal</Form.Label>
                            <Form.Control
                                type="text"
                                name="date"
                                value={inputThread.date}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Tentang Buku</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                value={inputThread.description}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};
