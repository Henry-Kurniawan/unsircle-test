import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import Swal from "sweetalert2";
import loginImage from "../images/granblue_background2.jpg";
import { actionLogin } from "../store/action/actionUser";


export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [login_email, setLoginEmail] = useState("");
  const [login_password, setLoginPassword] = useState("");

  function loginHandler(event) {
    event.preventDefault();
    const payload = {
      email: login_email,
      password: login_password,
    };
    dispatch(actionLogin(payload))
      .then(() => {
        setLoginEmail("");
        setLoginPassword("");
        history.push("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  }


  return (
    <section class="bg-dark text-black">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" style={{ borderRadius: "1rem" }}>
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={loginImage}
                    alt="login form"
                    class="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={loginHandler}>
                      <div class="d-flex align-items-center mb-3 pb-1">
                        <i
                          class="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        ></i>
                        <span class="h1 fw-bold mb-0">Login</span>
                      </div>

                      <h5
                        class="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="login-email">
                          Email address
                        </label>
                        <input
                          onChange={(e) => setLoginEmail(e.target.value)}
                          type="email"
                          id="login-email"
                          class="form-control form-control-lg"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="login-password">
                          Password
                        </label>
                        <input
                          onChange={(e) => setLoginPassword(e.target.value)}
                          type="password"
                          id="login-password"
                          class="form-control form-control-lg"
                        />
                      </div>

                      <div class="pt-1 mb-4">
                        <div class="row">
                          <div class="col-3">
                            <button
                              class="btn btn-dark btn-lg btn-block"
                              type="submit"
                            >
                              Login
                            </button>
                          </div>
                          <div class="col-3">
                          
                    
                          </div>

                          <div class="col-6">
                            <div class="pt-1 mb-4"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
