import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Card, Row, Col, Form, Tooltip, OverlayTrigger, Button } from 'react-bootstrap'

import './Join.css'
const Join = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  const renderTooltip = (props) => {
    if (!name || !room) {
      return (<Tooltip id="button-tooltip" {...props}>
        Enter Name And Room
      </Tooltip>)
    } else {
      return (<Tooltip id="button-tooltip" {...props}>
        Let's Chat
      </Tooltip>)
    }
  }
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <Container>
          <Row>
            <Col md={11} xs={11} lg={8} className="mx-auto" >
              <Card className="bg-primary">
                <Card.Body>
                  <h1 className="mt-2 text-white text-center mb-4 header-border">ChatCord</h1>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Room" className="form-control" value={room} onChange={(e) => setRoom(e.target.value)} />
                  </Form.Group>
                  <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 200, hide: 450 }}
                      overlay={renderTooltip}
                    >
                      <Button variant="dark" className="btn-block mt-4 mb-3" type="submit">SIGN IN</Button>
                    </OverlayTrigger>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Join
