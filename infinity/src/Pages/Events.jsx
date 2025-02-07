import react , { useState , useEffect } from "react";
import slides from "../data/slides.json"
import "./Events.css";
import  I1 from "../data/1.jpeg"; //import every image in react
import  I2 from "../data/2.jpeg";
import I3 from "../data/3.jpeg";

import { BsArrowLeftCircleFill ,BsArrowRightCircleFill } from 'react-icons/bs';

const Events = () => {
    const [present,setPresent]=useState(0); //present image state

    const images=[I1,I2,I3]; //add every image object here
    const data=slides.slides;
    // Whole window
    return  <div className="main">
        {/* carousel */}
        <div className="container">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={()=>{
            setPresent((present+data.length-1)%data.length);
        }}/>
       {data.map((item,index)=> (
            <a href= {`#${index}`} ><img 
            src={images[index]}
            key={index}
            width='600vw'
            height='100%'
            className={(index===present)?"slide":"slide-i"}
            /></a>
        ))} 
        <span className="indicators">
            {data.map((_,index)=>(
                 <button  className={(index===present)?"indicator":"indicator-i"} onClick={()=>{
                    setPresent(index);
                 }} key={index}></button>
            ))}
        </span>
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={()=>{
            setPresent((present+1)%data.length);
        }}/>
        </div>
        <div>
            {/* information window */}
            {data.map((item,index)=>(
                <div id={`${index}`} className="container-2">
                    <h1 id="heading">{item.title}</h1><br/>
                    <p className="paragraph" style={{ whiteSpace: "pre-wrap" }}>{item.details}</p>
                </div>
            ))}
        </div>
    </div>
}

export default Events;