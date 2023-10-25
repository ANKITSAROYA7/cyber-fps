import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap'
import { Accrdnradius, Accrdnradius_bttm} from './icons';

const Section6 = () => {
    return (
        <div className='bg-black pt-4 pb-5 '>
            <Container className='pb-lg-5 pt-xl-4 Container-custom pb-5'>
            <h1 className=' ff-audio fw-400  fs-64 text-center text-white m-0 pt-4 position-relative team-line1'>Faq</h1>
                <Accordion className='mx-auto pb-xl-5 mt-lg-5 pt-lg-5 pt-4'>
                    <Accordion.Item eventKey="0">
                        <Accrdnradius_bttm />
                        <Accordion.Header  className=' fs-24 fw-600  ff-montserrat '>Dui lectus auctor fermentum potentienim. ?</Accordion.Header>
                        <Accrdnradius />
                        <Accordion.Body>
                            Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo eget tellus nullam magna adipiscing facilisis a, nulla.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='mt-4'>
                        <Accrdnradius_bttm />
                        <Accordion.Header  className=' fs-24 fw-600  ff-montserrat '>Placerat eros faucibus aliquam nunc, mattis</Accordion.Header>
                        <Accrdnradius />
                        <Accordion.Body>
                            Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo eget tellus nullam magna adipiscing facilisis a, nulla.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='mt-4'>
                        <Accrdnradius_bttm />
                        <Accordion.Header  className=' fs-24 fw-600  ff-montserrat '>Lorem nunc nunc risus viverra a</Accordion.Header>
                        <Accrdnradius />
                        <Accordion.Body>
                            Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo eget tellus nullam magna adipiscing facilisis a, nulla.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className='mt-4'>
                        <Accrdnradius_bttm />
                        <Accordion.Header  className=' fs-24 fw-600  ff-montserrat '>In aliquet fusce id dictumst id</Accordion.Header>
                        <Accrdnradius />
                        <Accordion.Body>
                            Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo eget tellus nullam magna adipiscing facilisis a, nulla.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className='mt-4'>
                        <Accrdnradius_bttm />
                        <Accordion.Header  className=' fs-24 fw-600  ff-montserrat '>Elementum pellentesque nisi, sagittis, </Accordion.Header>
                        <Accrdnradius />
                        <Accordion.Body>
                            Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo eget tellus nullam magna adipiscing facilisis a, nulla.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    )
}

export default Section6