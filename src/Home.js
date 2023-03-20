import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
  <div className='container mt-4'>
    {/* Latest Courses */}
    <h3 className='pb-1 mb-4'>Latest Courses<a href='#' className='float-end'>see all</a></h3>
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
    {/* end of latest Courses */}
    {/* Popular Courses */}
    <h3 className='pb-1 mb-4 mt-5'>Popular Courses<a href='#' className='float-end'>see all</a></h3>
    <div className='row'>
        <div className='col-md-3'>
            <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"><a href='#'>Card title</a></h5>
                </div>
            </div>
        </div>
    </div>
    {/* end of Popular Courses */}
    {/* Popular Teachers */}
    <h3 className='pb-1 mb-4 mt-5'>Featured Teachers<a href='#' className='float-end'>see all</a></h3>
    <div className='row'>
        <div className='col-md-3'>
            <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"><a href='#'>Card title</a></h5>
                </div>
            </div>
        </div>
    </div>
    {/* end of Popular teachers */}
    {/* student testimonial */}
    <h3 className='pb-1 mb-4 mt-5'>Student Testimonial</h3>
    <div id="carouselExampleIndicators" className="carousel slide bg-dark text-white py-5">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <figure className='text-center'>
                <blockquote className="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
            </figure>
            </div>
            <div className="carousel-item">
            <figure className='text-center'>
                <blockquote className="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
            </figure>
            </div>
            <div className="carousel-item">
            <figure className='text-center'>
                <blockquote className="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
            </figure>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    {/* end of stuent testimonial */}
</div>
  )
}

export default Home