import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
    const monitorWidth = ()=>{
        console.log("triggered")
        if(window.innerWidth < 760){
            setVideoSrc(smallHeroVideo)
        }
        else{
            setVideoSrc(heroVideo)
        }
    }
    
    useEffect(() => {
      window.addEventListener("resize", monitorWidth);
    
    //   return () => {
    //     window.removeEventListener("resize", monitorWidth)
    //   }
    }, [])
    
    useGSAP(()=>{
        gsap.to("#hero-text", {opacity: 1, delay:1.5})
        gsap.to("#cta", {opacity: 1, y:-50, delay: 1.5})
    })

    

  return (
    <>
        <section className='nav-height w-full bg-black'>
            <div className='h-5/6 w-full flex-center flex-col'>
                <p id='hero-text' className='hero-title'>iPhone 15 pro</p>
                <div className='md:w-10/12 w-9/12'>
                    <video autoPlay muted className='pointer-events-none' playsInline={true} key={videoSrc}>
                        <source src={videoSrc} type='video/mp4'/>
                    </video>
                </div>
            </div>
            <div id='cta' className='flex flex-col items-center opacity-0 traslate-y-20'>
                <a href="#highlights" className='btn'>Buy</a>
                <p className='font-normal text-xl'>From $199/month or $1199</p>
            </div>
        </section>
    </>
  )
}

export default Hero