import React, {Component} from 'react';
import Question from './Component/Question'
import qBank from './Component/QuestionBank';
import Score from './Component/Score';
import './App.css'

class App extends Component {
  
     constructor(props){
      super(props);
      this.state = {
         questionBank : qBank,
         currentQuestion : 0,
         selectedOption : "",
         score : 0,
         quizEnd : false,
      };
     }

     handleNextQuestion = () => {
      const {questionBank , currentQuestion} = this.state;
      if(currentQuestion + 1 < questionBank.length){
        this.setState((prevState)=>({
          currentQuestion: prevState.currentQuestion + 1,
          selectedOption: "",
        }));
      }else{
         this.setState({
          quizEnd:true,
         });
      }
     };

     render(){
      const {questionBank , currentQuestion , selectedOption , score , quizEnd} = this.state;
      return(
        <div className='App flex flex-col items-center justify-center'>
          <h1 className='app-title'>Quiz App</h1>
          {!quizEnd ?(
            <Question question = {!questionBank[currentQuestion]}
            selectedOption={selectedOption}
            onOptionChange = {this.handleOptionChange}
            onSubmit={this.handleFormSubmit}/>
          ):(
            <Score score={score}
            onNextQuestion={this.handleNextQuestion}
            className="score"/>
          )}
        </div>
      );
     }

}

export default App;