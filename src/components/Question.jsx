import React from 'react'
import { Container, Row } from 'react-bootstrap'

function Question({qNo,text}) {
  return (
    <Container>
        <Row>
            <div>
                <h3><span>{qNo}. </span>{text}</h3>
            </div>
        </Row>
    </Container>
  )
}

export default Question