import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import heroImage from '../../assets/images/hero.png';
import { login } from '../../redux/authSlice';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function Register() {
    const [email, setEmail] = useState('');
    const [nama, setNama] = useState('');
    const [password, setPassword] = useState('');
    const [passwordType, setPasswordType] = useState('password');

    const dispatch = useDispatch();
    const history = useHistory();

    const validateForm = () => {
        return email.length > 0 && nama.length > 0 && password.length > 0;
    };

    const togglePassword = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
            return;
        }
        setPasswordType('password');
    };

    const handleRegister = (e) => {
        e.preventDefault();

        const userData = {
            nama: nama,
            email: email,
            password: password
        };

        console.log(userData);
        if (nama !== '') {
            if (email !== '') {
                if (password !== '') {
                    dispatch(login({ user: userData }));
                    toast.success('Register berhasil');
                    history.push('/');
                } else {
                    toast.error('Password Kosong');
                }
            } else {
                toast.error('Email Kosong');
            }
        } else {
            toast.error('Username Kosong');
        }
    };

    return (
        <Container className="py-5 my-3">
            <Row className="align-items-center">
                <Col md={6} xl={6} className="mx-auto">
                    <h1 className="fw-bold">Let&apos;s Join With Us and</h1>
                    <h1 className="fw-bold">Make Your Own Reading Buddy !</h1>
                    <form className="form-login">
                        <div className="form-group">
                            <label className="fw-semibold" htmlFor="exampleInputEmail1">
                                Username <span className="text-danger">*</span>{' '}
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputusername1"
                                aria-describedby="emailHelp"
                                required
                                onChange={(e) => setNama(e.target.value)}
                            />
                        </div>

                        <div className="form-group  my-4">
                            <label className="fw-semibold" htmlFor="exampleInputEmail1">
                                Email <span className="text-danger">*</span>{' '}
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group my-4">
                            <label className="fw-semibold" htmlFor="exampleInputPassword1">
                                Password <span className="text-danger">*</span>
                            </label>
                            <input
                                type={passwordType}
                                className="form-control"
                                id="exampleInputPassword1"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div>
                                <input
                                    type="checkbox"
                                    checked={passwordType === 'text' ? 'checked' : ''}
                                    onChange={togglePassword}
                                />
                                <label className="mx-1">Show Password</label>
                            </div>
                        </div>
                        <input
                            type="submit"
                            className="btn btn-danger text-white px-4 py-2"
                            disabled={!validateForm()}
                            placeholder="SIGN UP"
                            onClick={handleRegister}
                        />
                        <p className="mt-3 fw-semibold">
                            By signing up for BOOKLOGIA you agree to BOOKLOGIA’s <br></br>
                            Term’s of Service & Privacy Policy
                        </p>
                    </form>
                </Col>
                <Col md={6} xl={6} className="mx-auto">
                    <img src={heroImage} className="img-fluid" alt="" />
                </Col>
            </Row>{' '}
        </Container>
    );
}

export default Register;
