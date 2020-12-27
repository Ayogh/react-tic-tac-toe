import React from 'react';
import Square from './Square';

class Board extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       squares: Array(9).fill(null),
       xIsNext: true,
     };
   }
 
   handleClick(i) {
    //make copy of squares
    const squares = this.state.squares.slice(); 
    //if (calculateWinner(squares) is "true" then do not evalute squares[i] but enter if-statement and execute the return statement, i.e., if calculateWinner(squares) returns "squares[a]" then it is "true", but if it returns "null" then it is "false". If calculateWinner(squares) is "false" then go to squares[i] and evaluate it; if squares[i] evaluates to X or O then it is "true" so enter the if-statement and execute its return statement, but if squares[i] is "null" then it is "false" therefore skip the if-statement and go to squares[i] = this.state.xIsNext ? 'X' : 'O';
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
   }
 
   renderSquare(i) {
     return (
       <Square
         value={this.state.squares[i]}
         onClick={() => this.handleClick(i)}
       />
     );
   }
 
   render() {
     const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
 
     return (
       <div>
         <div className="status">{status}</div>
         <div className="board-row">
           {this.renderSquare(0)}
           {this.renderSquare(1)}
           {this.renderSquare(2)}
         </div>
         <div className="board-row">
           {this.renderSquare(3)}
           {this.renderSquare(4)}
           {this.renderSquare(5)}
         </div>
         <div className="board-row">
           {this.renderSquare(6)}
           {this.renderSquare(7)}
           {this.renderSquare(8)}
         </div>
       </div>
     );
   }
}

export default Board

//Declaring a winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; //initialize [a, b, c] with the values, e.g.,...
                               // [a, b, c] = [0, 1, 2] is a = 0, b = 1, c = 2
    
    //The value of squares[a] is either X, O, or null. If squares[a] is either X or O, that makes it "true" so squares[a] === squares[b] is evaluated. On the other hand, if squares[a] is null, the if-statement is skipped and null is returned. if squares[a] === squares[b] are equal, that makes it "true" and squares[a] === squares[c] is evaluated next. On the other hand, if squares[a] === squares[b] are not equal, that makes it "false" and the if-statement is skipped and null in the next line is returned. If squares[a] === squares[c] is "true", the value of squares[a] is returned, else null is returned.
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}