// Top.js
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function Top({
  setCurrQuestion,
  currQuestion,
  totalQuiz,
  handleCheck,
  darkMode,
  handleDarkMode,
  handleFinish,
}) {
  const [isFlagged, setIsFlagged] = useState(false);

  const handleFlag = () => {
    const flaggedQuestions =
      JSON.parse(localStorage.getItem("flaggedQuestions")) || [];

    if (!flaggedQuestions.includes(currQuestion)) {
      flaggedQuestions.push(currQuestion);
      setIsFlagged(true);
    }

    localStorage.setItem("flaggedQuestions", JSON.stringify(flaggedQuestions));
  };

  const handleBack = () => {
    const newCurrQuestion = Math.max(0, currQuestion - 1);
    setCurrQuestion(newCurrQuestion);
    localStorage.setItem("currQuestion", newCurrQuestion);
    updateFlaggedStatus(newCurrQuestion);
  };

  const handleNext = () => {
    if (currQuestion === 5) {
      handleFinish();
      return;
    }
    setCurrQuestion(currQuestion + 1);
    localStorage.setItem("currQuestion", currQuestion + 1);
    updateFlaggedStatus(currQuestion + 1);
  };

  const updateFlaggedStatus = (questionIndex) => {
    const flaggedQuestions =
      JSON.parse(localStorage.getItem("flaggedQuestions")) || [];
    setIsFlagged(flaggedQuestions.includes(questionIndex));
  };

  useEffect(() => {
    const currIndex = localStorage.getItem("currQuestion");
    setCurrQuestion(parseInt(currIndex, 10) || 0);
    updateFlaggedStatus(currIndex);
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  useEffect(() => {
    updateFlaggedStatus(currQuestion);
  }, [currQuestion]); // Update flagged status when currQuestion changes

  return (
    <Container>
      <Row className="header-box">
        <Col xs={4} sm={4}>
          <div className="cursor-ptr" onClick={handleBack}>
            <img className="img-cls" src="/previous.png" alt="previous" />
            <span>back</span>
          </div>
        </Col>
        <Col xs={4} sm={4}>
          <div
            className="cursor-ptr"
            onClick={handleNext}
            disabled={totalQuiz === currQuestion + 1}
          >
            <img className="img-cls" src="/next.png" alt="next" />
            <span>next</span>
          </div>
        </Col>
        <Col xs={2} sm={2}>
          <div className="cursor-ptr" onClick={handleFlag}>
            <img
              className="img-cls"
              src={isFlagged ? "/flag-filled.png" : "/flag.png"}
              alt=""
            />
            <span>flag</span>
          </div>
        </Col>

        <Col xs={2} sm={2}>
          <div className="cursor-ptr" onClick={handleCheck}>
            <img className="img-cls" src="/checked.png" alt="" />
            <span>check</span>
          </div>
        </Col>
        <Col xs={4} sm={4}>
          <div className="cursor-ptr" onClick={handleDarkMode}>
            <img
              className="img-cls"
              src={darkMode ? "/moon.png" : "/sun.png"}
              alt=""
            />
            <span>theme</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Top;
