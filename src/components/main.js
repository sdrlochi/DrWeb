import React, { useState } from "react";
import './style.css'

const Main=()=>{
    const [imgUrl,setUrl]=useState("https://cdn2.thecatapi.com/images/DZba-eH_4.jpg");
    const callImg=()=>{
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(res=>res.json())
        .then(data=>setUrl(data[0].url))
    }
    return(
        <>
        <div div className="container">
            <div className="box">
                <h2>Enjoy the kitty</h2><br></br>
                <img src={imgUrl}></img><br></br>
                <button onClick={()=>callImg()}>Change Image</button>

            </div>

        </div>
        </>
    )
}
export default Main;