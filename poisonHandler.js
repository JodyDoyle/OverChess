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