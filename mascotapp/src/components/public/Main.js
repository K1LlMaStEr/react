import React, { Component } from 'react'
import Cards from './Cards.js';
import RickAndMortyServices from '../../services/RickAndMorty.services.js';


export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = { mascotas: []};
    
  }
  
  componentDidMount(){
    
    
  //   RickAndMortyServices.getAllCharacters()
  //   .then((data) => this.setState({mascotas: data.results}))
  //   .catch((error) => console.log(error));
  // }
  }
    render() {
      
    return (
    
            <main>

<section className="py-5 text-center container">
  <div className="row py-lg-5">
    <div className="col-lg-6 col-md-8 mx-auto">
      <h1 className="fw-light"> ENCABEZADO DE CARTAS</h1>
      <p className="lead text-body-secondary">mostrando la info de rick y morti</p>
      <p>
        <a href="#" className="btn btn-primary my-2"> twiter</a>
        <a href="#" className="btn btn-secondary my-2">snapchat</a>
      </p>
    </div>
  </div>
</section>

<Cards />

</main>
        
    
    )
  }
}


