import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SetLoader } from "../../Redux/loaderSlice";
import { message } from "antd";
import { useDispatch } from "react-redux";
import "../Styles/loginstyle.css";
import Divider from "../../components/Divider";
import Header from "../../components/Header";
import { LoginUser } from "../../ApiCalls/User";
import { SetUser } from "../../Redux/userSlice";

const Login = () => {
  const [customerLogin, setCustomerLogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCustomerLogin({
      ...customerLogin,
      [event.target.name]: event.target.value,
    });
  };

  const loginUserHandle = async (event) => {
    event.preventDefault();
    // console.log(customerLogin)
    try {
      dispatch(SetLoader(true));
      const response = await LoginUser(customerLogin);
      dispatch(SetLoader(false));
      if (response.success) {
        message.success(response.message);
        dispatch(SetUser(response.user));
        localStorage.setItem("token", response.data);
        navigate("/");
        setCustomerLogin({ email: "", password: "" });
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  return (
    <div>
      <Header />
      <section className="w-[25rem] max-h-screen m-auto mt-8 mb-14 rounded-lg shadow-2xl mobile:w-[21rem] tablet:w-[25rem]">
        <div id="loginSvgdiv">
          <div className="loginSvgdiv2">
            <svg
              id="loginsvgStrip"
              viewBox="0 0 42 20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path className="strip-1" d="M0 0h8v20H0z"></path>
              <path className="strip-2" d="M16 0h8v20h-8z"></path>
              <path className="strip-3" d="M32 0h8v20h-8z"></path>
            </svg>
          </div>
        </div>

        <div className="loginmainbox">
          <h1 id="loginTitle">LOG IN TO KFC</h1>
          <div className="loginFormdiv">
            <form onSubmit={loginUserHandle} id="loginForm">
              <div className="input-data">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={customerLogin.email}
                  onChange={handleChange}
                  required
                />
                {/* <div className="underline"></div> */}
                <label>Email</label>
              </div>
              <Divider />
              <div className="input-data">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={customerLogin.password}
                  onChange={handleChange}
                  required
                />
                {/* <div className="underline"></div> */}
                <label>Password</label>
              </div>
              <Divider />
              <div className="loginterms">
                <p className="logintermtext">
                  By logging into the application or proceeding as a guest, you
                  agree to our <b>Privacy Policy</b> and <b>Terms of Use</b>.
                </p>
              </div>
              <div className="loginBtndiv">
                <input type="submit" value="Log In" />
              </div>
              <div className="redirecttosignup">
                <p className="redirectsignuptext">
                  Don't have an account?{" "}
                  <Link to={"/register"}>
                    <span className="redirectsignuplink">Join Now</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
