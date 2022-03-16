/* eslint-disable*/
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [title, titleChange] = useState([
    "밥먹기",
    "공부하기",
    "피방가기",
    "아이디어짜기",
  ]);
  let [like, likeChange] = useState([0, 0, 0, 0]);
  let [modal, modalChange] = useState(false);
  let [selcetNum, selectNumChange] = useState(0);
  let [inputTmp, inputTmpChange] = useState("");

  function likeChangetmp(i) {
    let likeTmp = [...like];
    likeTmp[i]++;
    likeChange(likeTmp);
  }
  function titleAdd() {
    let titleTmp = [...title];
    titleTmp.unshift(inputTmp);
    titleChange(titleTmp);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 BLOG</div>
      </div>

      {title.map((a, i) => {
        let tmp = 0;
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => {
                selectNumChange(i);
              }}
            >
              {a}{" "}
              <span
                onClick={() => {
                  likeChangetmp(i);
                }}
              >
                👍 {like[i]}
              </span>
            </h3>
            <p>2월 17일 등록</p>
            <hr />
          </div>
        );
      })}
      <div className="publish">
        <input
          type="text"
          onChange={(e) => {
            inputTmpChange(e.target.value);
          }}
        />
        <button onClick={titleAdd}>저장</button>
      </div>
      <button>삭제</button>
      <button
        onClick={() => {
          modalChange(!modal);
        }}
      >
        열고 닫기
      </button>

      {modal === true ? (
        <Modal tmp={title} tmp1={selcetNum} tmp2={inputTmp} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.tmp[props.tmp1]}</h2>
      <p>날짜</p>
      <p>{props.tmp2}</p>
    </div>
  );
}
export default App;
