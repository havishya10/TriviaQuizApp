import React from "react";
export default function Selectquiz(props) {
  console.log("Selectquiz component rendered");
  function setState() {
    console.log("category component rendered");
    const catId = document.getElementById("triviaCategory").value;
    const diffId = document.getElementById("difficulty").value;
    const url = `https://opentdb.com/api.php?amount=10&category=${catId}&difficulty=${diffId}&type=multiple`;
    props.setQuizUrl(url);
    props.setQuizState((prevState) => !prevState);
    props.setCategoryState((prevState) => !prevState);
  }

  return (
    <div className="selectquiz-container" id="selectQuizId">
      <div>
        <h2>Select Category: </h2>
        <select name="triviaCategory" id="triviaCategory">
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals & Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science & Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime & Manga</option>
          <option value="32">Entertainment: Cartoon & Animations</option>
        </select>
      </div>
      <div>
        <h2>Select Difficulty: </h2>

        <select className="custom-select" name="difficulty" id="difficulty">
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button className="start-quiz-btn" onClick={setState}>
        Start Quiz
      </button>
    </div>
  );
}
