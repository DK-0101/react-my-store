import React from "react";
import Itemcard from "./Itemcard";
import data from "./data";
import "./style.css"

const Home = () => {
    return (
        <>
        <div className="allthings">
          <h1 className="text-center mt-3" id="titulo">Drinks Store</h1>
          <section className="py-4 container" id="section">
            <div className="row justify-content-center">
              {data.productData.map((item, index)=> {
                  return (
                    <Itemcard 
                    img={item.img} 
                    title={item.title} 
                    desc={item.desc} 
                    price={item.price} 
                    item={item} 
                    key={index}/>
                  )
              })}


            </div>
          </section>
          </div>
        </>
    )
}

export default Home;