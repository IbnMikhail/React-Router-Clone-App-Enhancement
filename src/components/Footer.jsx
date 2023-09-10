import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='text-white text-center bg-black '>
      <h2>Questions? contact us</h2>
      <div className="text-gray-300 grid grid-cols-4 mx-auto w-9/12 mt-5 mb-5 max-md:grid-cols-2 gap-y-8 max-[640px]:grid-cols-1">
        <div className="grid gap-y-3 underline">
          <a href='#'>FAQ</a>
          <a href='#'>Investor Relations</a>
          <a href='#'>Privacy</a>
          <a href='#'>Speed Test</a>
        </div>
        <div className="grid gap-y-3 underline">
          <a href='#'>Help Center</a>
          <a href='#'>Jobs</a>
          <a href='#'>Cookies Preferences</a>
          <a href='#'>Legal Notices</a>
        </div>
        <div className="grid gap-y-3 underline">
          <a href='#'>Account</a>
          <a href='#'>Ways to watch</a>
          <a href='#'>Corporate inforation</a>
          <a href='#'>Only on Netflix</a>
        </div>
        <div className="grid gap-y-3 underline">
          <Link to={`/home/1`}>Home</Link>
          <Link to={`/about/1`}>About Us</Link>
          <Link to={`/contact/1`}>Contact Us</Link>
          <a href='/NotFOUND/'>Not Found message</a>
        </div>
      </div>
      <div className="flex items-center text-white w-9/12 mx-auto h-10 mt-10">         
                <i className="fa-solid fa-globe absolute ml-2"></i>
                <select className="bg-[rgb(35,35,35)] w-32 pl-8 font-bold h-8 rounded border border-gray-300">
                    <option value="English">
                        English
                    </option>
                   
                </select>
        </div>
        <div className="flex items-center text-gray-300 w-9/12 mx-auto h-10 "> 
            Netflix Nigeria
        </div>
  
    </div>
  )
}

export default Footer
