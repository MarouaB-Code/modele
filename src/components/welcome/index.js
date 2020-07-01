import React,{useState, useEffect, useContext} from 'react';
import Logout from '../Logout';
import Quiz from '../Quiz';
import {FirebaseContext} from '../Firebase';
import Loader from '../Loader';
import Header from '../Header';




const Welcome = props => {
  
  const [userSession,setUserSession]= useState(null);
  
  const firebase = useContext(FirebaseContext);
  
 const[userData, setuserdata] = useState({}); 
  
  useEffect (() => {
    //verifier si connecte ou pas
 let listener= firebase.auth.onAuthStateChanged( user => {
user ? setUserSession(user) : props.history.push('/modele');
}) 


if(!userSession== null){

  firebase.user(userSession.uid)
  .get()
  .then(doc => {
  if (doc && doc.exists){
    const myData= doc.data();
    setuserdata(myData)
  }
  })
  .catch(error => {
    console.log(error);
  })


}








return () => {
  listener()
};
  
  },[userSession])
  
  return  userSession === null? (
 /**
    <Fragment>
    <div className="loader">
<p> Loading.....</p>
    </div>
    </Fragment>

    */
 <Loader
 loadingMsg={"Authentification...."}
 Styling = {{ textAlign:'center', color:'#FFFFFF'}}
 
 />



   ) : (
 <div className="quiz-bg">

   
  <div className="container">
  <Header/>
<Logout/>
<Quiz userData= {userData}/>

  
</div>
  
  </div>
 

   )
}

export default Welcome;