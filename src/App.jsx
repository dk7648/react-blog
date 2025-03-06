/* esLint-disable */
import { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬독학"]);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState([false, false, false]);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>BLOG</h4>
      </div>
      {title.map(function (t, index) {
        return (
          <div className="list" key={index}>
            <h4
              onClick={() => {
                let copy = [...modal];
                copy[index] = !copy[index];
                setModal(copy);
              }}
            >
              {" "}
              {index + 1}: {t}
              <span
                onClick={() => {
                  let copy = [...like];
                  copy[index] += 1;
                  setLike(copy);
                }}
              >
                ❤️
              </span>{" "}
              {like[index]}
            </h4>
            <p>2월 17일 발행</p>
            {modal[index] ? <Modal title={title} setTitle={setTitle} i={index} /> : null}
          </div>
        );
      })}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.i]}</h4>
      <p>{props.date}</p>
      <p>{props.content}</p>
      <button onClick={()=>{
        let copy = [...props.title]
        copy[props.i] = "여자 코트 추천"
        props.setTitle(copy)
      }}>글수정</button>
    </div>
  );
}

export default App;
