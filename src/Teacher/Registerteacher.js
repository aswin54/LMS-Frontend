import React from 'react'

function Registerteacher() {
  return (
    <div className='container mt-5'>
        <div className='card'>
            <h5 className='card-header text-center'>Teacher Register Form</h5>
            <div className='card-body'>
        <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">Username</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword2" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputPassword2"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Skills</label>
                <textarea className='form-control'></textarea>
                <div id="emailhelp" className='form-text'>Python,Html,Css etc</div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Registerteacher