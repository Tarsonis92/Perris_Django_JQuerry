$(document).ready(function(){

    $('#tipos').append('<option value=”op1″ selected=”selected”>Casa</option>’');
    $('#tipos').append('<option value=”op2″ selected=”selected”>Departamento</option>’');

function cargarRegiones(){

        var array =["RegionMetropolitana","QuintaRegion","OctavaRegion"];
        array.sort();
        addOptions("region",array);
    }

function addOptions(domElement,array){
        var selector = document.getElementsByName(domElement)[0];
        for (region in array){
            var opcion = document.createElement("option");
            opcion.text = array[region];
            opcion.value = array[region].toLowerCase()
            selector.add(opcion);
        }
   } 

function cargarCiudades(){

    var listaCiudades = {

        regionmetropolitana: ["Providencia","Ñuñoa","Maipu"],
        quintaregion: ["viña"],
        octavaregion: ["Concepcion"]

    }

    var regiones = document.getElementById('region')
    var ciudades = document.getElementById('ciudad')
    var regionSeleccionada = regiones.value

    ciudades.innerHTML = '<option value="">Selecciona una Ciudad...</option>'

    if(regionSeleccionada !== ''){

        regionSeleccionada = listaCiudades[regionSeleccionada]
        regionSeleccionada.sort()

        regionSeleccionada.forEach(function(ciudad){

            let opcion = document.createElement('option')
            opcion.value = ciudad
            opcion.text = ciudad
            ciudades.add(opcion)

        });
    }

   }

cargarRegiones();
    });