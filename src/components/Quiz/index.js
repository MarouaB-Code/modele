import React,{Component, Fragment} from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Levels from '../Levels';

import Progressbar from '../Progressbar';
import {QuizAndroid} from '../quizAndroid';
import QuizOver from '../QuizOver';
import { FaChevronRight } from 'react-icons/fa';
 toast.configure();


const initialState ={
    
    quizlevel: 0,
    maxQuestions:10,
    storedQuestions: [],
    questions: null,
    options:[],
    idQuestion: 0 ,
    btnDisabled: true ,
    userAnswer : null ,
    score: 0,
    showWelcomeMsg:false,
    QuizEnd: false,
    percent:null
}

const levelNames = ["debutant" ,"confirme", "expert"];


class Quiz extends Component {
 
    constructor(props){
        super(props)
        this.state =  initialState ;

       this.stredDataRef=React.createRef();
    }
    
    
    
    

    
 
 loadQuestions =quizz => {
//console.log(level);
const fetchedArrauQuiz =QuizAndroid[0].quizz[quizz];
//console.log(fetchedArrauQuiz);
if(fetchedArrauQuiz.length >= this.state.maxQuestions){

    this.stredDataRef.current =fetchedArrauQuiz;
//console.log(this.stredDataRef.current);

  const newArray= fetchedArrauQuiz.map( ({answer, ...keepRest}) =>  keepRest);
this.setState({
    storedQuestions:newArray})

} else
{console.log("pas assez de question")}

 }

 showToastMsg = pseudo => {
if(!this.state.showWelcomeMsg){

    this.setState({

        showWelcomeMsg:true
    })
 
    toast.warn(`Bienvenu ${pseudo}, et bonne chance!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        bodyClassName:"toastify-color-welcome "
        });




}

   

   /** toast.warn( 'wow se easy!',{
             position:2000
             hideProgressBar: false
             closeOnClick:true
             pauseOnHover: true
             draggable : true

    });*/ 
 }


 
 componentDidMount (){
     this.loadQuestions (levelNames[this.state.quizlevel])
 }


 nextQuestion = () =>{
if (this.state.idQuestion === this.state.maxQuestions-1){
    //console.log("gameover");
   //this.gameOver();
this.setState({
    QuizEnd: true})


} else {
this.setState(prevState => ({
    idQuestion:prevState.idQuestion + 1 
}))
}

//+1 dans le score
const goodAnswer=this.stredDataRef.current[this.state.idQuestion].answer
  if( this.state.userAnswer===goodAnswer){
this.setState(  prevState => ({
score : prevState.score +1 
}))


toast.success('Bravo +1', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    bodyClassName:"toasify-color"
    });

  }else{

    toast.error('Raté 0 ', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        bodyClassName:"toasify-color"
        });
  }

}


 componentDidUpdate (presProps, prevState){

    const {
        maxQuestions,
        storedQuestions,
        idQuestion,
        score,
        QuizEnd,
    } = this.state;





 if((storedQuestions !== prevState.storedQuestions) && storedQuestions.length){

//console.log(this.state.storedQuestions[0].question);
  //console.log(this.state.storedQuestions[this.state.idQuestion]);

this.setState({
questions:storedQuestions[idQuestion].question,
options: storedQuestions[idQuestion].options,
})

 }

 if ((idQuestion !== prevState.idQuestion )&& storedQuestions.length){
    this.setState({
        questions:storedQuestions[idQuestion].question,
        options: storedQuestions[idQuestion].options,
        userAnswer: null ,
        btnDisabled:true

    })

  }

if(QuizEnd !== prevState.QuizEnd){
   // console.log(this.state.score);
   const  gradepercent = this.getPercent(maxQuestions,score)
this.gameOver(gradepercent);
}



if(this.props.userData.pseudo !== presProps.userData.pseudo){
this.showToastMsg(this.props.userData.pseudo);

}



 }

submitAnswer = selectedAnswer =>{
this.setState ({userAnswer: selectedAnswer,
                btnDisabled: false})
}


getPercent=(maxQuest, ourScor) => (ourScor / maxQuest)*100;



gameOver =percent => {
  //  console.log(this.state.score);


if(percent>=50)
{
this.setState({
    quizlevel: this.state.quizlevel +1,
                percent
                
})
}else {

    this.setState({percent})
}
}




loadLevelQuestionss = param => {
this.setState ({...initialState, quizlevel: param})
this.loadQuestions (levelNames[param]);

}

    render (){

       const {
        quizlevel,
        maxQuestions,
        questions,
        options,
        idQuestion,
        btnDisabled,
        userAnswer,
        score,
        QuizEnd,
    } = this.state;


       


       const displayOptions= options.map((options,index) => {


        return (
    <p key = {index}
     className= { `answerOptions ${userAnswer === options ? "selected" : null}`}

      onClick ={() => this.submitAnswer(options)}
     
     > 
     <FaChevronRight/>
     
     {options} </p>
)
        })

    return  QuizEnd? (
            <QuizOver
            ref ={this.stredDataRef}
           // toto="toto"
           levelNames={levelNames}
           score={score}
           maxQuestions ={maxQuestions}
            quizlevel ={quizlevel}
            percent={this.state.percent}
            loadLevelQuestionss={this.loadLevelQuestionss}
            />  

        )
        :
        (
            <Fragment>
        
            <Levels 
            levelNames ={levelNames}
            quizlevel ={quizlevel}
            
            />



            <Progressbar idQuestion={idQuestion}
                         maxQuestions={maxQuestions}/>
        <h2>{questions}</h2>
           {displayOptions}
            <button disabled={btnDisabled} 
            className="btnSubmit"
            onClick ={this.nextQuestion}
            
            >
                
                {idQuestion< maxQuestions -1 ? "suivant" : "terminer"}
                 
                 </button>
            </Fragment>

        )

//const {pseudo} = this.props.userData;

   
  }
   }
   export default Quiz;

   /**
 * les composants de react , c'est une fonction
 * const Quiz = (props) => {
 //console.log(props.userData.pseudo);

return (
<div>


<h2> pseudo: { props.userData.pseudo}</h2>


</div>


)


}

export default Quiz;
**/