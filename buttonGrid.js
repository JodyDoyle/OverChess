// This function is called whenever a move button is clicked, and it decides what to do with it depending on the value of butto.
function moveclicked(thiss)
{
	//loopcalcgrid('C3', 1, makepurple);
	if(butto == 0) // This is for when the player is still placing pieces.
  {
  	selected = document.getElementById(thiss).innerHTML;
    //console.log(curbut);
    if(curbut != 0)
    {
    	document.getElementById(curbut).style.backgroundImage = 'linear-gradient(#a88f8f, #141313)';
    }
    
    document.getElementById(thiss).style.background = '#40ede4';
    curbut = thiss;
    
    if(selected == "-")
    {
    	document.getElementById('head').innerHTML = "Please choose a valid creature";
      
      // This turns everything grey, I will later need to add a check for where I have already placed creatures
  		document.getElementById('A1').style.background = 
    	'#b3b3b3';
    	document.getElementById('B1').style.background = 
    	'#b3b3b3';
    	document.getElementById('D1').style.background = 
    	'#b3b3b3';
    	document.getElementById('E1').style.background = 
    	'#b3b3b3';
    	document.getElementById('A2').style.background = 
    	'#b3b3b3';
    	document.getElementById('B2').style.background = 
    	'#b3b3b3';
    	document.getElementById('C2').style.background = 
    	'#b3b3b3';
    	document.getElementById('D2').style.background = 
    	'#b3b3b3';
    	document.getElementById('E2').style.background = 
    	'#b3b3b3';
    }
    else
    {
    	document.getElementById('head').innerHTML = 
    	'Where would you like to place ' + selected + '?';
  	
    	// This turns everything orange, I will later need to add a check for where I have already placed creatures
  		document.getElementById('A1').style.background = 
    	'orange';
    	document.getElementById('B1').style.background = 
    	'orange';
    	document.getElementById('D1').style.background = 
    	'orange';
    	document.getElementById('E1').style.background = 
    	'orange';
    	document.getElementById('A2').style.background = 
    	'orange';
    	document.getElementById('B2').style.background = 
    	'orange';
    	document.getElementById('C2').style.background = 
    	'orange';
    	document.getElementById('D2').style.background = 
    	'orange';
    	document.getElementById('E2').style.background = 
    	'orange';
    
    	board = 0;
    }
    
    
    //butto = -2
  }
  else if(butto == 1) // For when the player is selecting a move
  {
  	var temp = document.getElementById(thiss).innerHTML;
  	if(temp != '-')
    {
    	board = -1;
  		document.getElementById(tileselected).style.background = '#b3b3b3';
  	
    	temp = removespaces(temp); // must remove spaces also.
    	//console.log("The original cord that is sent is " + thiss);
    	movetofunction(temp, tileselected);
    }
    else
    {
    	document.getElementById('head').innerHTML = "Please choose a valid move";
    }
  	
    
  }
  // For when you should not be clicking a button
  else if (butto == -1)
  {
  	console.log("You should not be clicking a button rn!");
  }
  
  else if (butto == -2)
  {
  	//console.log(curbut);
  	selected = document.getElementById(thiss).innerHTML;
    document.getElementById(curbut).style.backgroundImage = 'linear-gradient(#a88f8f, #141313)';
    curbut = thiss;
    document.getElementById(thiss).style.background = '#40ede4';
  }
 
}