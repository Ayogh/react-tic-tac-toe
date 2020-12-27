# Tic Tac Toe Game

## Steps

## Create the Square class component

1) Create a state object and initialize its value to null.

2) Render the square as a button that returns an X when clicked.

## Create the Board class component

1) Create a state object of arrays of 9 squares initializing each square to null.

2) Create a handleClick function. The function replaces the content of a square with X.

3) Create a renderSquare function. The renderSquare function takes a number as input, then passes this number to a square in the array, & the handleClick function replaces that number with an X when the square is clicked.

## Pass the function handleClick and the square[i] from Board component to Square component

1) Use props.

2) Render the square as a button that returns an X when clicked.

## Give player the ability to mark O inside the squares

1) Go to the Board component.

2) Add a boolean property to the state object called xIsNext and set it to true(xIsNext: true)

3) In the handleClick function, a conditional statement makes it possible to be able to alternate between X and O when the squares are clicked successively.

## Declaring a winner. This step shows when the game is won and there are no more turns to make.

1) Given our array of 9 squares, the function calculateWinner(squares) checks for a winner and returns 'X', 'O', or null as appropriate. This function is placed in the Board component.

2) Let handleClick function to return early by ignoring a click if someone has won the game or if a Square is already filled(let Board do nothing if someone has won or if square is already filled).