import "./App.css";
import React from "react";
import Home from "./components/Home";
import Selectquiz from "./components/Selectquiz";
import Quiz from "./components/Quiz";
import Submit from "./components/Submit";
import { nanoid } from "nanoid/non-secure";
import { decode } from "html-entities";
import ids from "./components/Ids.js";
import tinycolor from "tinycolor2";

function App() {
  console.log("App initialized");
  const [submitState, setSubmitState] = React.useState(false);
  const [displayHome, setDisplayHome] = React.useState(true);
  const [displayCategory, setDisplayCategory] = React.useState(false);
  const [displayQuiz, setDisplayQuiz] = React.useState(false);
  const [quizUrl, setQuizUrl] = React.useState("");
  const [quizData, setQuizData] = React.useState([]);
  const [answerData, setAnswerData] = React.useState([]);
  const [submitAnswerData, setSubmitAnswerData] = React.useState([]);
  const [optionsList, setOptionsList] = React.useState([]);
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    fetch(quizUrl)
      .then((res) => res.json())
      .then((data) => {
        setQuizData(data.results);
        // setAnswerData(data.results.map((answer) => answer.correct_answer));
        data.results.forEach((el) => {
          let answers = [...el.incorrect_answers, el.correct_answer];
          let options = _.shuffle(answers);
          options = options.map((ot) => {
            return decode(ot, { level: "html5" });
          });

          setOptionsList((prev) => [...prev, options]);
          setAnswerData((pre) => [...pre, el.correct_answer]);
        });
      });
  }, [quizUrl]);
  function resetAppState() {
    setSubmitState(false);
    setDisplayHome(true);
    setDisplayCategory(false);
    setDisplayQuiz(false);
    setQuizUrl("");
    setQuizData([]);
    setAnswerData([]);
    setSubmitAnswerData([]);
    setOptionsList([]);
    setScore(0);
  }
  function handleChange(event) {
    setSubmitAnswerData((prev) => {
      const updatedData = prev.map((item) => {
        if (item.id === event.target.name) {
          return { id: item.id, value: event.target.value };
        }
        return item;
      });
      if (!updatedData.some((item) => item.id === event.target.name)) {
        updatedData.push({ id: event.target.name, value: event.target.value });
      }
      return updatedData;
    });
  }
  const labels = document.querySelectorAll("label");
  React.useEffect(() => {
    labels.forEach((label) => {
      const computedStyle = window.getComputedStyle(label);
      answerData.forEach((answer, indexAns) => {
        submitAnswerData.forEach((answerData, indexSub) => {
          if (label.textContent === answer && answerData.value === answer) {
            label.classList.add("correct-answer");
            return; // Use 'return' instead of 'break' to exit the loop
          } else {
            if (
              computedStyle.backgroundColor ===
              tinycolor("#d6dbf5").toRgbString()
            ) {
              label.classList.add("incorrect-answer");
            } else {
              if (
                label.parentNode.id === answerData.id &&
                label.classList.contains("correct-answer") === false
              ) {
                label.style.opacity = 0.5;
              }
            }
          }
        });

        labels.forEach((i) => {
          if (i.textContent === answer) {
            i.classList.add("correct-answer");
            return;
          }
        });
      });
    });
  }, [submitState]);

  function submitQuiz() {
    answerData.forEach((val) => {
      submitAnswerData.forEach((sub) => {
        if (sub.value === val) {
          setScore((prev) => prev + 1);
        }
      });
    });
  }

  return (
    <div className="app-container">
      <header>
        <div className="top-blob"></div>
        {displayQuiz && <h1 className="head-container">Quizzical</h1>}
      </header>
      <main className="app-main">
        {displayHome && (
          <Home
            setHomeState={setDisplayHome}
            setCategoryState={setDisplayCategory}
            setQuizState={setDisplayQuiz}
          />
        )}
        {displayCategory && (
          <Selectquiz
            setHomeState={setDisplayHome}
            setCategoryState={setDisplayCategory}
            setQuizState={setDisplayQuiz}
            setQuizUrl={setQuizUrl}
          />
        )}
        {displayQuiz &&
          quizData.map((data, index) => {
            return (
              <Quiz
                setHomeState={setDisplayHome}
                setCategoryState={setDisplayCategory}
                setQuizState={setDisplayQuiz}
                question={decode(data.question, { level: "html5" })}
                options={optionsList[index]}
                handleChange={handleChange}
                key={index}
                id={ids[index]}
              />
            );
          })}
      </main>
      <footer>
        <div className="bottom-blob"></div>
        {displayQuiz && (
          <Submit
            setHomeState={setDisplayHome}
            setCategoryState={setDisplayCategory}
            setQuizState={setDisplayQuiz}
            setSubmitState={setSubmitState}
            submitState={submitState}
            resetAppState={resetAppState}
            score={score}
            submitQuiz={submitQuiz}
            answerData={answerData}
            submitAnswerData={submitAnswerData}
          />
        )}
      </footer>
    </div>
  );
}
export default App;
