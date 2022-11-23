import React from "react";
import './App.css'

function VisibleLogo(){

    let githubLogo = "images/github_logo.png"
    let instagramLogo = "images/instagram_logo.png"

    return(
        <>
            <a href = "https://github.com/WhalesBob">
            <img className="smallLogo" src= {githubLogo}/>
            </a>
            <a href = "https://www.instagram.com/dong__u._.nm">
            <img className="smallLogo" src= {instagramLogo}/>
            </a>
            
        </>
    )
}

export default VisibleLogo;