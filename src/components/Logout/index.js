import React,{useState,useEffect,useContext} from 'react'
import {FirebaseContext} from '../Firebase';
import ReactTooltip from 'react-tooltip';


const Logout = () => {
  const firebase=  useContext(FirebaseContext);
    const [checked,setcheked]= useState(false);

useEffect (() => {

 if (checked){
     console.log("deconnaixion");
     firebase.signoutUser();
 }

},[checked,firebase])

const handleChange = event => {
    setcheked(event.target.checked);
}


return (
    <div>
<div className= "logoutContainer">
    <label  className="switch">
<input onChange={handleChange} type= "checkbox"  checked={checked}
/>

<span className= "slider round" data-tip="Déconnexion"></span>
    </label>

    <ReactTooltip
    place = "left" 
    effect = "solid"
    />



</div>


</div>
)


}

export default Logout;