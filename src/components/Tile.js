import React from "react"

export default function Tile(props){
    return(
        <div className="tile">
            <img src={props.img}/>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}