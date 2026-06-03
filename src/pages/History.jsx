import React from 'react'
import { Link } from 'react-router-dom'
import { MdDeleteForever } from "react-icons/md";

const History = () => {
  return (
    <>
     <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
            <h6 className='text-center w-100 py-3'>Download Resume History</h6>
            <Link to={"/form"}> Back </Link>
        </div>
        <div className='row'>
          <div className='col-lg-4 mb-3 shadow rounded'>
              <div className='d-flex justify-content-between  p-3'>
                  <h6>Review at : 12 : 15 : 20</h6>
                  <button className='btn fs-5 text-danger'> <MdDeleteForever /> </button>
              </div>
              <div>
                Resume
              </div>
          </div>
          <h1 className='text-center fw-bolder my-5'>No Resume are Downloaded yet !!</h1>
        </div>
     </div>
    </>
  )
}

export default History