import React from 'react';
import {Link } from 'react-router-dom'


const Principale = () => {

  const centerImg = {
    display: 'block',
    margin: '40px auto'
  }



  return(
    <div class="row h-100 align-items-center justify-content-center text-center">
    
    <div class="col-lg-10 align-self-end">
        <h1 class="text-uppercase text-white font-weight-bold">Tester vos connaissances sur le platforme Android</h1>
        <hr class="divider my-4" style={centerImg}/>
    </div>
   
    <div class="col-lg-8 align-self-baseline">
        <p class="text-white-75 font-weight-light mb-5">Ce questionnaire, est proposé par Maroua Ammar pour aider les développeurs à auto-évaluer leurs connaissances.</p>
        <Link className="btn btn-primary btn-xl js-scroll-trigger" to="/signup">Inscription</Link>
        
      <Link className="btn btn-primary btn-xxl js-scroll-trigger" to ="/login"> Connexion </Link>
   
    </div>
</div>
  )
}

export default Principale;