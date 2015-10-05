// JavaScript Document
var crossed = false; // flag to determine if a boundary is crossed
var clicked = false; // flag to determine if the start element has been clicked

// Write a window.onload handler that sets up any necessary event handlers on the page.
window.onload = function() 
{
	"use strict";
	$("end").onmouseover = eofMaze;
	$("start").onclick = startMaze;
	// Make it so that all walls of the maze turn red when the mouse enters any one of them
	var walls = $$("div#maze div.boundary");
    for (var i = 0; i < walls.length; i++) 
	{
        walls[i].onmouseover = crossedWall;
    }
	// Finding the ends of the maze
	$(document.body).onmousemove = function(e)
	 {
		// Coordinates in browser window
  		console.log('mouse X coord: ' + e.clientX);
  		console.log('mouse Y coord: ' + e.clientY);

  		// The maze element dimensions
  		var maze = $$("div#maze");
  		var mazeWidth = maze[0].offsetWidth;
  		var mazeHeight = maze[0].offsetHeight;
  		var mazeStartX = maze[0].offsetLeft;
  		var mazeStartY = maze[0].offsetTop;

  		// Calculate the end points of the maze div
  		var mazeEndX = parseInt(mazeStartX) + parseInt(mazeWidth);
  		var mazeEndY = parseInt(mazeStartY) + parseInt(mazeHeight);

  		// Some debug information to know what the start and end coords are
  		console.log('maze start X coord: ' + mazeStartX);
  		console.log('maze start Y coord: ' + mazeStartY);
  		console.log('maze end x coord: '   + mazeEndX);
  		console.log('maze end Y coord: '   + mazeEndY);

  		// now if we click on start
  		if (clicked) 
		{
      		// check if the mouse pointer is outside the maze
      		if (e.clientX < mazeStartX || 
          		e.clientY < mazeStartY || 
          		e.clientY > mazeEndY   ||
          		e.clientX > mazeEndX) 
			{
          		outsideMaze();
      		}
 		 }
	 };
};


// Handle the appropriate event on the appropriate wall by making it turn red.
function crossedWall() 
{"use strict";
    //$("boundary1").addClassName("youlose");
	crossed = true;
	var walls = $$("div#maze div.boundary");
	for (var i = 0; i < walls.length; i++) 
	{
        walls[i].addClassName("youlose");
    }
	
	$("status").textContent = "You Lose!";
}



// Make it so that if the user reaches the end of the maze, a congratulatory "You win!" alert message appears
function eofMaze()
{"use strict";
	// Make the "You win" and "You lose" messages appear inside the page itself.
	if (crossed) // user crosses a boundary
	{
		$("status").textContent = "You Lose!";
		//alert("You lose!");
	}
	else
	{
		//alert("You win!");
		$("status").textContent = "You Win!";
	}
}

//  Make it so that when the user clicks the mouse on the Start square the maze state will reset.
function startMaze()
{"use strict";
	clicked = true;
	$("status").textContent = "Ready to play!";
	// reset
	var walls = $$("div#maze div.boundary");
    for (var i = 0; i < walls.length; i++) 
		{
        	walls[i].removeClassName("youlose");
    	}
	crossed = false; // reset variable as well
}

// Make it so that if the user moves the mouse anywhere outside the maze after clicking the Start area, the walls will light up red and the 			   player will lose the game
function outsideMaze()
{"use strict";
	if (clicked)
	{
		//$("boundary1").addClassName("youlose");
		$("status").textContent = "Cheater! You Lose!";
		var walls = $$("div#maze div.boundary");
		for (var i = 0; i < walls.length; i++) 
		{
        	walls[i].addClassName("youlose");
    	}
		clicked = false;
	}
}
 

 
