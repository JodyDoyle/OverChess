

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


function sleep(ms) 
{
  return new Promise(resolve => setTimeout(resolve, ms));
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


function display(str)
{
  if(pieces.includes(str))
  {
    var helix = health[pieces.indexOf(str)];
  }
  else
  {
    var helix = ohealth[opieces.indexOf(str)];
  }

  console.log("The value of str is " + str);
  curcre = cre.child(document.getElementById(str).innerHTML)
  console.log("curcre = " + curcre);

  curcre.on("value", function(data) 
  {
  	var np = data.val();
    h = np.Health
    t = np.Trait
    
	});

  //console.log("Everything is fine???");
  
  //console.log("The value of h is " + h);
  //console.log("The value of t is " + t);
  console.log("The value of tra: " + tra);
  var traa = tra.child(t);
  //console.log("Everything is fine???");
  console.log("The value of traa: " + traa);
  
  traa.on("value", function(data) 
  {
  	var np = data.val();
    cheer = np.Data
    
	});
  
  // console.log("The value of cheer: " + cheer);
  
  document.getElementById('display1').innerHTML = 
  document.getElementById(str).innerHTML + '\'s health is currently at ' + helix + '/' + h + '.';
  document.getElementById('display2').innerHTML = 
  document.getElementById(str).innerHTML + '\'s trait is ' + t + '.';
  document.getElementById('display3').innerHTML = 
  t + ': ' + cheer;
  
  
}


function setAsyncCheck(x)
{
	asyncCheck = x;
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
  //console.log("playerwin is the problem?");
  butto = -1
}


function opponentwin()
{
	console.log("We got to the opponentwin() function!");
	document.getElementById('head').innerHTML = "The opponent has won...";
  document.getElementById('select').innerHTML = "Better luck next Time!";
  
  document.getElementById('move1').innerHTML = 'G';
  document.getElementById('move2').innerHTML = 'G';
  document.getElementById('move3').innerHTML = 'W';
  document.getElementById('move4').innerHTML = 'P';
  document.getElementById('move5').innerHTML = '!';
  
  gameover = true;
  asyncCheck = 1;
  board = -1;
  //console.log("playerwin is the problem?");
  butto = -1
}