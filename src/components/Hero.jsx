import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo_hero from '../assets/images/logo-inherosection.png'
import hero_pic from '../assets/images/hero-pic.png'
import { Container, Row, Col } from 'react-bootstrap'
import nav_logo from '../assets/images/nav-logo.png'
import { Link } from 'react-router-dom';
import { Insta, Twitter, Discord } from './icons';


const Hero = () => {
    return (
        <div className='hero_bg position-relative'>
            <div className='blur-box-tl'></div>
            <div className='blur-box-tr'></div>
            <div className='blur-box-bl'></div>
            <div className='blur-box-br'></div>
            <Container className='custom-container'>
                <nav className='d-flex align-items-center justify-content-between'>
                    <img src={nav_logo} alt="" className='z-5 cursor-pointer'/>
                    <input type="checkbox" id='iconbox' hidden />
                    <ul className='m-0 ps-0 d-flex align-items-center gap-lg-0 gap-5 nav-lg-screen'>
                        <Link className='link-border ff-audio fs-16 fw-400 text-white text-decoration-none mx-2 p-1 position-relative'><span className='nav-tabs-1 px-2'>About</span></Link>
                        <Link className='link-border crypto-straps ff-audio fs-16 fw-400 text-white text-decoration-none mx-2 p-1 position-relative'><span className='nav-tabs-1 px-2'>CryptoStraps</span></Link>
                        <Link className='link-border team-text ff-audio fs-16 fw-400 text-white text-decoration-none mx-2 p-1 position-relative'><span className='nav-tabs-1 px-2'>Team</span></Link>
                        <Link className='link-border faq-text ff-audio fs-16 fw-400 text-white text-decoration-none mx-2 p-1 position-relative'><span className='nav-tabs-1 px-2'>Faq</span></Link>
                        <Link className='link-border ff-audio light-paper-text fs-16 fw-400 text-white text-decoration-none mx-2 p-1 position-relative'><span className='nav-tabs-1 px-2'>Light Paper</span></Link>
                        <span className=' d-flex justify-content-center d-lg-none'>
                            <Twitter />
                            <div className='mx-5'><Insta /></div>
                            <Discord />
                        </span>
                    </ul>
                    <label For="iconbox" className='d-lg-none'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <div className='d-flex d-lg-block  d-none d-lg-flex'>
                        <span  className=' cursor-pointer'> <Twitter className /></span>
                        <span className='mx-2 cursor-pointer'><Insta /></span>
                        <Discord />
                    </div>
                </nav>
                <Row className=' align-items-center '>
                    <Col lg={6} className=' d-flex  justify-content-center text-center text-lg-start justify-content-lg-start'>
                        <div>
                            <img className=' hero-logo-width' src={logo_hero} alt="#" />
                            <p className='ff-audio line-hieght fw-lighter text-white fs-28 '>Web3 Gaming Reimagined</p>
                            <div className='d-flex justify-content-center justify-content-lg-start'>
                                <button className='started_btn ff-audio fw-400  '>Get Started</button>
                                <button className='learn-btn ff-audio fw-400 ms-4  d-none d-sm-flex  '>Learn More</button>
                            </div>

                            <div className='d-flex justify-content-center '>
                                <button className='learn-btn ff-audio fw-400 mt-4 second-btn-sm d-sm-none '>Learn More</button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <img className='w-100' src={hero_pic} alt="#" />

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero