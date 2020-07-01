import React,{useState,useEffect,useContext} from 'react';
import { Link } from 'react-router-dom';
import {FirebaseContext} from '../Firebase';
import Footer from '../Footer';



const Login = (props) => {
  const firebase = useContext(FirebaseContext);
 
  const [email, setEmail] = useState( '');
  const [password, setPassword] = useState( '');

const [btn,setbtn] =useState(false);

const [error,setError]= useState('');



useEffect( ()=> {

  if (password.length> 5 && email !== ''){
    setbtn(true)
  }else if(btn) {
setbtn(false)
  }

},[password,email,btn])


const handleSubmit = e => {
  e.preventDefault();// eviter de recharger le formulaire 

  firebase.loginUser (email,password)
  .then(user => {
    setEmail('');
    setPassword('');
    props.history.push('/welcome')
  })
  .catch(error => {
    setError(error);
    setEmail('');
    setPassword('');

     
  }
  )

  
}
  
  return(
<div className="login">
  <div>

  <div className="slContainer">


          <div className="formBoxRight">
                <div className="formContent">
            
  {error !== '' && <span>{error.message}</span>};
                    
                    
                    
                    <h2 style ={{paddingTop: "7rem"}}>Connexion</h2>
                    <form onSubmit ={handleSubmit} >
                    
                      <div className="inputBox">
                         < input onChange={e=> setEmail(e.target.value)}  value ={email} type="email"  autoComplete="off"  required/>
                        <label htmlFor="email">Email</label>
                      </div>


                      <div className="inputBox">
                         < input onChange={e=> setPassword(e.target.value)} value ={password} type="password"   autoComplete="off"  required/>
                        <label htmlFor="password">Mot de passe </label>
                      </div>


                      {btn ? <button> Connexion </button> :<button disabled> Connexion </button> }

                  </form>

<div className="linkContainer">
  <Link className ='simpleLink' to="/signup">  Vous êtes nouveau sur Test-Android? Inscrivez-vous</Link>
  <br/>
  <Link className ='simpleLink' to="/forgetpassword">  Mots de passe oublié ? récupérer le ici </Link>


</div>

                </div>


          </div>    







  </div>
 
        

  
  </div>
 
 <Footer/>
        </div>
  )
}

export default Login;