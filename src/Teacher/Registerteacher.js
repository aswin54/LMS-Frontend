import axios from 'axios'
import React, { useEffect, useState } from 'react'
const baseUrl = 'http://127.0.0.1:8000/teachers/'

function Registerteacher() {
    const [teacherData, setteacherData] = useState({
        'full_name':'',
        'email':'',
        'password':'',
        'mobile_no':'',
        'qualification':'',
        'skills':'',
        'status':'success'
    })
    const handleChange = (event)=>{
        setteacherData({
            ...teacherData,
            [event.target.name]:event.target.value
        })
    }

    const submitForm = ()=>{
        const teacherFormData = new FormData();
        teacherFormData.append('full_name',teacherData.full_name)
        teacherFormData.append('email',teacherData.email)
        teacherFormData.append('password',teacherData.password)
        teacherFormData.append('mobile_no',teacherData.mobile_no)
        teacherFormData.append('qualification',teacherData.qualification)
        teacherFormData.append('skills',teacherData.skills)

        try{
            axios.post(baseUrl,teacherData).then((response)=>{console.log(response.data)})
        }
        catch(error){
            console.log(error)
            setteacherData({'status':'error'})
        }
    }
   
    useEffect(() => {
        document.title = 'Teacher Register'
      }, [])
  return (
    <div className='container mt-5'>
        {teacherData.status=='success' && <p className='text-success'>Thanks for registering</p>}
        {teacherData.status=='error' && <p className='text-danger'>something went wrong</p>}
        <div className='card'>
            <h5 className='card-header text-center'>Teacher Register Form</h5>
            <div className='card-body'>
        {/* <form> */}
            <div className="mb-3">
                <label for="exampleInputName" className="form-label">Username</label>
                <input type="text" onChange={handleChange} name="full_name" className="form-control" id="exampleInputName"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" onChange={handleChange} name="email" className="form-control" id="exampleInputEmail1"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" onChange={handleChange} name="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputqualification" className="form-label">qualification</label>
                <input type="text" onChange={handleChange} name='qualification' className="form-control" id="exampleInputqualification"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputmobile" className="form-label">Mobile Number</label>
                <input type="number" onChange={handleChange} name='mobile_no' className="form-control" id="exampleInputmobile"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputskill" className="form-label">Skills</label>
                <textarea className='form-control' name='skills' onChange={handleChange}></textarea>
                <div id="emailhelp" className='form-text'>Python,Html,Css etc</div>
            </div>
            <button type="submit" onClick={submitForm} className="btn btn-primary">Submit</button>
        {/* </form> */}
        </div>
        </div>
    </div>
  )
}

export default Registerteacher