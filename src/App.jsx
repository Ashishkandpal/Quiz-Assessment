// App.js
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Top from "./components/Top";
import Question from "./components/Question";
import Options from "./components/Options";
import quizzes from "./components/QuizData";
import AnswerDiv from "./components/AnswerDiv";
import Score from "./components/Score";

function App() {
  const currIndex = parseInt(localStorage.getItem("currQuestion"), 10) || 0;
  const [currQuestion, setCurrQuestion] = useState(currIndex);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const currIndex = parseInt(localStorage.getItem("currQuestion"), 10);
    setCurrQuestion(currIndex);
  }, []);

  useEffect(() => {
    localStorage.setItem("currQuestion", currQuestion);
  }, [currQuestion]);

  const handleCheck = () => {
    // Toggle the visibility of the answer div
    setShowAnswer((prevShowAnswer) => !prevShowAnswer);
  };

  const handleFinish = () => {
    setCurrQuestion(0);
    setScore(0);
    localStorage.removeItem("flaggedQuestions");
  };

  const handleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.style.backgroundColor = "rgba(0, 0, 0, 0.93";
      body.style.color = "rgba(255, 255, 255, 0.799)";
    } else {
      body.style.backgroundColor = "rgba(255, 255, 255, 0.799)";
      body.style.color = "rgba(0, 0, 0, 0.93";
    }
  }, [darkMode]);

  return (
    <Container className="my-3">
      <div className="heading">
        <h1>let's play quiz</h1>
      </div>
      <div className="main-container">
        <div>
          <Row className="my-3">
            <Col>
              <Question
                qNo={quizzes[currQuestion].questionNo}
                text={quizzes[currQuestion].question}
              />
            </Col>
          </Row>
          <Row className="last-div">
            <Col>
              <Options
                currQuestion={currQuestion}
                quizz={quizzes[currQuestion]}
                setCurrQuestion={setCurrQuestion}
                setScore={setScore}
                setShowAnswer={setShowAnswer}
                totalQuiz={quizzes.length}
                handleFinish={handleFinish}
              />
              <AnswerDiv
                quizz={quizzes[currQuestion]}
                showAnswer={showAnswer}
              />
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <Score score={score} />
                  </Card.Title>
                  <Card.Text>
                    <p>Current Question/Total Questons</p>
                    <h4>
                      {currQuestion + 1}/{quizzes.length}
                    </h4>
                  </Card.Text>
                  <Button variant="success" onClick={handleFinish}>
                    Finish
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col>
              <Top
                setCurrQuestion={setCurrQuestion}
                currQuestion={currQuestion}
                totalQuiz={quizzes.length}
                handleCheck={handleCheck}
                darkMode={darkMode}
                handleDarkMode={handleDarkMode}
                handleFinish={handleFinish}
              />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default App;
