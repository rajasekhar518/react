import React from 'react'

export default function TourCard(props) {
  return (
    <>
      <div className='col-sm-3'>
            <div className='card'>
              <img src={props.imageUrl} alt=''></img>
              <div className='card-body'>
                <p className='h3'>{props.heading}</p>
                <p>Save your favorite articles to read offline, sync your reading lists across devices and customize your reading experience with the official Wikipedia app.</p>
                <button className='btn btn-success'>Book Now</button>
              </div>
            </div>
          </div>
    </>
  )
}
