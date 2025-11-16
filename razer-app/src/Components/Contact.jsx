import React from 'react'
import {FaEnvelope} from 'react-icons/fa'
import {FaPhone} from 'react-icons/fa'
import {FaMapMarkedAlt} from 'react-icons/fa'
const Contact = () => {
  return (
    <div className='bg-black text-white py-20' id='contact'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <div className='flex-1 h-60'>
                 <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 mb-4'>
                    Lets Talk
                 </h3>
                <p>
                    I'm open to discussing web development projects or partnership opportunities.
                </p>
                <div className='mb-4 mt-10 '>
                  <FaEnvelope className="inline-block  text-green-400 mr-2"></FaEnvelope>
                  <a href="mailto:yourexample@example.com" className='hover:underline'>
                    idan33024@gmal.com
                  </a>
                </div>
                <div className='mb-4'>
                  <FaPhone className="inline-block text-green-400 mr-2" ></FaPhone>
                <span>
                    +2349135751551
                </span>
                </div>
                <div className='mb-4 'mt-8>
                  <FaMapMarkedAlt className="inline-block text-green-400 mr-2" ></FaMapMarkedAlt>
                  <span>
                   36 umuimo off Aba-owerri road Aba Abia state Nigeria
                  </span>
                </div>
                 </div>
                <div className='flex-1 w-full'>
                    <form className='space-y-3.5'>
                      <div>
                        <label htmlFor="Name">Your Name</label>
                        <input type="name" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter Your Name' />
                      </div>
                      <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter Your Email' />
                      </div>
                      <div>
                        <label htmlFor="message">Message</label>
                        <textarea type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter Your Message' rows="5" />
                      </div>
                      <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' Refreash >Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
