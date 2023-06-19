import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import "./App.css";
import SignIn from "./components/signIn/SignIn";
import Signup from "./components/signup/Signup";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNav from "./components/headerNav/HeaderNav";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<Signup />} />

          <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
