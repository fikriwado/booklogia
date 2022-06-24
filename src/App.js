// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Forum from "./pages/Forum";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Artikel from "./pages/About/Detail/Artikel";

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/forum" component={Forum} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/artikel" component={Artikel} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
