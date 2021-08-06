////Funcion que permite dibujar la estructura de una tabla en HTML
const dibujarTabla = ()=>{
let pintar = `
          <thead>
            <tr>
              <th >Empleo</th>
              <th >Location</th>
              <th >Sitio Web</th>
            </tr>
          </thead>
 `
 //Agregar los datos obtenido en la tabla
$.each(listaDeEmpleos, function(index, empleo) {
  pintar += `<tr><td>`+ empleo.Empleo+`</td><td>`+empleo.Locacion+`</td><td>`+empleo.SitioWeb+`</td></tr>`;
 });
 
 $('div').html(pintar);
 
}
dibujarTabla(listaDeEmpleos);



