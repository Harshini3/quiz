import React from 'react';
import BoxScore from './quiz/BoxScore.jsx';
import QuestionList from './quiz/QuestionList.jsx';
import Results from './quiz/Results.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: '1.TCS Social Media Platform',
          choices: [
            {
              id: 'a',
              text: 'Knowmax',
            },
            {
              id: 'b',
              text: 'Knome',
            },
           
          ],
          correct: 'b'
        },
        {
          id: 2,
          text: '2.Trending Hashtag',
          choices: [
            {
              id: 'a',
              text: 'SBWS',
            },
            {
              id: 'b',
              text: 'OneTCS',
            },
           
          ],
          correct: 'b'
        },
        {
          id: 3,
          text: '3.Make It your daily habit',
          choices: [
            {
              id: 'a',
              text: 'TimeSheet',
            },
            {
              id: 'b',
              text: 'Authentication',
            },
          ],
          correct: 'a'
        },
        {
          id: 4,
          text: '4.NeverShare your_________',
          choices: [
            {
              id: 'a',
              text: 'Knowledge',
            },
            {
              id: 'b',
              text: 'Password',
            },
          ],
          correct: 'b'
        }
      ],
      score: 0,
      current: 1
    }
  }
  setCurrent(current) {
    this.setState({current});
  }
  setScore(score) {
    this.setState({score});
  }
  render() {
    if (this.state.current > this.state.questions.length) {
      var boxscore = '';
      var results = <Results {...this.state}/>
    } else {
      var boxscore = <BoxScore {...this.state} />
      var results = '';
    }
    return (
   <div>
        {boxscore}
        <QuestionList setScore={this.setScore.bind(this)} setCurrent={this.setCurrent.bind(this)} {...this.state}/>
        {results}
      </div>
    );
  }
}

export default App;
