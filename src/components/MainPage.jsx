import axios from "axios";
import React, { useEffect,useState } from "react";
import CardComponent from "./CardComponent";
import Header from "./Header";

const MainPage = (props) => {

    const {data,setLimit} = props;

    const handleButton = () => {
        setLimit((oldState) => oldState + 20)
    }

  return (
    <>
    <Header/>
    <section>
    <div className='grid'>
        <div className='grid__pokemon'>
        {
          data.map(poke=> (           
            <CardComponent key={poke.name} pokemon={poke}></CardComponent>
          ))
        }
        </div>
        {
          (data.length >= 20) && 
            <div className="grid__wrapper-button">
              <button className='grid__button' type='button' onClick={handleButton}>Show more</button>
            </div>
        }
      </div>
    </section>
    </>
  )
};

export default MainPage;