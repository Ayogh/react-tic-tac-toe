import React from 'react';

// Fill Square with X when clicked.
// handleClick and squares[i] are passed as props from Board to Square.
class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Square