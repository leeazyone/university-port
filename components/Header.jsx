import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <nav className='bg-gray-100 py-5 px-10'>
        <div className='flex items-center justify-between container'>
          <div className='flex items-center'>
            <Link href='/'>
              <div className='text-lg text-blue'>JIWON's Portfolio</div>
            </Link>
          </div>
          <div className='flex items-center font-mono'>
            <Link href='/' className='text-gray-400 hover:text-white mr-4'>
              Home
            </Link>
            <Link href='/about' className='text-gray-400 hover:text-white mr-4'>
              About
            </Link>
            <Link
              href='/projects'
              className='text-gray-400 hover:text-white mr-4'
            >
              Projects
            </Link>
            <Link
              href='/contact'
              className='text-gray-400 hover:text-white mr-4'
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
