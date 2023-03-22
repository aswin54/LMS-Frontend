import React from 'react'
import Sidebarteacher from './Sidebarteacher'

function Dashboardteacher() {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <Sidebarteacher />
                </aside>
                <section className='col-md-9'>
                    Dashboard
                </section>
            </div>

        </div>
    )
}

export default Dashboardteacher