
# Quizzical

Quizzical is a React-based quiz application that allows users to select quiz categories and difficulties, answer questions, and view their scores. The app fetches quiz data from the Open Trivia Database API and provides a dynamic, interactive user experience.

## Features

- **Category and Difficulty Selection**: Choose from a wide range of categories and difficulty levels.
- **Dynamic Quiz Generation**: Fetch quiz questions and options from the Open Trivia Database API.
- **Interactive Quiz Interface**: Answer questions and see immediate feedback on your answers.
- **Score Tracking**: View your score after submitting the quiz and reset the quiz to play again.

## Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/havishya10/TriviaQuizApp.git
    ```

2. **Navigate to the Project Directory:**

    ```bash
    cd TriviaQuizApp
    ```

3. **Install Dependencies:**

    ```bash
    npm install
    ```

4. **Start the Development Server:**

    ```bash
    npm start
    ```


## Usage

1. **Home Screen**: On initial load, you will see the home screen with a "Get Started" button.
2. **Select Quiz**: Click "Get Started" to navigate to the category and difficulty selection screen. Choose your preferences and start the quiz.
3. **Quiz Interface**: Answer the questions and submit your answers.
4. **Score Submission**: After submitting the quiz, view your score and click "Play Again" to retake the quiz or "Start Quiz" to begin a new quiz with different settings.

## API Usage

The app fetches quiz questions from the Open Trivia Database API. The URL format for fetching quiz data is:

  ```bash
  https://opentdb.com/api.php?amount=10&category={CATEGORY_ID}&difficulty={DIFFICULTY}&type=multiple
  ```

## Acknowledgments

- [Open Trivia Database](https://opentdb.com/) for providing the trivia questions API.
- [tinycolor2](https://github.com/maskedcoder/tinycolor) for color manipulation.
- [html-entities](https://www.npmjs.com/package/html-entities) for decoding HTML entities.



