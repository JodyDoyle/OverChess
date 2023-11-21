function makegrey(cord)
{
	document.getElementById(cord).style.background = '#b3b3b3';
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


function changepiecescolour(colo)
{
  var i = 0;
  while(i<5)
  {
  	if(pieces[i] != undefined && pieces[i] != '-')
    {
    	console.log("pieces[" + i + "] = " + pieces[i]);
  		document.getElementById(pieces[i]).style.background = colo;
    }
    i++;
  }
}