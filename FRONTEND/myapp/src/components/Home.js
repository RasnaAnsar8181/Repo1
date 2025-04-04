import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
       return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <h3>Not created an</h3> 
                            <h3>account then SIGN UP</h3>
                            <br></br>
                            <Button onClick={()=>navigate('/SignUp')}>SIGNUP</Button>
                        </Col>
                        <Col>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <h3>Already have an</h3> 
                            <h3>account then SIGN IN</h3>
                            <br></br>
                            <Button onClick={()=>navigate('/SignIn')}>SIGNIN</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
  )
}

export default Home