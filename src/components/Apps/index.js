import React from 'react';
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import Welcome from '../welcome'
import ForgetPassword from '../frogetPassword';
import Login from '../Login'
import SignUp from '../SignUp'
import ErrorPage from '../ErrorPage'
import '../../App.css';
import {IconContext} from 'react-icons'
import Principale from '../Principale';


function App() {
  return (
   
   <Router> 
     <IconContext.Provider value ={ { style :{verticalAlign:'middle'}}}>
   
   
   <Switch>
   <Route  exact path="/modele" component ={Principale}/>
   <Route path="/welcome" component ={Welcome }/>
   <Route path="/login" component ={Login }/>
   <Route path="/signup" component ={SignUp }/>
   <Route path ="/forgetpassword" component={ ForgetPassword } />
   <Route  component ={ErrorPage }/>
   
   </Switch>
   </IconContext.Provider>


    
 
 
  </Router>
  );

}

export default App;
