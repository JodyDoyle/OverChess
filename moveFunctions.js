async function boardslap(thiss)
{
	var str = document.getElementById(thiss).style.background.substring(0,6);
    //console.log("str = " + str);
  	if (str == 'orange')
    {
    	if (document.getElementById(thiss).innerHTML == '')
      {
      	document.getElementById('head').innerHTML = 
    		'There is no enemy on this square. :(';
      }
      else
      {
      	
        // Loops through the opponents until it reaches the enemy that you are slapping
        str = document.getElementById(thiss).innerHTML;
        var i = 0;
        while(i<5)
        {
        	if(oparty[i] == str)
          {
          	ohealth[i] -= 30;
            i = 5;
          }
          
          i++;
        }
        if(i == 6)
        {
        	unslap();
        	asyncCheck = 0;
        	opdamage();
        	while(true)
        	{
        		if(asyncCheck == 1)
          	{
          		asyncCheck = 0;
            
          		break;
          	}
          	else
          	{
          		await sleep(500);
          	}
        	}
        	if(!gameover)
        	{
        		document.getElementById('head').innerHTML = 
    				'Please wait for the opponent to select a move...';
          	disappear('cancel');
            changepiecescolour('#b3b3b3');
        		setTimeout(function() { randai(opieces[0]); }, 1800);
        	}
        }
        else
        {
        	document.getElementById('head').innerHTML = 
    			'There is no enemy on this square. :(';
        }
        
      }
    }
    else
    {
    document.getElementById('head').innerHTML = 
    'Please choose a valid tile' 
    }
}


async function boardfirebreath(thiss)
{
	var str = document.getElementById(thiss).style.background.substring(0,6);
    //console.log("str = " + str);
  	if (str == 'orange')
    {
    	if (document.getElementById(thiss).innerHTML == '')
      {
      	document.getElementById('head').innerHTML = 
    		'There is no enemy on this square. :(';
      }
      else
      {
      	
        // Loops through the opponents until it reaches the enemy that you are slapping
        str = document.getElementById(thiss).innerHTML;
        var i = 0;
        while(i<5)
        {
        	if(oparty[i] == str)
          {
          	ohealth[i] -= 40;
            i = 5;
          }
          
          i++;
        }
        if(i == 6)
        {
        	unfirebreath();
        	asyncCheck = 0;
        	opdamage();
        	while(true)
        	{
        		if(asyncCheck == 1)
          	{
          		asyncCheck = 0;
            
          		break;
          	}
          	else
          	{
          		await sleep(500);
          	}
        	}
        	if(!gameover)
        	{
        		document.getElementById('head').innerHTML = 
    				'Please wait for the opponent to select a move...';
          	disappear('cancel');
            changepiecescolour('#b3b3b3');
        		setTimeout(function() { randai(opieces[0]); }, 1800);
        	}
        }
        else
        {
        	document.getElementById('head').innerHTML = 
    			'There is no enemy on this square. :(';
        }
        
      }
    }
    else
    {
    document.getElementById('head').innerHTML = 
    'Please choose a valid tile' 
    }
}


async function boardslither(thiss)
{
	var str = document.getElementById(thiss).style.background.substring(0,6);
    //console.log("str = " + str);
  	if (str == 'orange')
    {
    	if (document.getElementById(thiss).innerHTML != '')
      {
      	document.getElementById('head').innerHTML = 
    		'This square is occupied';
      }
      else
      {
        // Move the creature to this tile and pass to next turn
        
  			
  			
    		document.getElementById(thiss).innerHTML = document.getElementById(actualtileselected).innerHTML;
  			document.getElementById(actualtileselected).innerHTML = '';
        pieces[pieces.indexOf(actualtileselected)] = thiss;
    		document.getElementById('head').innerHTML = 
    		'Please wait for the opponent to select a move...';
        unslither();
    		disappear('cancel');
        changepiecescolour('#b3b3b3');
    		setTimeout(function() { randai(opieces[0]); }, 1800);
  			
      }
    }
    else
    {
    document.getElementById('head').innerHTML = 
    'Please choose a valid tile' 
    }
}


function anchor(cord)
{
	// halves damage taken for 3 turns.
}


function move(cord)
{
	var newcord = calcgridV(cord, '+', 1);
  if(newcord == '')
  {
  	// Invalid move!
    document.getElementById(tileselected).style.background = '#40ede4';
    document.getElementById('head').innerHTML = 'You cannot move there, there is no more space on the board.';
  }
  else if(document.getElementById(newcord).innerHTML != '')
  {
  	// Invalid move!
    document.getElementById(tileselected).style.background = '#40ede4';
    document.getElementById('head').innerHTML = 'You cannot move there, there is already a piece in that spot.';
  }
  else
  {
  	document.getElementById(cord).innerHTML = '';
    document.getElementById(newcord).innerHTML = selected;
    pieces[pieces.indexOf(cord)] = newcord;
    document.getElementById('head').innerHTML = 
    'Please wait for the opponent to select a move...';
    disappearButtons();
    changepiecescolour('#b3b3b3');
    setTimeout(function() { randai(opieces[0]); }, 1800);
  }
}


function slap(cord)
{
	//console.log("We now got to the slap function");
  platurn = true;
	if(platurn)
  {
		document.getElementById('head').innerHTML = 
  	"Which piece do you wanna slap?";
    
    loopcalcgrid(cord, 1, makeorange);
    
    disappearButtons();
    appear('cancel');
  
  	board = 4;
    cancelCheck = 1;
  }
}


function unslap() // To undo all the slap stuff when slap executes
{
    loopcalcgrid(actualtileselected, 1, makegrey);
}


function firebreath(cord)
{
	document.getElementById('head').innerHTML = 
  "Which piece do you wanna firebreath?";
    
  loopcalcgrid(cord, 2, makeorange);
    
  disappearButtons();
  appear('cancel');
  
  board = 5;
  cancelCheck = 2;
}


function unfirebreath()
{
	loopcalcgrid(actualtileselected, 2, makegrey)
}


function slither(cord)
{
	document.getElementById('head').innerHTML = 
  "Where do you wanna slither to?";
    
  loopcalcgrid(cord, 2, makeorange);
    
  disappearButtons();
  appear('cancel');
  
  board = 6;
  cancelCheck = 3;
}


function unslither()
{
	loopcalcgrid(actualtileselected, 2, makegrey)
}


function run(cord)
{
  if(platurn)
  {
    calcgridH(cord, 2, makeorange);
    calcgridH(cord, -2, makeorange)
    calcgridV(cord, 2, makeorange)
    calcgridV(cord, -2, makeorange)
  }
  else
  {
    calcgridH(cord, 2, makeorange)
  }
}


function bite(cord)
{
	console.log("We now got to the bite function");
  platurn = false;
  
	if(pieces.includes(cord))
  {
		document.getElementById('head').innerHTML = 
  	"Which piece do you wanna bite?";
  
  	var cordd = '';
  	cordd = calcgridV(cord, '-', 1);
  	document.getElementById(cordd).style.background = 'orange';
  
  	cordd = calcgridV(cord, '+', 1);
  	document.getElementById(cordd).style.background = 'orange';
  
  	cordd = calcgridH(cord, '-', 1);
  	document.getElementById(cordd).style.background = 'orange';
  
  	cordd = calcgridH(cord, '+', 1);
  	document.getElementById(cordd).style.background = 'orange';
  
  	//butto = 3;
  }
  
  else
  {
  	var corddd = [];
  	var count = 0;
  	if(pieces.includes(calcgridV(cord, '-', 1)))
    {
    	corddd.push(calcgridV(cord, '-', 1));
    	count++;
    }
    
    if(pieces.includes(calcgridH(cord, '-', 1)))
    {
    	corddd.push(calcgridH(cord, '-', 1));
    	count++;
    }
    
    if(pieces.includes(calcgridV(cord, '+', 1)))
    {
    	corddd.push(calcgridV(cord, '+', 1));
    	count++;
    }
    
    if(pieces.includes(calcgridH(cord, '+', 1)))
    {
    	corddd.push(calcgridH(cord, '+', 1));
    	count++;
    }
    
    if(count == 0)
    {
    	//console.log("This code executes before...");
    	document.getElementById('head').innerHTML = 
      "The " + document.getElementById(opieces[opieces.indexOf(cord)]).innerHTML + " tried to use bite, but there was no target!";
      //console.log("This code executes after!");
    }
    else
    {
      var x = Math.floor(Math.random() * count)
      var y = pieces.indexOf(corddd[x]);
      health[y] = health[y] - 70;
      //console.log("the value of cord is: (Should be C4) " + cord)
      //console.log("the value of x is: (Should be 0 or 1) " + x)
      //console.log("the value of y is: (Should be 0 or 1) " + y)
      //console.log("The value of corddd[x] is " + corddd[x]);
      document.getElementById('head').innerHTML = 
      "The Packun used bite and bit " + document.getElementById(corddd[x]).innerHTML + "! Chomp!";
      //console.log("This code executes after");
    }
    
  }
  setTimeout(beforepturns, 1800);
}


function poisonsmoke(cord)
{
	console.log("We got to the poison smoke function")
	document.getElementById('head').innerHTML = "Poison Smoke!";
  
  var poisoned = ['-', '-', '-', '-'];
  var pcount = 0;
  
  var cord = opieces[0];
  
  var cordd = calcgridH(cord, '+', 1);
	smokeanimation();
  loopcalcgrid(opieces[0], 2, applypoison);
  
  setTimeout(beforepturns, 5000);
}


function anchorEffect(cord, turns)
{
	// need to code it so that if the turns are 0, it changes the dmg multiplier
  // need to access appropriate dmg multiplier by using the coordinate of the piece
  
  var i = 0;
  var x = 0;
  var b = true;
  
  while(i < 5)
  {
  	if(pieces[i] == cord)
    {
    	x = i;
      break;
    }
    else if(opieces[i] == cord)
    {
    	x = i;
      b = false;
      break;
    }
    i++;
  }
  
  
  
  if(b && turns == 0)
  {
  	dmgmultiplier[x] *= 2;
  }
  else if(!b && turns == 0)
  {
  	odmgmultiplier[x] *= 2;
  }
  
}




function movetofunction(callback, fparam)
{
	//console.log("We got to the movetofunction function with the " + movee + " parameter and also the " + fparam + " parameter.")
  callback = eval(callback);
  callback(fparam)
}