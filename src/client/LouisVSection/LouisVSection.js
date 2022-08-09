import React from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { FiBookmark, FiSend } from "react-icons/fi";
import { BsShare } from "react-icons/bs";
import { MdOutlineShoppingBag } from 'react-icons/md';
import { HiOutlineLocationMarker } from "react-icons/hi";

import bag from './assets/bag.png';
import bag1 from './assets/bag1.png';
import bag2 from './assets/bag2.png';
import bag3 from './assets/bag3.png';
import bag4 from './assets/bag4.png';
import bag5 from './assets/bag5.png';
import bag6 from './assets/bag6.png';
import badge from './assets/badge.png';


import './LouisVSection.css'


const LouisVSection = () => {

  return (
    <>
      <div>
        <div className="module-small text-white LouisSection">
          <div className="container productImage" style={{ width: '50%', float: 'left' }}>
            <div className="row justify-content-around">

              <div className="col-sm-3">
                <div className="widget">
                  <ul className="icon-list p-1" type='none'>
                    <li className="m-1"><img src={bag1} style={{ width: '50px' }} /></li>
                    <li className="m-1"><img src={bag2} style={{ width: '50px' }} /></li>
                    <li className="m-1"><img src={bag3} style={{ width: '50px' }} /></li>
                    <li className="m-1"><img src={bag4} style={{ width: '50px' }} /></li>
                    <li className="m-1"><img src={bag5} style={{ width: '50px' }} /></li>
                    <li className="m-1"><img src={bag6} style={{ width: '50px' }} /></li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="bagProductImage">
                  <img src={bag} className='img-fluid rounded'/>
                  <div className="row">
                    <ul className="col-sm-2 position-absolute top-0 start-0"><AiOutlineHeart color="black" /></ul>
                    <ul className="col-sm-4 position-absolute top-0 "></ul>
                    <ul className="col-sm-2 position-absolute top-0 end-0 icon1"><FiSend className="icon1" color="black" /></ul>
                    <ul className="col-sm-2 position-absolute top-0 end-0 icon2"><BsShare className="icon2" color="black" /></ul>
                    <ul className="col-sm-2 position-absolute top-0 end-0 icon3"><FiBookmark className="icon3" color="black" /></ul>
                  </div>
                </div>
              </div>


            </div>
          </div>

          <div className="container productDiscount" style={{ width: '50%', float: 'right' }}>
            <div className="row justify-content-around">

              <div className="col">
                <div className="DisountDetails">

                  <div className="row">
                    <p>
                      <span className="fw-bolder text-decoration-line-through" style={{ fontSize: '28px' }}>$2,100</span>&nbsp;
                      <span className="fw-bold text-danger sale1" style={{ fontSize: '18px' }}>$1,900</span>&nbsp;
                      <span className="text-success sale2" style={{ fontSize: '11px' }}>-70%</span>
                    </p>

                    <div className="small" style={{ color: '#777777' }}>Estimated retail price $2,000 </div>
                    <br />
                    <div className="col-sm-1 me-2"><img src={badge} style={{ width: '60px' }} /></div>
                    <div className="col-sm-5 pt-1 small">
                      +15 USD Control and authentication Physical
                      control and authentication by our experts. Learn more
                    </div>

                    <div className="row">
                      <div className="col-sm-1 me-2"></div>
                      <div className="col-sm-3">
                        <span style={{ fontSize: '11px' }}>Good Condition</span>
                        <span style={{ fontSize: '11px' }}>Brown Leather</span>
                        <span style={{ fontSize: '11px' }}>Classic LV leather, no scratches</span>
                      </div>

                    </div>

                  </div>

                  <div className="">
                    <div className="row">
                      <div className="col-sm-12 text-center">
                        <button className="btn-dark orderBtn">Order</button>
                      </div>
                    </div>

                    <div className="row m-2 d-flex justify-content-center" >
                      <div className="col-sm-5 text-center">
                        <button className="requestBtn">Request to View</button>
                      </div>
                      <div className="col-sm-4 text-center">
                        <button className="offerBtn">Make an Offer</button>
                      </div>
                      <div className="col-sm-2 text-center">
                        <button className="shopBtn"><MdOutlineShoppingBag /></button>
                      </div>
                    </div>
                  </div>

                  <div className="row m-4">
                     <span><HiOutlineLocationMarker size={'22px'}/> &nbsp; Beirut, Lebanon</span> 
                  </div>


                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </>

  );
}

export default LouisVSection;