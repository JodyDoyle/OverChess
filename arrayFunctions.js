function addToArray(x)
{
  gloray.push(x);
}

function removeFromArray(x)
{
  var index = gloray.indexOf(x);
  gloray.splice(index,1);
}

function emptyArray()
{
  while(gloray.length>0)
    gloray.pop();
}