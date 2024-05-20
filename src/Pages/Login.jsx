import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../Providers/AuthProviders";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const { logIn, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    logIn(email, password)
    .then(res=> {
        // eslint-disable-next-line no-unused-vars
        const user = res.user;
        // console.log(user)
        toast.success("Sign In Successful");
       navigate( location.state?.from?.pathname || "/")

    })
    .catch(err=> {
        console.log(err)
        toast.error('Something went wrong!')
    })
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = () => {
    const userCaptcha = captchaRef.current.value;
    if(validateCaptcha(userCaptcha)) {
        setDisabled(false)
    } else {
        setDisabled(true)
    }
  }


  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result)
        navigate(location?.state ? location.state : "/");
        toast.success("Successfully Sign In");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="bg-gray-100">
        <h1 className="text-5xl text-center pt-10 text-black font-bold">
          Login now!
        </h1>
        <div className="hero  ">
          <div className="hero-content flex-col-reverse md:flex-row text-white  md:gap-5 lg:flex-row">
            <div className="text-center md:p-2  md:w-1/2 lg:text-left flex flex-col-reverse">
              <img
                className="p-5 md:p-5 "
                src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais"
                alt=""
              />
            </div>
            <div className=" md:w-1/2 md:p-10 text-white ">
              <form onSubmit={handleLogin} className="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className=" p-5 rounded-md text-gray-500"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="p-5 rounded-md text-gray-500"
                    required
                  />
                  <label className="label">
                    <a
                      href="#"
                      className="label-text-alt text-black link link-hover"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div>
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    ref={captchaRef}
                    name="captcha"
                    placeholder="Enter captcha here"
                    className="p-5 w-full rounded-md text-gray-500"
                    required
                  />
                  <button
                    onClick={handleValidateCaptcha}
                    className="btn w-full mt-3 btn-sm btn-outline"
                  >
                    Validate
                  </button>
                </div>

                <div className="form-control mt-6">
                  <button
                    disabled={disabled}
                    className="btn btn-primary text-white bg-violet-600 font-bold text-xl"
                  >
                    Login
                  </button>
                </div>
              </form>

              <div className="w-full gap-3 md:mx-0 text-black mt-10 md:gap-0 justify-around mb-5">
                <button
                  onClick={handleGoogleLogin}
                  className="font-bold flex w-full justify-center gap-3 items-center border px-12 py-3 hover:bg-violet-600 hover:text-white rounded-md"
                >
                  Google Login
                </button>
              </div>

              <div className="mt-6">
                <Link className="text-black text-xl " to="/register">
                  Do not have an account?{" "}
                  <span className="text-blue-500 font-bold underline">
                    Register
                  </span>{" "}
                  Here.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
