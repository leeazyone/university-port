import Header from '@/components/Header'
import React from 'react'

const about = () => {
  return (
    <>
      <Header></Header>
      <div className='font-mono text-center'>
        <h1 className='text-2xl'>Hi, I'm Jiwon!😎</h1>
        <p>
          중부대학교 재학 중인 2학년 이지원입니다.<br></br> 이 페이지는 저에
          대해 소개를 하는 페이지입니다. <br></br>아래 링크를 통해 저의 프로젝트
          페이지를 보실 수 있습니다.
        </p>
      </div>
      <div className='centered-image-container'>
        <img
          src='/img/me.png'
          alt='myface'
          width={350}
          className='centered-image'
        ></img>
        <p></p>
        <div className='text-center font-mono'>
          <ul>
            <li>
              <strong>Phone</strong> | 010-0000-0000
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
