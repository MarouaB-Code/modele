import React, {useState,useContext} from 'react'; 
import { Link } from 'react-router-dom';
import {FirebaseContext} from '../Firebase/';
import Footer from '../Footer';

const ForgetPassword = props => {
    const [email, setEmail] =useState("");
    const firebase = useContext(FirebaseContext);
 
const [succes,setsucces] = useState(null);
const [error,seterror] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        firebase.passwordReset(email)
.then (() => {
seterror(null);
setsucces(`consultez votre email ${email} pour changer le mot de passe`)
setEmail("");

setTimeout(() => {
props.history.push('/login')
},5000)

}).catch (error => {

    seterror(error);
    setEmail("");
})
    }

const disabled= email === "";


return (
    <div>
    <div className="slContainer">
    
            <div className="formBoxRight">
                  <div className="formContent">

{succes && <span style = {{border : "1px solid green ",
                            background :"green",
                            color:"#ffffff"
                            }}>
                                {succes}</span>}
                  
                  {  error && <span > { error.message}</span> }
                  
                  
                  
                      <h2 style ={{paddingTop: "10rem"}}>Mot de passe Oublié ?</h2>
                      <form onSubmit ={handleSubmit} >
                      
                        <div className="inputBox">
                           < input onChange={e=> setEmail(e.target.value)}  value ={email} type="email"  autoComplete="off"  required/>
                          <label htmlFor="email">Email</label>
                        </div>
  
  <button disabled ={disabled}>  récuperer</button>
                      
  
                    </form>
  
      <div className="linkContainer">
    <Link className ='simpleLink' to="/login">  Déja inscrit? Connectez-vous</Link>
  
  </div>
  
                  </div>
  
  
            </div>    
  
  
  
  
  
  
  
    </div>
   
    <Footer/>
    
    </div>


)}




export default ForgetPassword;