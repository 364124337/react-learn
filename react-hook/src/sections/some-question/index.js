import React, { useState } from "react";
import Question0 from "./question-0";
import Question1 from "./question-1";
import Question2 from "./question-2";
import "./style.css";

function SomeQuestion() {
  const initialState = {
    question0: false,
    question1: false,
  };
  const list = [
    "如何保存上一个状态？",
    "class中可以使用hooks吗？",
    "从依赖项列表中省略函数是否安全？",
    "如何实现shouldComponentUpdate？",
    "在渲染的时候，由于需要创建函数，hooks是否更缓慢？",
  ];

  const [questions, setQuestions] = useState(initialState);
  return (
    <>
      <ul className="some-question">
        {list.map((item, index) => (
          <li
            onClick={() => {
              setQuestions({
                ...initialState,
                [`question${index}`]: !questions[`question${index}`],
              });
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="code-erea">
        {questions.question0 && <Question0 />}
        {questions.question1 && <Question1 />}
        {questions.question2 && <Question2 />}
      </div>
    </>
  );
}

export default SomeQuestion;
