import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'

const projects = () => {
  return (
    <>
      <Header></Header>
      <br></br>
      <br></br>
      <div className='font-mono text-center'>
        <a
          href='https://github.com/leeazyone'
          className='text-blue-500 text-2xl'
        >
          Jiwon's Projects📜
        </a>
        <br></br>
        <br></br>
        <div className='centered-image-container'>
          <img
            src='/img/teampro.png'
            alt='team'
            width={500}
            className='centered-image'
          ></img>
        </div>

        <a
          href='https://www.notion.so/02-3b1b35e89847474b8b68c1825e4e8083'
          alt='team'
        >
          'Shopping mall project'
        </a>

        <div className='centered-image-container'>
          <img
            src='/img/1234.png'
            alt='pro'
            width={500}
            className='centered-image'
          ></img>
        </div>

        <a href='https://github.com/leeazyone/webdemo_site' alt='manual'>
          'manual page project'
        </a>
      </div>
    </>
  )
}

export default projects
