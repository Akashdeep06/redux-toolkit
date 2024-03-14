import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./slices/dataSlice";
import "./MyComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand d-none d-sm-block col-sm-2" href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
            alt="Logo"
            width="50%"
            className="img-fluid"
          />
        </a>
        <button
          className="navbar-toggler mt-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto d-none d-sm-block col-3"></ul>
          <form className="d-flex mx-auto col-sm-4" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-danger" type="submit">
              Search
            </button>
          </form>
          <ul className="navbar-nav col-sm-1"></ul>
          <Link to="/cart" className="col-sm-2">
            <button
              className="btn btn-danger"
              type="submit"
              style={{ width: "100%" }}
            >
              My Cart
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

//   <li key={item.id}>id:{item.id}<br />
//   title:{item.title}<br />
//   <img src={item.image} height={"100px"}></img><br /></li>
