function addPoint(){
    var descripcion = document.getElementById('inputDescription').value;
    var direccion = document.getElementById('inputAdress').value;
    var telefono = document.getElementById('inputCellPhone').value;
    var categoria = document.getElementById('selectCategoria').value;
    var coordenadas = document.getElementById('inputCoordenadas').value;
    
	coordenadas = coordenadas.split(",",2);
	var latitud = coordenadas[0];
	var longitud = coordenadas[1];

	latitud = parseFloat(latitud);
    longitud = parseFloat(longitud);
       
    //Validacion de Longitud y latitud.
    if (latitud && longitud){
        if (latitud < -90 || latitud > 90 ){
            alert("Latitud invalida");
            return;
        }
        if (longitud < -180 || longitud > 180){
            alert("Longitud invalida");
            return;
        }        
    }
    else{
        alert("Ingrese Coordenadas");
        return;
    }

	L.control.scale().addTo(map);
    L.marker([latitud,longitud], {draggable: false}).addTo(map)
    .bindPopup(
        `<b>Descripción: </b>${descripcion}</br>
        <b>Dirección: </b>${direccion}</br>
        <b>Teléfono: </b>${telefono}</br>
        <b>coordenadas: </b>${coordenadas}</br>
        <b>Categoria: </b>${categoria}`
    );
    
    document.getElementById('form').reset();

}

var map = L.map('map').
setView([-34.6162486,-58.4360359], 
12);
 
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);