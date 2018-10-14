var counter = 0;
var stringValue="";
document.onkeypress = function (e) {
  e = e || window.event;
  if(e.keyCode==105){
      counter++;
      stringValue+="i";
  } else if(e.keyCode==99){
    counter++;
    stringValue+="c";
  } else if(e.keyCode==101){
    counter++;
    stringValue+="e";
  } else if(e.keyCode==117){
      counter++;
      stringValue+="u";
  } else if(e.keyCode==116){
      counter++;
      stringValue+="t";
  } else if(e.keyCode==104){
      counter++;
      stringValue+="h";
  }
  if(stringValue.indexOf("icu")!=-1){
      stringValue="";
      window.open("http://instantcena.ca");
  } else if(stringValue.indexOf("eth")!=-1){
       load();
      document.getElementById("secondHeadline").innerHTML="ETH price $USD"
  } else if(counter==3){
      counter=0;
      stringValue="";
  }
};
