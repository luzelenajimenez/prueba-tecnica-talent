// Codigo ejecutable en la consola del sitio web asignado

// Selecciono el contenedor que me proporciona la informacion de los empleos
let empleos = document.querySelectorAll(".strip-side-borders"); 

//Funcion que extrae la informacion que necesito
listaDeEmpleos = [...empleos].map(empleo => {
  return {
    Empleo: empleo.innerText.split('\n')[0],
    Locacion:empleo.innerText.split('\n')[1],
    SitioWeb: empleo.href,

  }
});
//Guardo los datos en el localStorage
localStorage.setItem('listaDeEmpleos', JSON.stringify(listaDeEmpleos));
//Pinto la tabla con los datos
console.table( listaDeEmpleos);




