import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import RickAndMortyServices from '../../services/RickAndMorty.services';

const Detail = () => {
    const [mascota, setMascota] = useState({});
    const {id} = useParams();
    const {pathname}= useLocation();

    useEffect(() =>{
        console.log(pathname)
        RickAndMortyServices.getAllCharacterById(id)
        .then((data)=> setMascota(data))
    }, [id])
  return (
    <div className="col">
    <div className="card shadow-sm">
      <img width="30%" src={mascota.image} alt="imagen" />

      <div className="card-body">
        <p className="card-text">{mascota.name}</p>
        <p className="card-text">{mascota.created}.toLocaleDataString()</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            
            <Link to={"/"} className="mt-3 btn btn-primary btn-lg"> Volver </Link>
            
          </div>

        </div>
      </div>
    </div>
  </div> 
  )
}

export default Detail
