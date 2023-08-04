import React, { useState, useSyncExternalStore } from 'react'

const Footer = () => {

   const [clicks, setClicks]= useState(0);
   const  year = new Date().getFullYear();
   const companyName= " EGG education";
   const handleClicks= () => {
    setClicks(clicks + 1);

   }
  return (
    <div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
    onClick={handleClicks}
    >
      <p className="col-md-4 mb-0 text-body-secondary">&copy; {year} {companyName} Clicks={clicks}</p>

      <span className="col-md-4 d-flex aling-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark">
        <img className='h-4 w-4 App-logo'
        height="15"
        src ="images/dog.png"
        alt="perro-giratorio"
        />

      </span>
  
  
  
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
      </ul>
    </footer>
  </div>
  )
}

export default Footer
