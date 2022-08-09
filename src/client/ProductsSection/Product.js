import React from "react";
import { Row } from "react-bootstrap";
import { AiOutlineHeart } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import "./products.css";

const Product = ({ product }) => {

  return (

    <>
      <Row>
        <div className="layOutProduct p-1">

          <ScrollAnimation animateIn="animate__bounceInLeft" >

            <div className="product-1 ms-4 m-1">
              <div className="product">
                <div className="product-image">
                  <img src={product.productImage} className="img-fluid d-block m-auto" alt="product-image" />
                </div>
                <div className="product-details">
                  <div className="product-data mt-2 text-center">
                    <h5 className="text-center productBrand">{product.productBrand}</h5>
                    <span className="productName ">{product.productName}</span><br />
                    <span className="productCost ">{product.productCost}</span><br />
                    <span className="productLocation ">
                      <HiOutlineLocationMarker /> &nbsp;
                      {product.Location}
                    </span>
                  </div>
                  <div className="product-social-link">
                    <ul>
                      <li><button className="btnSocail"><AiOutlineHeart /></button></li>
                      <li><button className="btnSocail"><FiBookmark /></button></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </ScrollAnimation>

        </div>
      </Row>
    </>

  );
};

export default Product;