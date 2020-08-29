console.log("Mirar aquí es trampa :v")
var known = false;
var tries = 0
var x = Math.random() * (100-1) +1
console.log(x)
x = parseInt(x)

function search(){
	if(known){
		location.reload();
	}else{
	console.log(document.querySelector("#inputo").value);
 	if (document.querySelector("#inputo").value == x){
		document.querySelector("#uwu").innerHTML = "¡¡Felicidades, lo has averiguado!!";
		document.querySelector("#srch").innerHTML = "Jugar otra vez";
		document.querySelector("#inputo").disabled = true
		known = true;
 	}else if (document.querySelector("#inputo").value <= 0 || document.querySelector("#inputo").value >=101){
		document.querySelector("#uwu").innerHTML = "Recuerda que el número va de 1 a 100";
		document.querySelector("#inputo").value = ""
	}else if (document.querySelector("#inputo").value < x){
		document.querySelector("#uwu").innerHTML = "El numero mágico es mayor";
		document.querySelector("#inputo").value = ""
	}else if (document.querySelector("#inputo").value > x){
		document.querySelector("#uwu").innerHTML = "El numero mágico es menor";
		document.querySelector("#inputo").value = ""
	}
	tries++
	document.querySelector("#tries").innerHTML = "Intentos: " + tries;
	}
}
