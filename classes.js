// class Persona {
//     constructor() {
//         this.name = 'Miguel',
//             this.apellido = 'Toloza',
//             this.edad = 23,
//             this.city = 'Merida'
//     }
// }

// const miguel = new Persona(); //intanciando la clase
// console.log(miguel.name + " " + miguel.apellido + " Edad: " + miguel.edad + " Ciudad: " + miguel.city);

// document.write("Nombre: " + miguel.name + " " + miguel.apellido);


// class Persona {
//     constructor(name, apellido, edad) {
//         this.name = name,
//             this.apellido = apellido,
//             this.edad = edad
//     }
// }


// const alfonso = new Persona("Alfonso", "Ramirez", 29);
// const miguel = new Persona("Miguel", "Toloza", 23);
// const juan = new Persona("Juan", "Perez", 30);
// const luis = new Persona("Luis", "Gonzalez", 15);

// console.log(alfonso.name + " " + alfonso.apellido);
// console.log(miguel.name + " " + miguel.apellido);
// console.log(juan.name + " " + juan.apellido);
// console.log(luis.name + " " + luis.apellido);


// class Usuario {
//     constructor() {

//     }

//     saludo(mensaje) {
//         return mensaje;
//     }
// }

// const alfonso = new Usuario();
// console.log(alfonso.saludo("Hola Alfo"));

// let nombre = "Miguel";

// let imprimir = `Nombre: ${nombre}`;


// console.log(imprimir);


class Usuario {
    constructor(nombre, edad, correo) {
        this.nombre = nombre,
            this.edad = edad,
            this.correo = correo
    }

    verInformacion() {
        return `
            Nombre: ${this.nombre} <br/>
            Edad: ${this.edad} <br/>
            Correo: ${this.correo} <br/>
            <hr/>
        `;
    }
}

const miguel = new Usuario("Miguel", 23, "miguel@gmail.com");
const alfonso = new Usuario("Alfonso", 29, "alfonso@gmail.com");

document.write(miguel.verInformacion());
document.write(alfonso.verInformacion());