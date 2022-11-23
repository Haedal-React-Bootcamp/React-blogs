import React, {useState} from "react";
import './App.css'

function Onepost({name, when}){

    let [articleName, changeArticleName] = useState(name); 
    let [thumbs, setThumbs] = useState(0);

    return(
        <div className = 'list'>
            <h3>{articleName} <span onClick = {() => setThumbs(thumbs + 1)}>👍</span> {thumbs}</h3> 
            <p>{when}</p>
            <hr/>
        </div>
    )
}

export default Onepost;