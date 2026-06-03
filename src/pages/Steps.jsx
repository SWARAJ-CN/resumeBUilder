import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoDownload } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Steps = () => {
  return (
    <>
    <div style={{ minHeight: '80vh' }} className='my-5'>
     
      <h1 className='text-center fw-bold mb-5'> Create an ATS Friendly Resume in Minutes with AI</h1>
      
      <div className='row'>
        <div className='col-md-1'></div>
        
       
        <div className='col-md-4 rounded p-5 shadow text-center bg-white'>
          <IoDocumentTextOutline className='fs-1 text-primary mb-3'/>
          <h4 className='fw-bold'>Add Your Details</h4>
          <p className='text-muted'>Our AI will generate Skills & Summary</p>
          <h5 className='fw-bold mt-4'>Step 1</h5>
        </div>
        
        <div className='col-md-2'></div>
        
        
        <div className='col-md-4 rounded p-5 shadow text-center mt-md-0 mt-5 bg-white'>
          <IoDownload className='fs-1 text-danger mb-3'/>
          <h4 className='fw-bold'>Download your Resume</h4>
          
          <p className='text-muted'>Download PDF and start applying</p>
          <h5 className='fw-bold mt-4'>Step 2</h5>
        </div>
        
        <div className='col-md-1'></div>
      </div>

    
      <div className='text-center mt-5'>
        <Link to={'/form'}>
          <button 
            className='btn text-white px-4 py-2 fw-semibold text-uppercase' 
            style={{ backgroundColor: '#a07855', border: 'none', borderRadius: '5px' }}
          >
            Let's Start
          </button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Steps