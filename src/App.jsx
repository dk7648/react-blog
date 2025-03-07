/* esLint-disable */
import { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState(["첫 번째 게시글입니다.", "공지사항입니다.", "안녕하세요!!!"]);
  let [content, setContent] = useState(["안녕하세요 첫 게시글 입니다.", "무분별한 게시글 작성 부탁드립니다.", "ㅎㅇㅎㅇ"]);
  let [like, setLike] = useState([3, 2, 7]);
  let [modal, setModal] = useState([false, false, false]);
  let [text, setText] = useState("");

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
              
              {index + 1}: {t}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...like];
                  copy[index] += 1;
                  setLike(copy);
                }}
              >
                ❤️
              </span>
              {like[index]}
            </h4>
            <p>3월 6일 발행</p>
            <button onClick={() => {
              let newTitle = [...title]
              newTitle.splice(index,1)
              setTitle(newTitle)
            }}>삭제</button>
            {modal[index] ? <Modal title={title} setTitle={setTitle} content={content} setContent={setContent} i={index} /> : null}
          </div>
        );
      })}

      <input type="text" onChange={(e) => { setText(e.target.value); console.log(text)}}/>
      <button onClick={() => {
        let copy = [...title]
        copy.unshift(text)
        like.unshift(0)
        modal.unshift(false)
        content.unshift("글 생성 테스트")
        setTitle(copy)
      }}>글쓰기</button>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.i]}</h4>
      <p>{props.content[props.i]}</p>
      <button onClick={()=>{
        let copyTitle = [...props.title]
        copyTitle[props.i] = "블라인드 처리 된 게시글입니다."
        props.setTitle(copyTitle)

        let copyContent = [...props.content]
        copyContent[props.i] = "---"
        props.setContent(copyContent)
      }}>비공개처리</button>
    </div>
  );
}

export default App;
