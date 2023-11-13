import { Button } from 'react-bootstrap'
import React from 'react'

function Score({score}) {
  return (
    <div>
    <Button variant="warning" disabled>Score:{score}</Button>
    </div>
  )
}

export default Score