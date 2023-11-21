
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