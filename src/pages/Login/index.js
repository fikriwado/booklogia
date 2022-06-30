import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import userdata from "../../utils/users.json";
import { toast } from "react-toastify";
import { login } from "../../redux/authSlice";
import iconfb from "../../assets/images/Facebook Icon.svg";
import icongithub from "../../assets/images/Github Icon.svg";
import icongoogle from "../../assets/images/Google Icon.svg";
import heroImage from "../../assets/images/hero.png";
import iconlinkedin from "../../assets/images/Lingkedin Icon.svg";
import "../../sass/pages/_login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const dispatch = useDispatch();
  const history = useHistory();

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const tooglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const dataparse = userdata.map((item) => {
      return item;
    });

    const userData = dataparse.find((user) => user.email === email);
    console.log(userData);
    if (userData) {
      if (userData.password !== password) {
        toast.error("login error periksa Password");
      } else {
        dispatch(login({ user: userData }));
        toast.success("login success");
        history.push("/");
      }
    } else {
      toast.error("login error periksa Email");
    }
  };
  return (
    <Container className="py-5 my-3">
      <Row className="align-items-center">
        <Col md={6} xl={6} className="mx-auto">
          <h1 className="fw-bold">Let's Meet Up With</h1>
          <h1 className="fw-bold">Your Reading Buddy !</h1>
          <form className="form-login">
            <div className="form-group">
              <label className="fw-semibold" htmlFor="exampleInputEmail1">
                Email <span className="text-danger">*</span>{" "}
              </label>
              <input
                autoFocus
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
                required
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
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div>
                <input
                  type="checkbox"
                  checked={passwordType === "text" ? "checked" : ""}
                  onChange={tooglePassword}
                />
                <label className="mx-1">Show Password</label>
              </div>
            </div>
            <input
              type="submit"
              className="btn btn-danger text-white px-4 py-2"
              disabled={!validateForm()}
              placeholder="SIGN IN"
              onClick={handleLogin}
            />
          </form>
          <div className="sign-option my-5">
            <h6 className="fw-bold">Or sign in using :</h6>
            <div className="icon-sign-option my-3">
              <img src={iconlinkedin} className="icon-option mx-2" alt=""></img>
              <img src={icongoogle} className="icon-option mx-2" alt=""></img>
              <img src={iconfb} className="icon-option mx-2" alt=""></img>
              <img src={icongithub} className="icon-option mx-2" alt=""></img>
            </div>
          </div>
        </Col>
        <Col md={6} xl={6} className="mx-auto">
          <img src={heroImage} className="img-fluid" alt="" />
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
