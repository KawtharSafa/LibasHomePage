import React from "react";

import { IoIosArrowForward } from "react-icons/io";
import { MdOutlinePrivacyTip, MdOutlineLocalShipping } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";

import './DetailsSection.css'

const DetailsSection = () => {

  return (
    <>
      <div style={{ height: '40rem' }}>

        <div className="row module-small text-white detailsReview">

          <div className="container p-4" style={{ width: '50%', float: 'left' }}>

            <div className="container p-y m-2 p-4" style={{ color: 'black' }}>
              <div>
                <h5 className="fw-bolder">Details</h5>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <span className="fw-bold">Brand</span><span>Channel</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="fw-bold">Model</span><span>Classic</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="fw-bold">Condition</span><span>Good</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="fw-bold">Color</span><span>Black</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="fw-bold">Size</span><span>Small</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="fw-bold">Dimensions</span><span>28 * 18 * 5 cm</span>
                </div>
              </div>
            </div>

          </div>

          <div className="container" style={{ width: '50%', float: 'right' }}>

            <div className="container p-y mt-4 m-2 p-4" style={{ color: 'black' }}>
              <div>
                <h5 className="fw-bolder">Seller</h5>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <span className="fw-bold">Brand</span><span>Channel</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="fw-bold">Model</span><span>Classic</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="fw-bold">Condition</span><span>Good</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="fw-bold">Color</span><span>Black</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="fw-bold">Size</span><span>Small</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="fw-bold">Dimensions</span><span>28 * 18 * 5 cm</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className= "row module-small text-white">

          <div className="container p-4" style={{ width: '50%', float: 'left' }}>

            <div className="container p-y m-2 p-4" style={{ color: 'black' }}>

                <div className="services d-flex justify-content-between bg-light mb-2 p-3">
                  <span className="fw-bold">
                    <MdOutlinePrivacyTip size={'24px'}/> &nbsp;
                    BrandQuality Control</span>
                    <span><IoIosArrowForward size={'24px'}/></span>
                </div>

                <div className="services d-flex justify-content-between bg-light mb-2 p-3">
                  <span className="fw-bold">
                    <MdOutlineLocalShipping size={'24px'}/> &nbsp;
                    Shipping</span>
                    <span><IoIosArrowForward size={'24px'}/></span>
                </div>

                <div className="services d-flex justify-content-between bg-light p-3">
                  <span className="fw-bold">
                    <VscDebugRestart size={'24px'}/> &nbsp;
                    Returns</span>
                    <span><IoIosArrowForward size={'24px'}/></span>
                </div>

            </div>

          </div>

          <div className="container" style={{ width: '50%', float: 'right' }}>

            <div className="container p-y mt-4 m-2 p-4" style={{ color: 'black' }}>

              <div className="bg-light p-4 fw-bold">
                <p>Leave a comment for the seller</p>
                <textarea className="p-2" placeholder="Type here.."></textarea>
              </div>
 
            </div>

          </div>

        </div>

      </div>

    </>

  );
}

export default DetailsSection;