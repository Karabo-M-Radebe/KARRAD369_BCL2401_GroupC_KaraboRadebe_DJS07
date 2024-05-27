import React from "react";

export default function InputFields () {
    return(
        <main>
            <form className="form">
                <div>
                    <label>Top Text</label>
                    <input type= "text" placeholder="Shut up" className="form--input"/>
                </div>
                <div>
                    <label>Bottom Text</label>
                    <input type= "text" placeholder="and take my money" className="form--input"/>
                </div>
                
                <button className="form--button">Get a new meme image</button>
            </form>
        </main>

    )
}