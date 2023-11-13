import React from 'react'

function AnswerDiv({quizz,showAnswer}) {
  return (
    <div>
        {showAnswer && (
          <div className="answer-div">
            <p>Correct Answer: {quizz.answerExplain}</p>
          </div>
        )}
    </div>
  )
}

export default AnswerDiv
