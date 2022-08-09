import React from "react";
import Product from './Product';
import { Container, Col } from "react-bootstrap";

import "./products.css";

const ProductsSection = () => {

  //data test
  const ProductsData = [
    {
      productID: '1',
      productBrand: 'Rolex',
      productImage:  require('./assets/rolex.png'),
      productName: 'Oyster-perpetual',
      productCost: '11,700 USD',
      Location: 'Beirut'
    },
    {
      productID: '2',
      productBrand: 'Hermes',
      productImage: require('./assets/hermes.jpeg'),
      productName: 'Yellow Leather Belt',
      productCost: '2,100 USD' ,
      Location: 'Beirut'
    },
    {
      productID: '3',
      productBrand: 'Audemars Piguet',
      productImage: require('./assets/yellow.jpg'),
      productName: 'ROYAL OAK YELLOW',
      productCost: '180,000 USD',
      Location: 'Dubai'
    },
    {
      productID: '4',
      productBrand: 'Gucci',
      productImage: require('./assets/wrall1.png'),
      productName: 'Beige Canvas Wallet',
      productCost: '370 USD',
      Location: 'Beirut'

    }

  ];

  return (
    <>

      <Container fluid className="ProductsCardsContainer p-4">

        {ProductsData &&
          ProductsData.map((product) => (

            <Col key={product.productID} xl={3} lg={6} md={6} sm={6}>

              <Product
                product={product}
                productBrand={ProductsData.productBrand}
                productImage={ProductsData.productImage}
                productName={ProductsData.productName}
                productCost={ProductsData.productCost} 
                Location={ProductsData.Location}  />

            </Col>

          ))}

      </Container>

    </>
  );
};

export default ProductsSection;