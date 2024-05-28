import React from "react";
import memesData from "./memesData";

export default function InputFields () {
    
    const getMemeImage = () => {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        return url;
    }

    return(
        <main>
            <form className="form">
                <div>
                    <label htmlFor= "top-text">Top Text</label>
                    <input id="top-text" type= "text" placeholder="Shut up" className="form--input"/>
                </div>
                <div>
                    <label htmlFor="bottom-text">Bottom Text</label>
                    <input id="bottom-text" type= "text" placeholder="and take my money" className="form--input"/>
                </div>
                
                <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
            </form>
        </main>

    )
}