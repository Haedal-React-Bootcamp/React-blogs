import React from 'react';
import Onepost from './Onepost';
import Profile from './Profile';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className = "black_nav">
        <div>남동우's 개발 Blog</div>
      </div>

      <Profile/><br/>
      
      <br/><br/><br/><br/><br/>
      <h1> 🚀 게시글 리스트 🚀 </h1>
      
      <Onepost name="해달" when="11월 11일"/>
      <Onepost name="안녕하세요" when="11월 10일"/>
      <Onepost name="반갑습니다" when="11월 10일"/>
    </div>
  );
}

export default App;
