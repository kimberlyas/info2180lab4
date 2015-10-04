// JavaScript Document
'use strict';
var crossed = false; // flag to determine if a boundary is crossed

// Write a window.onload handler that sets up any necessary event handlers on the page.
window.onload = function() 
{
	// Make it so that all walls of the maze turn red when the mouse enters any one of them
    var walls = $$("div#maze div.boundary");
    for (var i = 0; i < walls.length; i++) 
	{
        walls[i].onmouseover = crossedWall;
    }
	$("end").onmouseover = eofMaze;
	$("start").onclick = startMaze;
};


// Handle the appropriate event on the appropriate wall by making it turn red.
function crossedWall() 
{
    $("boundary1").addClassName("youlose");
	crossed = true;
}



// Make it so that if the user reaches the end of the maze, a congratulatory "You win!" alert message appears
function eofMaze()
{
	// Make the "You win" and "You lose" messages appear inside the page itself.
	if (crossed) // user crosses a boundary
	{
		$("status").replaceWith("You Lose!");
		//alert("You lose!");
	}
	else
	{
		//alert("You win!");
		$("status").replaceWith("You Win!");
	}
}

//  Make it so that when the user clicks the mouse on the Start square the maze state will reset.
function startMaze()
{
	if (crossed) 
	{
		// reset
		var walls = $$("div#maze div.boundary");
    	for (var i = 0; i < walls.length; i++) 
		{
        	walls[i].addClassName("boundary");
    	}
	}
}
