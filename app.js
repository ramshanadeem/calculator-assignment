 var ok=0;


function getInput(i) {
    var x=i;
    // document.getElementById('input').value+=i //for concetinate value+=i
    if(x==='='){
        document.getElementById('input').value=eval(document.getElementById('input').value)
    }
    else if (x==='+' || x==='-' || x ==='*' || x=== '/' ||x==='%')
    {
        if(ok ===0){
        document.getElementById('input').value+=i;
    ok=1;
    }
}
else if (x==='C')
    {
        document.getElementById('input').value='';
    }
    else  if (x==='backSpace')
    {
        document.getElementById('input').value=document.getElementById('input').value.slice(0,-1)
    }
  
    
    else{
        document.getElementById('input').value+=i;
        ok=0;
    }

}

