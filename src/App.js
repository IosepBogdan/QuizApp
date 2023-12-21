import React, { useState } from 'react';
import './App.css';
import questions from "./Helper/Questions";

function App() {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [showStartButton, setShowStartButton] = useState(true);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [remainingQuestions, setRemainingQuestions] = useState(0);
  const [score, setScore] = useState(0);
  
  function startGame() {
    setShuffledQuestions(questions.sort(() => Math.random() - 0.5));
    setCurrentQuestionIndex(0);
    setShowStartButton(false);
    setRemainingQuestions(questions.length);
    setCorrectAnswers(0);
    setWrongAnswers(0)
    setScore(0);
  }

  const setNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  

  function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.getAttribute('data-correct') === 'true';
    
    if (correct) {
      setCorrectAnswers(correctAnswers + 1);
      setScore(score + 2);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }
    
    setRemainingQuestions(remainingQuestions - 1);
    
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      setNextQuestion();
    } else {
      setShowStartButton(true);
    }
  }

  const showQuestion = (question) => {
    return (
        <div>
          <div id="question">{question.question}</div>
          <div id="answer-buttons" className="btn-grid">
            {question.answers.map((answer, index) => (
                <button
                    key={index}
                    className="btn"
                    onClick={(e) => selectAnswer(e)}
                    data-correct={answer.correct}
                >
                  {answer.text}
                </button>
            ))}
          </div>
        </div>
    );
  };

  return (
      <div className="container">
        <div className="show-score">
          <span className="remaining-questions">{remainingQuestions}</span>
          <span className="correct-answers">{correctAnswers}</span>
          <span className="wrong-answers">{wrongAnswers}</span>
          <div className="score">Score: {score}</div>
        </div>
        <div id="question-container" className={currentQuestionIndex === -1 ? 'hide' : ''}>
          {currentQuestionIndex !== -1 && !showStartButton && showQuestion(shuffledQuestions[currentQuestionIndex])}
        </div>
        <div className="controls">
          {showStartButton && (
              <button id="start-btn" className="start-btn btn" onClick={startGame}>
                Start
              </button>
          )}
        </div>
      </div>
  );
}
export default App;

