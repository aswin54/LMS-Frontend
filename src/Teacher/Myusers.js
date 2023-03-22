import React from 'react'
import { Link } from 'react-router-dom'
import Sidebarteacher from './Sidebarteacher'

function Myusers() {
  return (
    <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <Sidebarteacher />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>My Users</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Created By</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Python dev</td>
                                        <td><Link to=''>Aswin</Link></td>
                                        <td><button className='btn btn-danger btn-sm'>Delete</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
  )
}

export default Myusers