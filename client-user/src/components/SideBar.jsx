import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

export default function SideBar() {
  const history = useHistory();
  const dispatch = useDispatch()

  // const permissions = useSelector((state) => state.usersState.permissions)

  function logoutHandler() {
    localStorage.clear()
    history.push('/login')
  }
  return (
    <div id="side-bar" class="container col-2 pt-5">
      <div class="row">
        <div class="col-2">
          <div class="d-flex justify-content-center align-items-center">
            <img
              src="https://source.unsplash.com/random/300x200"
              width="50px"
              height="50px"
              alt=""
              class="rounded-circle"
            />
          </div>
        </div>
        <div class="col-10">
          <h6>Hello</h6>
          <h6>{localStorage.getItem('email')} </h6>
        </div>
      </div>

      <nav class="nav navbar-dark flex-column pt-3">
        <h4>DASHBOARD</h4>
        <ul class="navbar-nav">
          <li class="nav-item pt-1">
            <div class="row">
              <div class="col-2">
                <i class="fas fa-list-alt fa-2x"></i>
              </div>
              <div class="col-10">
                <Link class="nav-link" to={"/"}>
                  <h6> My Inventory </h6>{" "}
                </Link>
              </div>
            </div>
          </li>
          <li class="nav-item pt-1">
            <div class="row">
              <div class="col-2">
                {" "}
                <i class="fas fa-folder-plus fa-2x"></i>{" "}
              </div>
              <div class="col-10">
                {" "}
                <Link class="nav-link" to={"/add"}>
                  {" "}
                  <h6> Add New Inventory</h6>{" "}
                </Link>
              </div>
            </div>
          </li>
          {/* <li class="nav-item pt-1">
            <div class="row">
              <div class="col-2">
                {" "}
                <i class="fas fa-history fa-2x"></i>{" "}
              </div>
              <div class="col-10">
                {" "}
                <Link class="nav-link" to={"/addUser"}>
                  {" "}
                  <h6> Add new User </h6>{" "}
                </Link>
              </div>
            </div>
          </li> */}
        </ul>
      </nav>

      <nav class="nav navbar-dark flex-column pt-3">
        <h4>SETTINGS</h4>
        <ul class="navbar-nav">
          <li class="nav-item pt-1">
            <div class="row">
              <div class="col-2">
                {" "}
                <i class="fas fa-sign-out-alt fa-2x"></i>{" "}
              </div>
              <div class="col-10">
                {" "}
                <h6 type="button" onClick={logoutHandler} className="nav-link">
                  {" "}
                  <p> Logout </p>{" "}
                </h6>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
