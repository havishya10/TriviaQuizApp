export default function SubmitButton(props) {
  console.log("Submit component rendered");

  function handlePlayAgain() {
    props.resetAppState(); // Call the function to reset state in App.jsx
  }
  function submitQuiz() {
    props.setSubmitState((prev) => !prev);
    console.log(props.submitAnswerData);
    console.log(props.answerData);
    props.submitQuiz();
  }
  return (
    <div className="score-container">
      {props.submitState && <h1>Your Score: {props.score}/10 </h1>}
      {props.submitState && (
        <button
          className="submit-quiz-btn"
          type="submit"
          onClick={handlePlayAgain}
        >
          Play Again
        </button>
      )}
      {props.submitState === false && (
        <button className="submit-quiz-btn" type="submit" onClick={submitQuiz}>
          Submit Quiz
        </button>
      )}
    </div>
  );
}
