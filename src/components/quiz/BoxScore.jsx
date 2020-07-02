import React from 'react';
import '../App'

class BoxScore extends React.Component {
  render() {
    return(
      <div className="well" style={{textAlign:"center"}}>
        <div style={{fontSize:"60px" , color:"blue"}} className="tcs">TCS Quiz</div>
        <div style={{padding:"2px",fontSize:"24px"}}>Question {this.props.current} out of {this.props.questions.length}</div>
      </div>
    );
  }
}

export default BoxScore;
