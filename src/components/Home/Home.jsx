import React from "react";
import "./Home.css";
import Product from "./Product/Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
          className="home__bgImage"
        />
        <div className="home__productContainer">
          <div className="home__row">
            <Product
              id="12321341"
              title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
              price={11.96}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
            <Product
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.0}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="4903850"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={199.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            <Product
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="data:image/jpeg;base64,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"
            />
            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="90829332"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
