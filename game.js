var board = -1;
var butto = 0;
var curbut = 0;
var asyncCheck = 0;
var cancelCheck = 0;
var party = ['Bloba', 'Red Dragon', '-', '-', '-'];
var oparty = ['Packun', 'Blue Dog', '-', '-', '-'];
var moves = ['Anchor', 'Slap', 'Move', '-', '-'];
var omoves = ['Bite', 'Poison Smoke', '-', '-', '-'];
var selected = 'Something went wrong!'
var tcord = 'C1';
var otcord = 'C5';
var pieces = ['-', '-', '-', '-', '-'];
var dmgmultiplier = [1, 1, 1, 1, 1];
var piecescount = 0;
var opieces = ['-', '-', '-', '-', '-'];
var odmgmultiplier = [1, 1, 1, 1, 1];
var opiecescount = 0;
var tileselected = '';
var prevtileselected = '';
var health = ['500', '-', '-', '-', '-'];
var ohealth = ['125', '-', '-', '-', '-'];
var platurn = false;
var gameover = false;
var h = '';
var t = '';
var cheer = '';
var playerName = 'Jim9174';
var activeEffects = [[]];
var pstatus = [
[0,0,0,0,0], // This is for poison
[0,0,0,0,0], // Haven't decided
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0]
];
var ostatus = [
[0,0,0,0,0], // This is for poison
[0,0,0,0,0], // Haven't decided
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0]
];


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


// This function is called whenever the grid is clicked, and it decides what to do with it depending on the value of board.
function gridclicked(thiss)
{
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
  	display(document.getElementById(thiss).innerHTML);
  }
	
  else if(board == 3) // For when a creature has used bite.
  {
  	
  }
  
  else if(board == 4) //For when a creature has used slap.
  {
  	boardslap(thiss);
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
    	unsslap();
      document.getElementById('head').innerHTML = 'Which move would you like to use with this piece?';
      document.getElementById(tileselected).style.background = '#40ede4';
      cancelCheck = 0;
      board = 1;
    }
  	disappear('cancel');
    appearButtons();
  }


function fturn()
{
	document.getElementById('C5').innerHTML = 'T2';
  document.getElementById('C1').innerHTML = 'T1';
  
  document.getElementById('head').innerHTML = 
  'Which Creature would you like to place first?';
  //console.log("This is what this game thinks pstatus should look like:");
  //console.log(pstatus);
  //console.log("This is what this game thinks ostatus should look like:");
  //console.log(ostatus);
  
  //loopcalcgrid('E5', 2, makepurple);
  
  document.getElementById('move1').innerHTML = party[0];
  document.getElementById('move2').innerHTML = party[1];
  document.getElementById('move3').innerHTML = party[2];
  document.getElementById('move4').innerHTML = party[3];
  document.getElementById('move5').innerHTML = party[4];
  
  document.getElementById('cancel').style.display = 'none';
  
  //console.log("We got to the fturn function");
}


function oturn()
{
	platurn = false;
  //console.log("The value of tileselected is: " + tileselected);
  //console.log("The value of pieces[0] is: " + pieces[0]);
  //document.getElementById(tileselected).style.background = 'orange';
  
  var i = 0;
  while(i<piecescount)
  {
  	document.getElementById(pieces[i]).style.background = 'orange';
    i++;
  }
  
  //pieces[piecescount] = tileselected;
  //piecescount++;
  
	document.getElementById('head').innerHTML =
  'The battle has started! Select a piece.';
  
	document.getElementById('C4').innerHTML = oparty[0];
  //console.log("This is before the display function call.")
  
  //console.log("This is after the display function call.")
  opieces[opiecescount] = 'C4';
  //console.log("The value of opieces[opiecescount] is: " + opieces[opiecescount]);
  //console.log("The value of opiecescount is: " + opiecescount);
  opiecescount++;
  board = 1;
  
  
  /*
  curcre = cre.child(oparty[0]);
      
      curcre.on("value", function(data) 
  		{
   			var np = data.val();
   			if(platurn)
        {
        	health[piecescount] = np.Health;
        }
        else
        {
        	//console.log("We are assigning ohealth in the oturn function with the piecescount value of: " + piecescount);
        	ohealth[piecescount] = np.Health;
        }
           
	 		});
     */
     
  display(oparty[0]);
  pturns();
  
}


async function beforepturns()
{
	asyncCheck = 1;
  while(true)
  {
  	if(asyncCheck == 2)
    {
    	pturns();
      asyncCheck = 0;
      console.log("Ah for god sake, how did we get in here and not escape the loop??????????????");
      break;
    }
    else
    {
    	await sleep(500);
      //console.log("Help! We are trapped in a while(true) loop! D: (The beforepturns one)");
      //console.log("Also, the value of asyncCheck is: " + asyncCheck);
    }
  }
}


function pturns()
{
	display('Packun');
  display('Bloba');
	console.log("We got to the pturns() function");
	document.getElementById('select').innerHTML ='Please select a piece.';
  document.getElementById('head').innerHTML ='Please select a piece.';
  
  var i = 0;
  while(i<5)
  {
  	if(pieces[i] != '-')
    {
    	console.log("pieces[" + i + "] = " + pieces[i]);
  		document.getElementById(pieces[i]).style.background = 'orange';
    }
    i++;
  }
  
  /*
  document.getElementById('move1').innerHTML = moves[0];
  document.getElementById('move2').innerHTML = moves[1];
  document.getElementById('move3').innerHTML = moves[2];
  document.getElementById('move4').innerHTML = moves[3];
  document.getElementById('move5').innerHTML = moves[4];
  */
  board = 1;
  butto = -1;
}


function pturn()
{
  document.getElementById('head').innerHTML ='Which move would you like to use with this piece?';
	document.getElementById('select').innerHTML ='Please select a move:';
  
  document.getElementById('move1').innerHTML = moves[0];
  document.getElementById('move2').innerHTML = moves[1];
  document.getElementById('move3').innerHTML = moves[2];
  document.getElementById('move4').innerHTML = moves[3];
  document.getElementById('move5').innerHTML = moves[4];
  
  
}


function unpturn()
{
	butto = -1;
	document.getElementById('head').innerHTML = 
      'Please select a piece.';
	document.getElementById('move1').innerHTML = '-';
  document.getElementById('move2').innerHTML = '-';
  document.getElementById('move3').innerHTML = '-';
  document.getElementById('move4').innerHTML = '-';
  document.getElementById('move5').innerHTML = '-';
}


function disappear(id)
{
	document.getElementById(id).style.display = 'none';
}


function disappearButtons()
{
	document.getElementById('move1').style.display = 'none';
  document.getElementById('move2').style.display = 'none';
  document.getElementById('move3').style.display = 'none';
  document.getElementById('move4').style.display = 'none';
  document.getElementById('move5').style.display = 'none';
}


function appearButtons()
{
	document.getElementById('move1').style.display = 'inline';
  document.getElementById('move2').style.display = 'inline';
  document.getElementById('move3').style.display = 'inline';
  document.getElementById('move4').style.display = 'inline';
  document.getElementById('move5').style.display = 'inline';
}


function appear(id)
{
	document.getElementById(id).style.display = 'inline';
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
    pieces[0] = newcord;
    document.getElementById('head').innerHTML = 
    'Please wait for the opponent to select a move...';
    disappearButtons();
    setTimeout(function() { randai(pieces[0]); }, 1800);
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
  
   /*
  
  	var cordd = '';
    
  	cordd = calcgridV(cord, '-', 1);
    if(cordd != '')
    {
    	document.getElementById(cordd).style.background = 'orange';
    }
  	
  
  	cordd = calcgridV(cord, '+', 1);
  	document.getElementById(cordd).style.background = 'orange';
  
  	cordd = calcgridH(cord, '-', 1);
  	document.getElementById(cordd).style.background = 'orange';
  
  	cordd = calcgridH(cord, '+', 1);
  	document.getElementById(cordd).style.background = 'orange';
    */
    
    loopcalcgrid(cord, 1, makeorange);
    
    disappearButtons();
    appear('cancel');
  
  	board = 4;
    cancelCheck = 1;
  }
}


function unsslap()
{
		var cordd = '';
  	//console.log("The value of thiss in the unslap function is: " + thiss);
  	cordd = calcgridV(tileselected, '-', 1);
  	document.getElementById(cordd).style.background = '#b3b3b3';
  
  	cordd = calcgridV(tileselected, '+', 1);
  	document.getElementById(cordd).style.background = '#b3b3b3';
  
  	cordd = calcgridH(tileselected, '-', 1);
  	document.getElementById(cordd).style.background = '#b3b3b3';
  
  	cordd = calcgridH(tileselected, '+', 1);
  	document.getElementById(cordd).style.background = '#b3b3b3';
  
}


function unslap()
{
		var cordd = '';
  	//console.log("The value of thiss in the unslap function is: " + thiss);
  	cordd = calcgridV(prevtileselected, '-', 1);
  	document.getElementById(cordd).style.background = '#b3b3b3';
  
  	cordd = calcgridV(prevtileselected, '+', 1);
  	document.getElementById(cordd).style.background = '#b3b3b3';
  
  	cordd = calcgridH(prevtileselected, '-', 1);
  	document.getElementById(cordd).style.background = '#b3b3b3';
  
  	cordd = calcgridH(prevtileselected, '+', 1);
  	document.getElementById(cordd).style.background = '#b3b3b3';
  
}


function bite(cord)
{
	console.log("We now got to the bite function");
  platurn = false;
	if(platurn)
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
  	if(calcgridV(cord, '-', 1) != '' || calcgridV(cord, '-', 1) != '		T2')
    {
    	corddd.push(calcgridV(cord, '-', 1));
    	count++;
    }
    
    if(calcgridH(cord, '-', 1) != '' || calcgridH(cord, '-', 1) != '		T2')
    {
    	corddd.push(calcgridH(cord, '-', 1));
    	count++;
    }
    
    if(calcgridV(cord, '+', 1) != '' || calcgridV(cord, '+', 1) != '		T2')
    {
    	corddd.push(calcgridV(cord, '+', 1));
    	count++;
    }
    
    if(calcgridH(cord, '+', 1) != '' || calcgridH(cord, '+', 1) != '		T2')
    {
    	corddd.push(calcgridH(cord, '+', 1));
    	count++;
    }
    
    if(count == 0)
    {
    	//console.log("This code executes before...");
    	document.getElementById('head').innerHTML = 
      "The Packun tried to use bite, but there was no target!";
      //console.log("This code executes after!");
    }
    
    else
    {
    	var x = Math.floor(Math.random() * count)
      health[0] = health[0] - 70;
      //console.log("This code executes beforeeeeeeeee...");
      document.getElementById('head').innerHTML = 
      "The Packun used bite! Chomp!";
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


async function smokeanimation() 
{
  loopcalcgrid(opieces[0], 1, makepurple);
  await sleep(2000);
  loopcalcgrid(opieces[0], 1, makegrey);
  await sleep(600);
  loopcalcgrid(opieces[0], 2, makepurple);
  await sleep(2000);
  loopcalcgrid(opieces[0], 2, makegrey);
}


function applypoison(cord)
{
	// First check if any pieces are on that square
  var b = false;
  var i = 0;
  while(i < 5)
  {
  	if(pieces[i] == cord)
    {
    	console.log("Poison DOES get applied to my pieces.")
      console.log("pstatus[0][" + i + "] = " + pstatus[0][i]);
    	pstatus[0][i] += 2;
      console.log("pstatus[0][" + i + "] = " + pstatus[0][i]);
      b = true;
      break;
    }
    i++;
  }
  
  // Then check if any opieces are on that square
  i = 0;
  if(!b)
  {
  	while(i < 5)
  	{
  		if(opieces[i] == cord)
    	{
    		ostatus[0][i] += 2;
        
        break;
    	}
    	i++;
    }
    
  }
  
}


function applypoisondmg()
{
	//Check if the players pieces need to take any poison damage
	var poisonarray = pstatus[0];
  var i = 0;
  var str = '';
  while(i < 5)
  {
  	console.log("poison array[" + i + "] = " + poisonarray[i]);
      console.log("health[" + i + "] = " + health[i]);
      console.log("pieces[" + i + "] = " + pieces[i]);
  	if(poisonarray[i] > 0)
    {
    	console.log("poison array[" + i + "] = " + poisonarray[i]);
      console.log("health[" + i + "] = " + health[i]);
      console.log("pieces[" + i + "] = " + pieces[i]);
    	health[i] -= 25;
      pstatus[0][i]--;
      str = document.getElementById('head').innerHTML;
      document.getElementById('head').innerHTML = party[i] + " was hurt by poison!";
      sleep(2000).then(() => { document.getElementById('head').innerHTML = str; });
    }
    i++;
  }
  
  // Check if the opponents pieces need to take any poison damage
  poisonarray = ostatus[0];
  i = 0;
  while(i < 5)
  {
  	if(poisonarray[i] > 0)
    {
    	ohealth[i] -= 25;
      ostatus[0][i]--;
      str = document.getElementById('head').innerHTML;
      document.getElementById('head').innerHTML = oparty[i] + " was hurt by poison!";
      sleep(2000).then(() => { document.getElementById('head').innerHTML = str; });
    }
    i++;
  }
  asyncCheck = 3;
  console.log("We got to the end of the applypoisondmg function");
}


function makegrey(cord)
{
	document.getElementById(cord).style.background = '#b3b3b3';
}


function loopcalcgrid(cord, radius, callback)
{
  var cordd = '';
  var corddd = '';
  //var tiless = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  //var tcount = 0;
  
  while (radius > 0)
  {
  	cordd = calcgridV(cord, '+', radius);
    if(cordd != '' && cordd != cord)
      {
    	callback(cordd)
      }
    
    let t = radius;
    let tt = 0;
    
    while(t > 0)
    {
    
    	tt = tt + 1;
    	t = t - 1;
      
    	cordd = calcgridV(cord, '+', t);
    	if(cordd != '' && cordd != cord)
      {
    	callback(cordd)
      }
    
    	corddd = calcgridH(cordd, '+', tt);
    	if(corddd != '' && corddd != cord)
      {
    	callback(corddd)
      }
    
    	corddd = calcgridH(cordd, '-', tt);
    	if(corddd != '' && corddd != cord)
      {
    	callback(corddd);
      }
    
    	
    }
    
    cordd = calcgridV(cord, '-', radius);
    if(cordd != '' && cordd != cord)
      {
    	callback(cordd)
      }
    
    t = radius;
    tt = 0;
    
    while(t > 0)
    {
    
    	tt++;
    	t--;
    
    	cordd = calcgridV(cord, '-', t);
      if(cordd != '' && cordd != cord)
      {
    	callback(cordd)
      }
    
    	corddd = calcgridH(cordd, '+', tt);
    	if(corddd != '' && corddd != cord)
      {
    	callback(corddd)
      }
    
    	corddd = calcgridH(cordd, '-', tt);
    	if(corddd != '' && corddd != cord)
      {
    	callback(corddd)
      }
    
    	
    }
    
    t = radius
    
    
    while(t>0)
    {
    	t--;
      
      cordd = calcgridH(cord, '+', t);
    	if(cordd != '' && cordd != cord)
      {
    	callback(cordd)
      }
    }
    
    t = radius
    
    
    while(t>0)
    {
    	t--;
      
      cordd = calcgridH(cord, '-', t);
    	if(cordd != '' && cordd != cord)
      {
    	callback(cordd)
      }
    }
    radius--;
  }
    
    // I think I still need to code for the 1 radius base case, but
    // I definitely just need to test this first.
  
  
}


function makepurple(cord)
{
	document.getElementById(cord).style.background = 'purple';
  //console.log(cord);
}


function makeorange(cord)
{
	document.getElementById(cord).style.background = 'orange';
}


function sleep(ms) 
{
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function randai(cord)
{
	//console.log("We got to the randai function!")
  document.getElementById('move1').innerHTML = '-';
  document.getElementById('move2').innerHTML = '-';
  document.getElementById('move3').innerHTML = '-';
  document.getElementById('move4').innerHTML = '-';
  document.getElementById('move5').innerHTML = '-';
	var count = 0;
	for(var i = 0; i<5; i++)
  {
  	if(omoves[i] != '-')
    {
    	count++;
    }
  }
  var temp = Math.floor(Math.random() * count);
  var temppp = omoves[temp]
  var tempp = removespaces(temppp);
  //console.log("The value of tempp is: " + tempp);
  //console.log("The value of cord is: " + cord);
  document.getElementById(tileselected).style.background = '#b3b3b3'
  
  movetofunction(tempp, cord);
  
  while(true)
  {
  	if(asyncCheck == 1)
    {
    	asyncCheck = 0;
    	applyeotdmg();
      
      break;
    }
    else
    {
    	await sleep(500);
      //console.log("Help! We are trapped in a while(true) loop! D: (The randai one)");
    }
  	
  }
  
  board = 1;
  butto = -1;
}


async function applyeotdmg()
{
	// This function applies all end of turn damage (e.g. poison)
  //console.log("We got to the applyeotdmg function")
  applypoisondmg();
   while(true)
  {
  	//console.log("We got inside the applyeotdmg loop");
  	if(asyncCheck == 3)
    {
    	// Apply the next eot damage
      asyncCheck = 2; // Once all the eot damage has been applied, make the value of asyncCheck = 2
      break;
    }
    else
    {
    	await sleep(500);
      //console.log("Help! We are trapped in a while(true) loop! D: (The applyeotdmg one)");
    }
  	
  }
  
}


function deceotmoves()
{
	// decrements all moves with properties that make them last multiple turns
  
}


function movetofunction(movee, fparam)
{
	//console.log("We got to the movetofunction function with the " + movee + " parameter and also the " + fparam + " parameter.")
	switch(movee) 
  {
  	case 'bite':
    	bite(fparam);
    	break;
  	case 'poisonsmoke':
    	poisonsmoke(fparam);
      break;
    case 'slap':
    	slap(fparam);
    	break;
    case 'move':
    	move(fparam);
    	break;
  	case 'anchor':
    	anchor(fparam);
      break;
  	default:
    	console.log("You either spelled the move or the function wrong probably.")
	}
}


function removespaces(sent)
{
	var l = sent.length;
  var i = 0;
  var j = 0;
  var str1 = '';
  var str2 = '';
  while(i<l)
  {
  	if(sent.charAt(i) == ' ')
    {
    	j = i + 1;
      str1 = sent.substring(0,i)
      str2 = sent.substring(j,l)
      sent = str1.concat(str2);
      i--;
    }
    i++;
  }
  sent = sent.toLowerCase();
  return sent;
}


function calcgridV(cord, plus, num)
{
	var str = '';
	var str1 = cord.substring(0,1);
	var str2 = cord.substring(1,2);
  var numb = parseInt(str2);
	if(plus == '+')
  {
  	if(numb+num > 5)
    {
    	return '';
    }
    else
    {
    	numb = numb + num;
      str2 = numb.toString();
      str = str1.concat(str2);
      return str;
    }
  }
  else if(plus == '-')
  {
  	if(numb-num < 1)
    {
    	return '';
    }
    else
    {
    	numb = numb - num;
      str2 = numb.toString();
      str = str1.concat(str2);
      return str;
    }
  }
  else
  {
  	return 'You need to send either a plus or a minus!'
  }
}


function calcgridH(cord, plus, num)
{
	var str = '';
	var str1 = cord.substring(0,1);
  // console.log('This is the value of str1: ' + str1);
	var str2 = cord.substring(1,2);
  // console.log('This is the value of str2: ' + str2);
  
	if(plus == '+')
  {
  	while(num>0)
    {
    	switch(str1) 
  		{
  			case 'A':
    		str1 = 'B';
    		break;
        
  			case 'B':
    		str1 = 'C';
      	break;
        
        case 'C':
        str1 = 'D';
        break;
        
        case 'D':
        str1 = 'E';
        break;
        
  			default:
    		return '';
			}
      num--;
    }
    
    str = str1.concat(str2);
    
    return str;
  }
  else if(plus == '-')
  {
  	while(num>0)
    {
    	switch(str1) 
  		{
  			case 'E':
    		str1 = 'D';
    		break;
        
  			case 'B':
    		str1 = 'A';
      	break;
        
        case 'C':
        str1 = 'B';
        break;
        
        case 'D':
        str1 = 'C';
        break;
        
  			default:
    		return '';
			}
      num--;
    }
    str = str1.concat(str2);
    return str;
  }
  else
  {
  	return 'You need to send either a plus or a minus!'
  }
}


function display(str)
{
	var helix = health[0];
  
  // I need to change this to check for whether the creature is the player's or the opponent's.
	if (str == 'Packun')
  {
  	helix = ohealth[0];
  }
  
  
  
  curcre = cre.child(str)
  
  curcre.on("value", function(data) 
  {
  	var np = data.val();
    h = np.Health
    t = np.Trait
    
	});
  
  //console.log("The value of h is " + h);
  //console.log("The value of t is " + t);
  
  var traa = tra.child(t);
  // console.log("The value of traa: " + traa);
  
  traa.on("value", function(data) 
  {
  	var np = data.val();
    cheer = np.Data
    
	});
  
  // console.log("The value of cheer: " + cheer);
  
  document.getElementById('display1').innerHTML = 
  str + '\'s health is currently at ' + helix + '/' + h + '.';
  document.getElementById('display2').innerHTML = 
  str + '\'s trait is ' + t + '.';
  document.getElementById('display3').innerHTML = 
  t + ': ' + cheer;
  
  
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


function applyEffect(effect, turns, b, j)
{
	var l = activeEffects.length;
  var i = 0;
  var bb = false;
  if(l == 0)
  {
  	bb = true;
  }
  else
  {
  	while(i < l)
    {
    	if(activeEffects[i][1] == 0)
      {
      	bb = true;
        break;
      }
      i++;
    }
  }
  if(bb)
  {
  	activeEffects[i][0] = effect;
    activeEffects[i][1] = turns;
    activeEffects[i][2] = b;
    activeEffects[i][3] = j;
  }
  else
  {
  	// This is the code that is executed when the activeEffects array is full.
    // Here I need to code a function that adds another row to the 2D arrray,
    // and then fills that with the appropriate values.
    
    activeEffects[i].push([]);
    i++;
    activeEffects[i][0] = effect;
    activeEffects[i][1] = turns;
    activeEffects[i][2] = b;
    activeEffects[i][3] = j;
    
  }
}


function decrementEffects()
{
	var i = 0;
  var l = activeEffects.length;
  var b = true;
  var j = 0;
  var s = "";
  var c = "";
  var t = 0;
  
  while(i < l)
  {
  	if(activeEffects[i][1] != 0)
    {
    	activeEffects[i][1]--;
      t = activeEffects[i][1];
      b = activeEffects[i][2];
      j = activeEffects[i][3];
      
      if(b)
      {
      	s = pieces[j];
      }
      else
      {
      	s = opieces[j];
      }
      
      c(s,t);
      
    }
    
    i++;
  }
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
    	document.getElementById(curbut).style.backgroundImage = 'linear-gradient(#a88f8f, #141313)';
  		document.getElementById(thiss).innerHTML = selected
    	pieces[piecescount] = thiss;
    	piecescount++;
      curcre = cre.child(selected);
      
      
      curcre.on("value", function(data) 
  		{
   			var np = data.val();
   			if(platurn)
        {
        	health[piecescount] = np.Health;
        }
        else
        {
        	console.log("We are assigning ohealth in the plapieces function with the piecescount value of: " + piecescount);
        	ohealth[piecescount] = np.Health;
        }
           
	 		});
      
      console.log('The value of health[piecescount] is ' + health[piecescount]);
      console.log('The value of ohealth[piecescount] is ' + ohealth[piecescount]);
    	
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
      
    	document.getElementById('head').innerHTML =
      'Your opponent is selecting, please wait...';
    	setTimeout(oturn, 1800);
    
    }
    else if(check == '' && document.getElementById(thiss).innerHTML != '')
    {
    	display(document.getElementById(thiss).innerHTML);
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
    console.log("The value of pieces[" + i + "] is: " + pieces[i]);
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
    display(document.getElementById(thiss).innerHTML);
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
    document.getElementById(thiss).style.background = '#40ede4'
    butto = 1;
    appearButtons();
    pturn();
  }
  else
  {
    unpturn();
    disappearButtons();
  }
}


async function boardslap(thiss)
{
	var str = document.getElementById(thiss).style.background.substring(0,6);
    //console.log("str = " + str);
  	if (str == 'orange')
    {
    	if (document.getElementById(thiss).innerHTML == '')
      {
      	document.getElementById('head').innerHTML = 
    		'There is no enemy on this square. :('
      }
      else
      {
      	ohealth[0] -= 30;
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
        	setTimeout(function() { randai(pieces[0]); }, 1800);
        }
      }
    }
    else
    {
    document.getElementById('head').innerHTML = 
    'Please choose a valid tile' 
    }
}


function setAsyncCheck(x)
{
	asyncCheck = x;
}


function opdamage() //To check for deaths when the opponent takes damage
{
	console.log("We got to the opdamage() function!");
	var bool = false;
  /*
  console.log("The value of opieces[0] = " + opieces[0]);
  console.log("The value of opieces[1] = " + opieces[1]);
  console.log("The value of opieces[2] = " + opieces[2]);
  console.log("The value of opieces[3] = " + opieces[3]);
  console.log("The value of opieces[4] = " + opieces[4]);
  */
  
	i = 0;
  while(i<5)
  {
  	if(ohealth[i] != '-')
    {
    	if(ohealth[i] <= 0)
      {
      	opdeath(i);
        bool = true;
      }
    }
    i++;
  }
  if(!bool)
  {
  	asyncCheck = 1;
  }
}


function opdeath(x)
{
	console.log("We got to the opdeath() function!");
  console.log("The value of opieces[x] = " + opieces[x]);
  console.log("The value of x is: " + x);
	document.getElementById(opieces[x]).innerHTML = '';
  opieces[x] = '-';
  document.getElementById('head').innerHTML = oparty[x] + " has died!";
  
  var b = true;
  var i = 0;
  
  console.log("The value of ohealth[0] is: " + ohealth[0]);
  console.log("The value of ohealth[1] is: " + ohealth[1]);
  console.log("The value of ohealth[2] is: " + ohealth[2]);
  console.log("The value of ohealth[3] is: " + ohealth[3]);
  console.log("The value of ohealth[4] is: " + ohealth[4]);
  
  // This loop checks to see if everyon on the opponent's team is dead
  while(i<5)
  {
  	
  	if(ohealth[i] > 0)
    {
    	console.log("The value of ohealth[i] is: " + ohealth[i]);
      console.log("The value of i is: " + i);
    	b = false;
      break;
    }
    i++;
  }
  
  console.log("The value of b is: " + b);
  
  if(b)
  {
  	setTimeout(playerwin, 1800);
  }
  else
  {
  	asyncCheck = 1;
  }
}


// This function is called when all of the oponnent's creatures are dead and awards the player the win.
function playerwin()
{
	console.log("We got to the playerwin() function!");
	document.getElementById('head').innerHTML = playerName + " has won!";
  document.getElementById('select').innerHTML = "Congrats " + playerName + "!";
  
  document.getElementById('move1').innerHTML = 'G';
  document.getElementById('move2').innerHTML = 'G';
  document.getElementById('move3').innerHTML = 'W';
  document.getElementById('move4').innerHTML = 'P';
  document.getElementById('move5').innerHTML = '!';
  
  gameover = true;
  asyncCheck = 1;
  board = -1;
  butto = -1
}