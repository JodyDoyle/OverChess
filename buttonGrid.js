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
      if(document.getElementById(curbut).classList == 'xer')
      {
        document.getElementById(curbut).style.backgroundImage = 'linear-gradient(#a88f8f, #141313)';
      }
      else
      {
        document.getElementById(curbut).style.backgroundImage = 'linear-gradient(#9c9c9c, #555555)';
      }
    }
    
    document.getElementById(thiss).style.background = '#40ede4';
    curbut = thiss;
    
    if(document.getElementById(thiss).classList == 'xerr')
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

      var i = 0;
      while(i<placeable.length)
      {
        document.getElementById(placeable[i]).style.background = 'orange';
        i++;
      }
    
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
      //console.log("moveclicked is the problem!");
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
  	console.log("Butto being -2 messed us up");
  	selected = document.getElementById(thiss).innerHTML;
    document.getElementById(curbut).style.backgroundImage = 'linear-gradient(#a88f8f, #141313)';
    curbut = thiss;
    document.getElementById(thiss).style.background = '#40ede4';
  }
 
}


// This function is called whenever the grid is clicked, and it decides what to do with it depending on the value of board.
function gridclicked(thiss)
{
	//console.log("thiss is: " + document.getElementById(thiss).innerHTML)
	if(board != -1)
  {
  	prevtileselected = tileselected;
		tileselected = thiss;
  }
	
  var check = calcgridV(thiss, '-', 2);
  //console.log("This is the value of check: " + check);
	if(board == 0) // For when you are placing pieces.
  {
  	plapieces(thiss, check);
  }
  else if(board == 1) // For when a piece needs to be selected
  {
  	selpiece(thiss);
  }
  
  else if(board == 2) // For when a piece has been selected.
  {
  	display(thiss);
  }
	
  else if(board == 3) // For when a creature has used bite.
  {
  	
  }
  
  else if(board == 4) // For when a creature has used slap.
  {
  	boardslap(thiss);
  }
  else if(board == 5) // For when a creature has used firebreath
  {
  	boardfirebreath(thiss);
  }
  else if(board == 6) // For when a creature has used slither
  {
  	boardslither(thiss)
  }
  else if (board == -1)
  {
  	console.log("You should not be clicking the grid rn!");
  }
  
}
  
  
// This function is called when the cancel button is clicked and cancels the move that was selected.
function cancelclicked()
{
  	if(cancelCheck == 1) // For when slap is getting canceled
    {
    	console.log("cancelCheck == 1");
    	unslap();
      document.getElementById('head').innerHTML = 'Which move would you like to use with this piece?';
      document.getElementById(actualtileselected).style.background = '#40ede4';
      cancelCheck = 0;
      board = 1;
    }
    else if(cancelCheck == 2) // For when Firebreath is being cancelled
    {
    	unfirebreath();
      document.getElementById('head').innerHTML = 'Which move would you like to use with this piece?';
      document.getElementById(actualtileselected).style.background = '#40ede4';
      cancelCheck = 0;
      board = 1;
      
    }
    else if(cancelCheck == 3) // For when Slither is being cancelled
    {
    	unslither();
      document.getElementById('head').innerHTML = 'Which move would you like to use with this piece?';
      document.getElementById(actualtileselected).style.background = '#40ede4';
      cancelCheck = 0;
      board = 1;
    }
  	disappear('cancel');
    appearButtons();
  }


  function plapieces(thiss, check)
{
	platurn = true;
  if(selected == '-')
  {
    document.getElementbyId('head').innerHTML = 'Please select a valid piece.';
  }
  else if(check == '' && document.getElementById(thiss).innerHTML == '')
  {
    document.getElementById(curbut).style.backgroundImage = 'linear-gradient(#9c9c9c, #555555)';
    document.getElementById(curbut).classList = 'xerr';
  	document.getElementById(thiss).innerHTML = selected
    pieces[piecescount] = thiss;
	  //console.log('The value of pieces[piecescount] is ' + pieces[piecescount]);
    piecescount++;
    var index = placeable.indexOf(thiss);
    placeable.splice(index,1);
    curcre = cre.child(selected);
      
    curcre.on("value", function(data) 
  	{
   		var np = data.val();
      console.log("(PL:AYER) The value of np is: " + np.Health);
      health[piecescount-1] = np.Health;
	 	});
      
    //console.log('The value of health[piecescount] is ' + health[piecescount]);
    //console.log('The value of ohealth[piecescount] is ' + ohealth[piecescount]);
    

    disappearButtons();
    document.getElementById('A1').style.background = '#b3b3b3';
    document.getElementById('B1').style.background = '#b3b3b3';
    document.getElementById('D1').style.background = '#b3b3b3';
    document.getElementById('E1').style.background = '#b3b3b3';
    document.getElementById('A2').style.background = '#b3b3b3';
    document.getElementById('B2').style.background = '#b3b3b3';
    document.getElementById('C2').style.background = '#b3b3b3';
    document.getElementById('D2').style.background = '#b3b3b3';
    document.getElementById('E2').style.background = '#b3b3b3';
    board = -1;
    //console.log("plapieces is the problem!");
      
    document.getElementById('head').innerHTML =
    'Your opponent is selecting, please wait...';
    setTimeout(oturn, 1800);
    
  }
  else if(check == '' && document.getElementById(thiss).innerHTML != '')
  {
  	display(thiss);
  }
  else
  {
  	document.getElementById('head').innerHTML = "Please choose a valid tile"
  }
}
  
  
function selpiece(thiss)
{
    
  document.getElementById('head').innerHTML = 'Please select a piece.';
  var i = 0;
    
   
  if (document.getElementById(prevtileselected).style.background.substring(0,17) == 'rgb(64, 237, 228)')
  {
    document.getElementById(prevtileselected).style.background = '#b3b3b3';
  }
  
  // This sets the all of the pieces the player owns to orange (selectable)
  while(i < 5)
  {
    //console.log("The value of pieces[" + i + "] is: " + pieces[i]);
    if(prevtileselected == pieces[i])
    {
      document.getElementById(prevtileselected).style.background = 'orange';
    }
    i++;
  }
    
    
  var str = document.getElementById(thiss).style.background.substring(0,6);
    
  if(document.getElementById(thiss).innerHTML != '')
  {
    document.getElementById(thiss).style.background = '#40ede4';
    display(tileselected);
  }
    
    // I have to make it so that only one tile can be selected 
    // (#40ede4), and also distinguish between a player's piece
    // being selected, and an opponent's piece being selected.
    // It would probably be best to use the tileselected variable.
    
    //console.log(str);
  if(str != 'orange' && document.getElementById(thiss).innerHTML == '')
  {
    unpturn();
    disappearButtons();
    document.getElementById('head').innerHTML = 'Please choose a valid tile.';
  }
  else if(str == 'orange')
  {
    document.getElementById(thiss).style.background = '#40ede4';
    butto = 1;
    actualtileselected = thiss;
    appearButtons();
    pturn(thiss);
  }
  else
  {
    unpturn();
    disappearButtons();
  }
}