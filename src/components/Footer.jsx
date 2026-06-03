import React from 'react'
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className='container-fluid text-light p-5' style={{minHeight:"350px",backgroundColor:"black",color:"white"}}>

      <div className='row'>
          <div className='col-4'>
             <h4>Ai Resume Builder.ai</h4>
             <p>An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF.</p>
          </div>
          <div className='col-4'> </div>
          <div className='col-4'>
              <h4>Contact Us</h4>
              <p className='d-flex gap-2 align-items-center'> <MdOutlineAttachEmail/> resumebuilderai@gmail.com</p>
              <p className='d-flex gap-2 align-items-center'> <FaPhone /> +91 005 669 743</p>
              <h5>contact with us</h5>
              <div className='my-3 fs-5 d-flex gap-3'>
                    <FaInstagram/>
                    <FaFacebook/>
                    <FaWhatsapp/>
              </div>
          </div>
      </div>
      <p className='text-center'>Crafted with ❤️ in Kakkanad,Kerala</p>
    </div>
    </>
  )
}

export default Footer 