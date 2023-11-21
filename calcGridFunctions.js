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