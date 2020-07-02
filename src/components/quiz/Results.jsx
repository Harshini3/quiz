import React from 'react';
import '../App.css'

class Results extends React.Component {
  render() {
    var percent = (this.props.score / this.props.questions.length * 100);
    if (percent > 80) {
  
      var message = 'You did awesome!';
    } else if (percent < 80 && percent > 60) {
      var message = 'You did  fine';
    } else {
      var message = 'Try Again';
    }
    return (
      <div className="result">
        <h4>You got {this.props.score} out of {this.props.questions.length}</h4>
        <h2>{percent}% - {message}</h2>
  
      </div>
    );
  }
}

export default Results;
