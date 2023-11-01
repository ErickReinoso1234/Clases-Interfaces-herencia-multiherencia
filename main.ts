class Vehiculo {
  constructor(public nombre: string, public tipo: string) {}

  acelerar() {
    console.log(`El ${this.tipo} ${this.nombre} está acelerando.`);
  }

  frenar() {
    console.log(`El ${this.tipo} ${this.nombre} está frenando.`);
  }
}

class VehiculoTerrestre extends Vehiculo {
  constructor(nombre: string, public ruedas: number) {
    super(nombre, "Vehículo Terrestre");
  }

  conducir() {
    console.log(`El ${this.tipo} ${this.nombre} con ${this.ruedas} ruedas está en movimiento.`);
  }
}

class VehiculoMaritimo extends Vehiculo {
  constructor(nombre: string, public eslora: number) {
    super(nombre, "Vehículo Marítimo");
  }

  navegar() {
    console.log(`El ${this.tipo} ${this.nombre} con una eslora de ${this.eslora} metros está navegando.`);
  }
}

class VehiculoAereo extends Vehiculo {
  constructor(nombre: string, public longitud: number) {
    super(nombre, "Vehículo Aéreo");
  }

  volar() {
    console.log(`El ${this.tipo} ${this.nombre} con una longitud de ${this.longitud} metros está volando.`);
  }
}

const camion = new VehiculoTerrestre("Camión", 18);
const barco = new VehiculoMaritimo("Barco", 50);
const avion = new VehiculoAereo("Avión", 60);

console.log("Vehículos:");
console.log(`Nombre: ${camion.nombre}`);
console.log(`Tipo: ${camion.tipo}`);
console.log(`Ruedas: ${camion.ruedas}`);
camion.conducir();
camion.acelerar();
camion.frenar();

console.log(`Nombre: ${barco.nombre}`);
console.log(`Tipo: ${barco.tipo}`);
console.log(`Eslora: ${barco.eslora}`);
barco.navegar();
barco.acelerar();
barco.frenar();

console.log(`Nombre: ${avion.nombre}`);
console.log(`Tipo: ${avion.tipo}`);
console.log(`Longitud: ${avion.longitud}`);
avion.volar();
avion.acelerar();
avion.frenar();
