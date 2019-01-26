
// " + document.getElementById("cage").tagName("cage").value + ", " + "'" + document.getElementById("ccountry").tagName("ccountry").value + "', " + document.getElementById("chp").tagName("chp").value + "


function calculateInsurance(){
	Cty = document.getElementById("ccountry").value;
	HP =  parseInt(document.getElementById("chp").value);
	Age = parseInt(document.getElementById("cage").value);
	cName = document.getElementById("cname").value;

	nix = HP * iif(Cty=="Austria",100,iif(Cty=="Hungary",120,150)) / (Age + Number(iif(Cty=="Greece",3,0))) + iif(Cty=="Hungary", 100, 50);

	if(isNaN(nix)){document.getElementById("ccalcResult").innerHTML += "<h3> false input, please input right numbers!!</h3>";}
	else{
		document.getElementById("ccalcResult").innerHTML += "<h3>"+ cName +", your insurance costs: " + (nix.toString() + " € <br>")+"</h3>";}

	
		
}

function iif(inIf, inTrue, inFalse){
	if(inIf){return inTrue;}else{return inFalse;}
}


document.getElementById("cclick").addEventListener("click", calculateInsurance, false);

