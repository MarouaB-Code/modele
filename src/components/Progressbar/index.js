import React, {Fragment} from 'react';

const Progressbar = ({idQuestion, maxQuestions}) => {
   
  // console.log(idQuestion, maxQuestions);
   const getwidth = (totalQuestion, questionId)=> {
       return (100/ totalQuestion)*questionId;
   }
  
  const actualQuestion = idQuestion +1 ;
const progressPercent= getwidth(maxQuestions,actualQuestion);

//console.log(progressPercent);
    return (
       <Fragment>
   <div className="percentage">

        <div className="progressPercent"> {`Question: ${idQuestion +1 }/${maxQuestions}`}</div>
    <div className="progressPercent">{`Progression:${progressPercent}%`}</div>
    </div>

    <div className ="progressBar"> 
        <div className="progressBarChange" style={{width: `${progressPercent}%`}}> </div>
   </div>
   </Fragment>
   )
   }
   // memo 

   export default  React.memo(Progressbar)