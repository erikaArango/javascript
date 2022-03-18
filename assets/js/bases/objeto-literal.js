const personaje = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
  direccion: {
    zip: "10880, 90265",
    ubicacion: "Malibu, California",
  },
  "ultima-pelicula": "Infinity War",
};

console.log(personaje);
console.log("Nombre", personaje.nombre);
console.log("Nombre", personaje["nombre"]);
console.log("Edad", personaje.edad);

console.log("Coors", personaje.coords);
console.log("Lat", personaje.coords.lat);

console.log("Numero de trajes", personaje.trajes.length);

console.log("No. Trajes", personaje.trajes.length);
console.log("último traje", personaje.trajes[personaje.trajes.length - 1]);

const x = "vivo";
console.log("Vivo", personaje[x]);

console.log("Última película", personaje["ultima-pelicula"]);

// borrar un elemento
delete personaje.edad;
console.log(personaje);

//para volver todo un arreglo
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// .freeze es para congelar las asignaciones o cambios, pero si funciona en los objetos que estan dentro
// personaje = true;

Object.freeze(personaje);

personaje.dinero = 10000000000;
personaje.casado = false;
personaje.direccion.ubicacion = "Costa Rica";
console.log(personaje);

//para saber las propiedades que tiene
const propiedades = Object.getOwnPropertyNames(personaje);
console.log("propiedades", propiedades);

//para saber los valores
const valores = Object.values(personaje);
console.log("valores", valores);
