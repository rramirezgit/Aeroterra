function addPoint(){
	var coordenadas = document.getElementById('inputCoordenadas').value;
	coordenadas = coordenadas.split(",",2);
	var latitud = coordenadas[0];
	var longitud = coordenadas[1];

	latitud = parseFloat(latitud);
	longitud = parseFloat(longitud);

	L.control.scale().addTo(map);
	L.marker([latitud,longitud], {draggable: false}).addTo(map);
}

var map = L.map('map').
setView([-34.6162486,-58.4360359], 
12);
 
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);