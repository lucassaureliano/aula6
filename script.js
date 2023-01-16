var saida = document.getElementById("saida");
var imprimir = "";
var semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
alert(semana.indexOf("Quinta"));

for(var i = 0; i < semana.length; i++){
    imprimir += semana[i] + "<br>";
}

saida.innerHTML = imprimir;