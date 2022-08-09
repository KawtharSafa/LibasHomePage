import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import store1 from './store1.png';
import store2 from './store2.png';
import './Footer.css'
import React from "react";


const Footer = () => {

  return (
    <>
      <div>
        <div className="module-small text-white FooterMain">
          <div className="container">
            <div className="row justify-content-around">

              <div className="col-sm-2">
                <div className="widget">
                  <h5 className="widget-title font-alt">Our Services</h5>
                  <ul className="icon-list" type='none'>
                    <li><a href="#">The Concept</a></li>
                    <li><a href="#">Partner Services</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="widget">
                  <h5 className="widget-title font-alt">Buy</h5>
                  <ul className="icon-list" type='none'>
                    <li><a href="#">Tracking</a></li>
                    <li><a href="#">Authentication</a></li>
                    <li><a href="#">Shipping Policy</a></li>
                    <li><a href="#">Return Policy</a></li>
                    <li><a href="#">Quality Control</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="widget">
                  <h5 className="widget-title font-alt">Sell</h5>
                  <ul className="icon-list" type='none'>
                    <li><a href="#">How To Sell</a></li>
                    <li><a href="#">Sell an Item</a></li>
                    <li><a href="#">Handling</a></li>
                    <li><a href="#">Trusted Sellers</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="widget">
                  <h5 className="widget-title font-alt">Help</h5>
                  <ul className="icon-list" type='none'>
                    <li><a href="#">Help Center</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="widget">
                  <h5 className="widget-title font-alt ">Libas LLC</h5>
                  <ul className="icon-list" type='none'>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">How It Works</a></li>
                    <li><a href="#">Latest Stories</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">Join Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <hr className="divider-d" />

          <footer className="footerBottom">
            <div className="container-fluid">

              <div className="row">

                <div className="col-sm-6">
                  <p className="copyright font-alt">Lebanon - English US - $ - USD
                    <IoIosArrowDown className="ms-3 icon" />
                  </p>
                </div>

              </div>

              <div className="row">

                <div className="col-sm-2">
                  <p className="copyright font-alt">Legal Information</p>
                </div>
                <div className="col-sm-2">
                  <p className="copyright font-alt">Terms & Conditions</p>
                </div>
                <div className="col-sm-2">
                  <p className="copyright font-alt">Privacy Policy & Cookies</p>
                </div>
                <div className="col-sm-1">
                  <p className="copyright font-alt">Partners</p>
                </div>
                <div className="col-sm-2 mb-1">
                  <FiTwitter className="me-3 icon" size={20} />
                  <FiFacebook className="me-3 icon" size={20} />
                  <FiInstagram className="me-3 icon" size={20} />
                </div>
                <div className="col-sm-3 mb-1">
                  <img src={store2} className="me-3 Appstore" size={20} />
                  <img src={store1} className="Appstore" size={20} />
                </div>


              </div>

              <div className="row">
                <div className="col-sm-11"></div>
                <div className="col-sm-1 scroll-up float-end">
                  <a href="#"><BsArrowUpCircleFill className="toTopIcon" size={24} /></a>
                </div>
              </div>


            </div>

          </footer>
        </div>

      </div>

    </>

  );
}

export default Footer;