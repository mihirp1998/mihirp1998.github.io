var previous=0;
function update(previous){
    var theUrl = "https://poloniex.com/public?command=returnTicker";
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    var response  = xmlHttp.responseText;
    response = response.substring(response.indexOf("USDT_ETH\":{\"id\":149,\"last\":\"")+28);
    response = response.substring(0,response.indexOf("\""));
    var color="black";
    if (previous<response){
        color="green";
    } else if(previous>response){
        color="red";
    }
    document.getElementById("name").innerHTML="<span style=\"color:"+color+";font-family:Helvetica\">"+response+"</span>";
    return response;
}

function load(){
    previous = update(previous);
    setTimeout(load,3000);
}
