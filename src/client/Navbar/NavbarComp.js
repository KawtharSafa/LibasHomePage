import Form from 'react-bootstrap/Form';
import { BsSearch } from 'react-icons/bs'
import React from "react";
import LibasLogo from './libas.png'
import { MdOutlineShoppingBag } from 'react-icons/md'
import './Navbar.css'

function NavbarComp() {
  return (
    <>

    {/* mainnav */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white p-4 mainNav">
        <div className="container-fluid navContainer ">

          <button className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">

            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse navSearch navbar-right" id="navbarSupportedContent">
            <Form className="d-flex">
              <BsSearch
                style={{ marginLeft: "1rem", position: "absolute", marginTop: "8px" }}
                color="#777" size="1.1em" />
              <Form.Control
                className="form-control me-2"
                type="search"
                placeholder="Search by brand, category, item..."
                aria-label="Search"
                style={{ height: "2rem", paddingLeft: "40px" }}
              />
            </Form>
          </div>

          <a className="navbar-brand" href="#">
            <img src={LibasLogo} style={{ width: '150px', height: '40px' }} />
          </a>

          <div className="collapse navbar-collapse navLinks navbar-right mainNavLinks" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0 float-xl-end ">
                <li className="nav-item me-4" >
                  <button className=" sellItem" href="#">Sell an item</button>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Sign Up</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Sign In</a>
                </li> 
                <li className="nav-item">
                  <a className="nav-link" href="#"><MdOutlineShoppingBag size='24px' /></a>
                </li>
             </ul>
          </div>

        </div>
      </nav>

    {/* subnav */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-4 subNav">
        <div className="container-fluid navContainer">

          <button className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">

            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse navLinks " id="navbarSupportedContent1">
            <div className=' LinksList'>

              <ul className="navbar-nav me-auto mb-2 mb-lg-0 float-xl-end ">
                <li className="nav-item m-4" >
                  <a className="nav-link" href="#">New</a>
                </li>
                <li className="nav-item m-4">
                  <a className="nav-link" href="#">Brands</a>
                </li>
                <li className="nav-item m-4">
                  <a className="nav-link" href="#">Women</a>
                </li>
                <li className="nav-item m-4">
                  <a className="nav-link" href="#">Men</a>
                </li>
                <li className="nav-item m-4">
                  <a className="nav-link" href="#">Trending</a>
                </li>
                <li className="nav-item m-4">
                  <a className="nav-link" href="#">Bags</a>
                </li>
                <li className="nav-item m-4">
                  <a className="nav-link" href="#">Watches</a>
                </li>
                <li className="nav-item m-4">
                  <a className="nav-link" href="#">Shoes</a>
                </li>
                <li className="nav-item m-4">
                  <a className="nav-link" href="#">Top Sellers</a>
                </li>
                <li className="nav-item m-4">
                  <a className="nav-link" href="#">Become a Seller</a>
                </li>
              </ul>

            </div>
          </div>

        </div>
      </nav>


    </>
  );
}

export default NavbarComp;
