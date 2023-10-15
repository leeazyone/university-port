import Header from '@/components/Header'
import React from 'react'

const contact = () => {
  return (
    <>
      <Header></Header>
      <div className='font-mono text-center'>
        <img src='/img/me.png' alt='myface' width={250}></img>
        <p></p>
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
      <br></br>
      <br></br>
      <div className='font-mono text-center'>
        <p>If you want to contact me, fill out the from below and sent it💬</p>
        <br></br>
        <form action='leejiwon317@jmail.ac.kr' method='post'>
          <fieldset id='contactForm'>
            <legend>Send Me A Message</legend>
            <p>
              <label for='textFname'>First name</label>
              <input
                id='textFname'
                size='20'
                type='text'
                required='required'
              ></input>
            </p>
            <p>
              <label for='textLname'>Last Name </label>
              <input
                id='textLname'
                name='textLname'
                size='15'
                type='text'
                required='required'
              ></input>
            </p>
            <p>
              <label>
                <label for='textPhone'>Phone Number</label>
                <input
                  id='textPhone'
                  name='textPhone'
                  size='30'
                  type='text'
                  required='required'
                ></input>
              </label>
            </p>
            <p>
              <label for='textOther'>Additional Message</label>
              <textarea
                id='textOther'
                name='textImprove'
                type='text'
                cols='20'
                rows='3'
              ></textarea>
            </p>
            <p>
              <button type='submit'>submit</button>
            </p>
          </fieldset>
        </form>
      </div>
    </>
  )
}

export default contact
