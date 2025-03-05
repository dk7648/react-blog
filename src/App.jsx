import { useState } from 'react';
import './App.css'

function App() {
  let post = '강남 우동 맛집';
  let [글제목1, 함수1] = useState('남자 코트 추천');
  let [글제목2, 함수2] = useState('강남 우동 맛집');
  let [글제목3, 함수3] = useState('파이썬독학');
  return (
    <div className="App">
      <div className="black-nav">
        <h4>BLOG</h4>
      </div>
      <div className="list">
          <h4>{글제목1}</h4>
          <p>2월 17일 발행</p>
      </div>
      <div className="list">
          <h4>{글제목2}</h4>
          <p>2월 17일 발행</p>
      </div>
      <div className="list">
          <h4>{글제목3}</h4>
          <p>2월 17일 발행</p>
      </div>

      <h4>{ post }</h4>
    </div>
  )
}

export default App
