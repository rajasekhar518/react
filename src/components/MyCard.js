import React from 'react'


export default function MyCard(props) {
  console.log(props);
  return (
    <>
      <div className='card card-body m-3 shadow-lg'>
        <h2>My Card {props.heading}</h2>
        <p>Save your favorite articles to read offline, sync your reading lists across devices and customize your reading experience with the official Wikipedia app.</p>

      </div>
    </>
  )
}
