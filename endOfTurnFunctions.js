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