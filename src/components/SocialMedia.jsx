import React from 'react';
import {BsTwitterX, BsInstagram, BsLinkedin, BsFacebook, BsThreads} from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
      <a href="https://twitter.com/bjm_black?t=Ll0m00Zl-7_bk1rsjR6JpQ&s=09" target='_blank'><BsTwitterX /></a> 
      </div>
      <div>
       <a href="https://instagram.com/bjmblack?igshid=NGVhN2U2NjQ0Yg==" target='_blank'><BsInstagram /></a> 
      </div>
      <div>
        <a href="https://www.facebook.com/benjamin.oboh.334" target='_blank'><BsFacebook /></a>
      </div>
      <div>
       <a href="http://www.linkedin.com/in/benjamin-oboh" target='_blank'><BsLinkedin /></a> 
      </div>
      <div>
       <a href="https://www.threads.net/@bjmblack" target='_blank'><BsThreads /></a> 
      </div>
      
    </div>
  )
}

export default SocialMedia