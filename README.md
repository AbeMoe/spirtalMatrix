# spirtalMatrix
leet code challenge https://leetcode.com/problems/spiral-matrix-ii/

This solution is a naive first attempt at getting a successful compile at leetcode.
here is a layout of how it will run 

1.create an n by n array
  2.consider four states:
    a.able to go right: (square to the right is set to zero and not undefined)
    b.able to go down: down is not zero or undefined
    c.able to go left: left is not zero or undefined
    d.able to go up: up is not zero or undefined
  3.set initial state to "Go right"
  4.initalize x,y at 0,0
  5.for i -> n^2
    a.if current state is "go right"
        set current cell equal to n
        check if we are still able to do so
          if not: set next state to "Go down"
        if we are, x+1
    b.rinse and repeat for go down go left and go up
      they should be occuring cyclically.
