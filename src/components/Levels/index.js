import React , {useEffect, useState} from 'react';
import Stepper from 'react-stepper-horizontal'

const Levels = ({levelNames , quizlevel}) => {
  
//console.log(levelNames);

const[Levels, setlevels] =useState([]);


     useEffect (() => {
  const quizstep= levelNames.map(level => ({title: level.toUpperCase()}) )
  setlevels(quizstep);


}, [levelNames]);
     
     //console.log(Levels);
     
      return (
   <div className= "levelsContainer"  style ={{background:'transparent'}}>


      <Stepper
       steps={ Levels }
         activeStep={ quizlevel } 
         circleTop ={0}
         activeTitleColor={'#d31017'}
         activeColor ={'#d31017'}
         completeTitleColor= {'#E0E0E0'}
         defaultTitleColor= {'#E0E0E0'}
         completeColor ={'#E0E0E0'}
         completeBarColor ={'#E0E0E0'}
         barStyle ={'dashed'}
         size={45}
         circleFontSize={20}
         
         />
    </div>
   
   )
   }
   
   export default React.memo(Levels);