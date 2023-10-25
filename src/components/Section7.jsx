import React from 'react'
import { Container } from 'react-bootstrap'
import solana from '../assets/images/solana.png'
import unreal from '../assets/images/unreal-engine.png'

const Section7 = () => {
  return (
    <div className='bg-dots'>
        <Container className=' py-custom custom-container'>
               <div className='d-flex justify-content-center flex-column flex-md-row align-items-center'>
                <img className='w-80' src={solana} alt="#" />
                <img className='ps-0 w-52 ps-md-5 pt-4 pt-md-0' src={unreal} alt="#" />
               </div>
        </Container>
    </div>
  )
}

export default Section7