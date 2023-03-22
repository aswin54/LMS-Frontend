import React from 'react'
import Sidebarteacher from './Sidebarteacher'

function Addcourse() {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <Sidebarteacher />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Add Course</h5>
                        <div className='card-body'>
                            <div className="mb-3">
                                <label for="exampleTitle" className="form-label">Title</label>
                                <input type="text" className="form-control" id="exampleTitle" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="mb-3">
                                <label for="formFile" className="form-label">Course Video</label>
                                <input className="form-control" type="file" id="formFile"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea2" className="form-label">Technologies</label>
                                <textarea class="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
                            </div>
                            <button type='button' className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Addcourse