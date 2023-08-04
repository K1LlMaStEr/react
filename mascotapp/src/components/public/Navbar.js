import React from 'react'
import UserForm from './UserForm';
import { useState } from "react"

const Navbar = () => {
  // Estado para controlar la visibilidad del formulario
  const [showForm, setShowForm] = useState(false);

  // Controlador de evento para mostrar u ocultar el formulario
  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
         
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="https://www.youtube.com/" className="nav-link px-2 link-secondary">Youtube</a></li>
            <li><a href="#" className="nav-link px-2 link-body-emphasis" onClick={toggleForm}>
              Iniciar Sesion
            </a></li>
            <li><a href="#" className="nav-link px-2 link-body-emphasis">Customers</a></li>
            <li><a href="#" className="nav-link px-2 link-body-emphasis">Products</a></li>
          </ul>
        </div>
      </div>
      {showForm && (
       
        <div className="container">
          <UserForm />
        </div>
      )}
    </header>
  );
};

export default Navbar;
