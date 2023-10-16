import Header from '@/components/Header'
import React from 'react'

const about = () => {
  return (
    <>
      <Header></Header>
      <div className='font-mono text-center'>
        <h1 className='text-2xl'>Hi, I'm Jiwon!😎</h1>
        <p>
          I am a student in the Department of <br></br>Information Security.
        </p>
      </div>
      <div className='centered-image-container'>
        <img
          src='/img/me.png'
          alt='myface'
          width={250}
          className='centered-image'
        ></img>
        <p></p>
        <div className='text-center font-mono'>
          <ul>
            <li>
              <strong>Phone</strong> | 010-2390-9671
            </li>
            <li>
              <strong>Email</strong> | leejiwon317@jmail.ac.kr
            </li>
            <li>
              <strong>Github</strong> |
              <a href='https://github.com/leeazyone' className='text-blue-500'>
                /leeazyone
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='box'>
        <div className='text-center font-mono'>
          <h1>🔽 Click and look at My Projects🔽</h1>
          <h3>
            <a href='/projects' className='text-blue-500'>
              Jiwon's Projects
            </a>
          </h3>
        </div>
      </div>
    </>
  )
}

export default about
