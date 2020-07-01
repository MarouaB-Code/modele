import React, { Fragment ,useEffect,useState} from 'react';
import {GiTrophyCup} from 'react-icons/gi';


const QuizOver = React.forwardRef( (props,ref) => {
   // console.log(props) 
   // console.log(ref) 
 const 
 {levelNames,
        score, 
        maxQuestions 
        ,quizlevel,
         percent,
         loadLevelQuestionss} = props;
  

    const[asked,setasked] = useState([]);
 
   // console.log(asked) 
   
   useEffect(()=>{
           setasked(ref.current)
    },[ref])




    const avredge =maxQuestions/2;

if (score < avredge)

//{setTimeout(() => {loadLevelQuestionss(0)},3000)
{setTimeout(() => {
        
        loadLevelQuestionss(quizlevel)},3000)
}


const decision = score >= avredge ? (

 <Fragment>
         <div className="stepsBtnContainer">
{

        quizlevel< levelNames.length ?
        (
         <Fragment>
<p className="successMsg"> Bravo , passez au niveau suivant</p>
 <button 
 className="btnResult success"
  onClick= {() =>loadLevelQuestionss(quizlevel)}> 
 Niveau Suivant
 </button>      
       </Fragment>
       )
       :
        (
         <Fragment>
 <p className="successMsg">
         <GiTrophyCup/>
          Bravo , vous etes un expert !</p>
 <button className="btnResult gameOver"
 onClick = {() =>loadLevelQuestionss(0)}
 > 
 Accueil</button>      
       </Fragment>
        )
}
</div>

<div className="percentage">
<div className="progressPercent"> Réussite: {percent}%</div>
<div className="progressPercent"> Note: {score}/{maxQuestions}</div>
</div>


 </Fragment>
)
:
(

<Fragment>
<div className="stepsBtnContainer">
        <p className="successMsg">Oups, vous avez échoué !</p>
</div>


<div className="percentage">
        <div className="progressPercent"> Réussite: {percent}%</div>
        <div className="progressPercent"> Note: {score}/{maxQuestions}</div>
</div>
         
 </Fragment>

)
    
const questionAnswer= score >= avredge? (
        asked.map(question=> {
                return(
                <tr key= {question.id}>
                <td>{question.question}</td>
                <td>{question.answer}</td>
              
                </tr>
                )
                    })
)
:
(
        <tr>
        <td colSpan="3"> 
        
       
      
        </td>
       
        </tr>

)




 
    
    return (

<Fragment>
  {decision}
     
        <br/>

        <p> les réponse aux questions posés: </p>

<div className="answerContainer">
<table className="answers" >
        <thead>
<tr>
<th>question</th>
<th>reponse</th>

</tr>
        </thead>

<tbody>
   
{questionAnswer}

</tbody>



</table>


</div>

    </Fragment>
 )}
)
export default React.memo(QuizOver)
/**
 * 
<Modal showModal= {openModal} hideModel= {hideModel}>
<div className="modalHeader">
<h2> TITRE</h2>

</div>

<div className="modalBody">
        <h3> titre</h3>
</div>

<div className="modalFooter">
        <button className="modalBtn" > fermer</button>
</div>

</Modal>

 * 
 * 
 * 
 */