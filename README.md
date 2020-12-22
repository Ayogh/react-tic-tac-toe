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

