import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Login from "./pages/Login";
import ListInventory from "./pages/ListInventory";
import AddInventory from "./pages/AddInventory";
import EditInventory from "./pages/EditInventory";

import PrivateRoute from "./components/PrivateRoute";
import PrivateRouteLoggedIn from "./components/PrivateRouteLoggedIn";

import { useDispatch, useSelector } from "react-redux";
import { setUserPermissions } from "./store/action/actionUser";



function App() {
  const dispatch = useDispatch()

  if(localStorage.getItem('access_token')) {
    const payload = localStorage.getItem('permissions').split(',')
    dispatch(setUserPermissions(payload))
  }

  return (
    <>
      <Header />

      <Switch>
        <PrivateRouteLoggedIn path="/login">
          <Login />
        </PrivateRouteLoggedIn>

        <div className="container-fluid bg-dark text-white row">
          <SideBar />

          <div
            id="content"
            className="container col-10 bg-white text-dark"
            style={{ minHeight: "100vh" }}
          > 

            <PrivateRoute path="/edit/:id">
              <EditInventory />
            </PrivateRoute>

            <PrivateRoute path="/add">
              <AddInventory />
            </PrivateRoute>
            
            <PrivateRoute path="/" exact>
              <ListInventory />
            </PrivateRoute>

          </div>
        </div>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
