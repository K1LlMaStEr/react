import React from 'react'
import { Link } from 'react-router-dom';
import Detail from './Detail';


const Card = ({mascota}) => {
  return (
    <div className="col">
    <div className="card shadow-sm">
      <img width="100%" src={mascota.image} alt="imagen" />

      <div className="card-body">
        <p className="card-text">{mascota.name}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
            <Link to={`/Detail/${mascota.id}`} className="mt-3 btn btn-primary btn-lg"> Detalle </Link>
            </button>
            
          
          </div>
        
        </div>
      </div>
    </div>
  </div>
);
}

export default Card
