import React from 'react'
import { Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap'
import words from '../words'

const HomeScreen = () => {
  return (
    <>
      {/* This is the control area */}
      <Form>
        <Form.Group className="mb-3" controlId="method">
          <Form.Label>Method</Form.Label>
          <Form.Select>
            <option>Select one method</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="length">
          <Form.Label>Password Length</Form.Label>
          <Form.Control
            type="number"
            placeholder="Length"
            pattern="[0-9]+"
          ></Form.Control>
        </Form.Group>
        <Button variant="outline-primary" type="submit">
          Generate
        </Button>
      </Form>
      <div className="py-2 text-center">
        <Spinner animation="border" variant="danger"></Spinner>
      </div>
      <div className="py-5">
        <Alert variant="success">this is the password</Alert>
        <Alert variant="warning">Please check your data</Alert>
        <Alert variant="danger">Error with the engine</Alert>
      </div>
    </>
  )
}

export default HomeScreen
