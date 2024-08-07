import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'

const Navbar = () => {
  return (
    <>
        <header>
            <nav className='flex justify-between px-4 md:justify-evenly w-full items-center py-5'>
                <img src={appleImg} alt="apple" className='w-4'/>
                <div className='hidden md:flex'>
                    {navLists.map((item)=>{
                        return <div key={item} className='mx-5 text-gray hover:text-white transition-all'>
                            {item}
                        </div>
                    })}
                </div>
                <div className='flex gap-5'>
                    <img src={searchImg} alt="search" className='w-4'/>
                    <img src={bagImg} alt="bag" className='w-4'/>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar