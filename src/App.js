import React from "react";

import Navbar from './client/Navbar/NavbarComp';
import Footer from './client/Footer/Footer';
import Footer2 from './client/Footer2/Footer2';
import LouisVSection from './client/LouisVSection/LouisVSection';
import DetailsSection from './client/DetailsSection/DetailsSection';
import ProductsSection from './client/ProductsSection/ProductsSection';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './client/index.css'

function App() {

  return (

    <div className="App">

      <Navbar />
      
      <div className='Components' >

        <h1 className="text-center mt-4" style={{color: '#C6AC96', fontWeight:'bold'}}>Louis Vuitton</h1>
        <h5 className="text-center mb-4" style={{fontSize:'1.3rem'}}>Deauville Cloth Handbag</h5>
        <LouisVSection/>
        <DetailsSection/>

        <h1 className="text-center m-4">You May Also Like</h1>

        <ProductsSection />

      </div>

      <Footer />
      <Footer2 />

    </div>
  );
}

export default App;
