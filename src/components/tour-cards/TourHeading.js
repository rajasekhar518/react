import React from 'react'

function TourHeading(props) {
  return (
    <>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col'>
             <p className='h3 text-text-success'>{props.heading}</p>
             <p>Save your favorite articles to read offline, sync your reading lists across devices and customize your reading experience with the official Wikipedia app.</p>
          </div>
        </div> 
      </div>

    </>
  )
}

export default TourHeading
