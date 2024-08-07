import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {rightImg, watchImg} from '../utils'
import Videocarousel from './Videocarousel';

const Highlights = () => {
  useGSAP(()=>{
    gsap.to("#title", {opacity: 1, y:-50, delay: 1.5})
    gsap.to(".link", {opacity: 1, y:-50, delay: 1.5, duration:1, stagger: 0.25})
  })
  return (
    <>
      <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
        <div className="screen-max-width">
          <div className='mb-12 w-full justify-between items-end md:flex'>
            <h1 id='title' className='section-heading'>Get the highlights.</h1>

            <div className='flex  flex-wrap gap-5 items-end'>
              <p className='link'>Watch the film
                <img src={watchImg} alt="watch" className='ml-2'/>
              </p>
              <p className='link'>Watch the event
                <img src={rightImg} alt="watch" className='ml-2'/>
              </p>
            </div>
          </div>

          <Videocarousel/>
        </div>
      </section>
    </>
  )
}

export default Highlights