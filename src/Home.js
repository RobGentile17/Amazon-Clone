import React from "react"
import "./Home.css"
import Product from "./Product"


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img 
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB4286842200_.jpg"
          alt=""
        /> 

        <div className="home__row">
        <Product 
            id="6512154145"
            title="Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio*, and an all-new generation of incredible PlayStation® games."
            price={799.99}
            rating={5}
            image="data:image/jpeg;base64,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"
          /> 
          <Product 
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5Litre Glass Bowl"
            price={239.0}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product 
            id="4903850"
            title="SAMSUNG Galaxy Watch Active 2 (40mm, GPS, Bluetooth) Smart Watch with Advanced Health Monitoring, Fitness Tracking, and Long lasting Battery, Pink Gold (US Version)"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product 
            id="23445930"
            title="Amazon Echo (3rd generation) Smart Speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={4}
            image="https:media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product 
            id="3254354345"
            title="New Apple ipad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX386_.jpg"
          />
        </div>

        <div className="home__row">
        <Product 
            id="12321341"
            title="Samsung LC49RG90SSUXEN 49' Curved LED gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" 
            price={1094.98} 
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            
          />
        </div>
      </div>
    </div>
  )
}

export default Home
