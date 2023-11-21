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

  while(partynumber<=5)
  {
    partynumber++;
    //console.log("party[partynumber] is " + party[partynumber]);
    if(party[partynumber]=='-')
      break;
  }

  var movv = 'move';
  /*
  document.getElementById('move1').innerHTML = party[0];
  document.getElementById('move2').innerHTML = party[1];
  document.getElementById('move3').innerHTML = party[2];
  document.getElementById('move4').innerHTML = party[3];
  document.getElementById('move5').innerHTML = party[4];
  */
  var i = 0;
  while(i<5)
  {
    document.getElementById(movv + (i+1)).innerHTML = party[i];
    if(party[i] == '-')
    {
      document.getElementById(movv + (i+1)).classList = 'xerr';
    }
    i++;
  }
  
  document.getElementById('cancel').style.display = 'none';
  
  //console.log("We got to the fturn function");
}


function nexturn()
{
  butto = 0;
  board = -1;
  //console.log("nexturn is the problem!");
  appearButtons();
  //console.log("Buttons are appearing in the nexturn function!");
  document.getElementById('head').innerHTML = 
  'Which Creature would you like to place next?';
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
}


function oturn()
{
  // This is a set fight so the placements of the opponents pieces will be hard coded for now.
  var tempcord = 'C4'
  switch(opiecescount) {
    case 0:
      tempcord = 'C4'
      break;
    case 1:
      tempcord = 'D4'
      break;
    default:
      // Do nothing?
  }
	platurn = false;
  
	document.getElementById(tempcord).innerHTML = oparty[opiecescount];
  opieces[opiecescount] = tempcord;
  opiecescount++;
  curcre = cre.child(document.getElementById(tempcord).innerHTML);

  curcre.on("value", function(data) 
  {
   	var np = data.val();
    console.log("The value of np.Health is: " + np.Health);
    ohealth[opiecescount-1] = np.Health;
	});
  
  if(piecescount == partynumber)
  {
    board = 1;
  }
  else
  {
    nexturn();
  }
  
     
  display(opieces[opiecescount-1]);
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
      //console.log("Ah for god sake, how did we get in here and not escape the loop??????????????");
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
	//display('Packun');
  
	//console.log("We got to the pturns() function");
	document.getElementById('select').innerHTML ='Please select a piece.';
  document.getElementById('head').innerHTML ='Please select a piece.';
  changepiecescolour('orange');

  /*
  var i = 0;
  while(i<5)
  {
  	if(pieces[i] != undefined && pieces[i] != '-')
    {
    	//console.log("pieces[" + i + "] = " + pieces[i]);
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


function pturn(thiss)
{
  document.getElementById('head').innerHTML ='Which move would you like to use with this piece?';
	document.getElementById('select').innerHTML ='Please select a move:';
  
  populateMoves(thiss);

  var movv = 'move';
  var i = 0;
  while(i<5)
  {
    //console.log("moves[" + i + "] = " + moves[i]);
    if(moves[i]!=undefined && moves[i]!='-')
    {
      document.getElementById(movv + (i+1)).classList = 'xer';
      document.getElementById(movv + (i+1)).style.backgroundImage = "linear-gradient(#a88f8f, #141313)";
    }
    else
    {
      document.getElementById(movv + (i+1)).classList = 'xerr';
    }
    document.getElementById(movv + (i+1)).innerHTML = moves[i];
    i++;
  }
  
  /*
  document.getElementById('move1').innerHTML = moves[0];
  document.getElementById('move2').innerHTML = moves[1];
  document.getElementById('move3').innerHTML = moves[2];
  document.getElementById('move4').innerHTML = moves[3];
  document.getElementById('move5').innerHTML = moves[4];
  */
  
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

function populateMoves(thiss)
{
	
  curcre = cre.child(document.getElementById(thiss).innerHTML);
  cremoves = curcre.child("Moves");
  
  // This makes a variable called mar that contains all the moves of the selected creature
  cremoves.on("value", function(data) 
  {
   	var np = data.val();
   	var mar = ["", "", "", "", ""];
    mar[0] = np.move1;
    mar[1] = np.move2;
    mar[2] = np.move3;
    mar[3] = np.move4;
    mar[4] = np.move5;   
    
    var i = 0;
  	while(i<5)
  	{
    	if(mar[i] != "")
    	{
      	moves[i] = mar[i];
    	}
    	else
    	{
      	moves[i] = "-";
    	}
    	i++;
  }
	});
  
  
  
  
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
  //document.getElementById(tileselected).style.background = '#b3b3b3'
  var i = 0;
  //console.log("pieces[" + i + "] = " + pieces[i]);
  while(i<5)
  {
  	if(pieces[i] != undefined && pieces[i] != '-')
    {
    	//console.log("pieces[" + i + "] = " + pieces[i]);
  		document.getElementById(pieces[i]).style.background = '#b3b3b3';
    }
    i++;
  }
  
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