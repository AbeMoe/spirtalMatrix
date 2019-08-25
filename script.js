/* Gameplan:
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

*/


var n = 10;
var square= Math.pow(n,2);
var grid = [];
var x = 0;
var y = 0;
for(var i=0;i< n;i++)
{
  grid.push([])
  for(var j=0;j<n;j++)
  {
    grid[grid.length-1].push(0);
  }
}
var state = "goRight" //Our state to go right

for(var i=1;i<=square;i++)
{
  console.log(state)
  grid[y][x] = i;
  if(state == "goRight")
  {
    //If it's okay to go right, then do so
    if(grid[y][x+1] != undefined && grid[y][x+1] == 0)
    {
      console.log(grid[y][x])
      x+=1;
    }
    else
    {
      state="goDown"; //otherwise start going down
      y+=1
    }
  }
  else if(state == "goDown")
  {
    //If it's okay to go right, then do so
    if(grid[y+1] != undefined && grid[y+1][x] == 0)
    {
      if(grid[y+1][x] == 0)
        y+=1;
    }
    else
    {
      state="goLeft"; //otherwise start going down
      x-=1;
    }
  }
  else if(state == "goLeft")
  {
    //If it's okay to go right, then do so
    if(grid[y][x-1] != undefined && grid[y][x-1] == 0)
      x-=1;
    else
    {
      state="goUp"; //otherwise start going down
      y-=1;
    }
  }
  else if(state == "goUp")
  {
    //If it's okay to go right, then do so
    if(grid[y-1] != undefined && grid[y-1][x] == 0)
    {
      if(grid[y-1][x] == 0)
        y-=1;
    }
    else
    {
      state="goRight"; //otherwise start going down
      x+=1;
      console.log(state,x);
    }
  }
}
console.log(grid);
