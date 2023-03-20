import React from 'react'
import { useParams } from 'react-router-dom'

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
            <div className='card-header'>Course Videos</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Introduction<button className='btn btn-sm btn-secondary' style={{float:"right"}}>Play</button></li>
                <li class="list-group-item">Setup Project</li>
                <li class="list-group-item">Start with functional component</li>
            </ul>
        </div>
    </div>
  )
}

export default CourseDetail