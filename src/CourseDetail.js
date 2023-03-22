import React from 'react'
import { Link, useParams } from 'react-router-dom'

function CourseDetail() {
    let {course_id} = useParams()
  return (
    <div className='container mt-3'>
        <div className='row'>
            <div className='col-4'>
                <img src="..." className="img-thumbnail" alt="..."/>
            </div>
            <div className='col-8'>
                <h3>course title</h3>
                <p>course description</p>
                <p className='fw-bold'>course By:<a href='#'>Teacher 1</a></p>
                <p className='fw-bold'>Duration:3hrs</p>
                <p className='fw-bold'>Total Enrolled:500 students</p>
                <p className='fw-bold'>Rating:4/5</p>
            </div>
        </div>
        {/* course videos */}
        <div className='card mt-4'>
            <h5 className='card-header'>Course Videos</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Introduction<button className='btn btn-sm btn-danger float-end' style={{float:"right"}}>
                    <i className='bi-youtube'></i></button></li>
                <li class="list-group-item">Introduction<button className='btn btn-sm btn-danger float-end' style={{float:"right"}}>
                    <i className='bi-youtube'></i></button></li>
                <li class="list-group-item">Introduction<button className='btn btn-sm btn-danger float-end' style={{float:"right"}}>
                    <i className='bi-youtube'></i></button></li>
            </ul>
        </div>
        {/* end of course videos */}
        <h3 className='pb-1 mb-4 mt-5'>Related Courses</h3>
        <div className='row'>
            <div className='col-md-3'>
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title"><Link to='/detail/1'>Card title</Link></h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseDetail