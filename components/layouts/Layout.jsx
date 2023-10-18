import React from 'react'
import Footer from './Footer';
import Header from './Header';
import { Container, Row, Col } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

const Layout = ({ children }) => {

    return (
        <><ToastContainer />
            <Container fluid>

                <Row className='justify-content-center'>
                    <Col lg={11} xl={9}>
                        <Header />
                        <div className='d-flex flex-column min-vh-100'>
                            {children}
                        </div>
                    </Col>
                </Row>
            </Container>
                    <Footer />
        </>
    )
}
export default Layout;