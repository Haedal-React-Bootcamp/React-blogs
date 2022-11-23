import React, {useState} from "react";
import VisibleLogo from "./VisibleLogo";
import './App.css'

function Profile(){
    let personalName = "남동우";

    let imageSource = "images/profile_image.jpg";
    let musicRecommend = "https://www.youtube.com/watch?v=J3d5OkPxER4&ab_channel=DJ%ED%8B%B0%EB%B9%84%EC%94%A8";
    let firstInsta = "https://www.instagram.com/dong__u._.nm/";
    let secondInsta = "https://www.instagram.com/whalesbob.__.dev/";

    return(
        <>
            <img className = 'profileImage' src={imageSource}/><br/>
            <VisibleLogo/>
            <p> 이름 : {personalName}</p>
            <p> instagram : <a href={firstInsta}>dong_u._.nm</a>, <a href={secondInsta}>whalesbob.__.dev</a></p>
            <p> 관심분야 : Web Developing(all part)</p> 
            <p> 좋아하는 가수 : 아이유, 태연 </p>
            <p> 요즘 개인적으로 최애하는 노래 : <a href = {musicRecommend}>태연 - When we were young</a></p> 

            <p> 이유 : 개인적으로는 원곡보다 낫다고 생각합니다 ㅎㅎ</p>
        </>
    )
}

export default Profile;