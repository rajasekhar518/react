import React from 'react'

const NavBar = (props)=> {
  return (
    <>
     <nav className='navbar navbar-dark bg-success'>
       <div className='container'>
        <a href='' className='navbar-brand'>{props.heading}</a>
       </div>
     </nav>
    </>
  )
}

export default NavBar;
