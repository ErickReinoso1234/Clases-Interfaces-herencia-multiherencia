var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehiculo = /** @class */ (function () {
    function Vehiculo(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    Vehiculo.prototype.acelerar = function () {
        console.log("El ".concat(this.tipo, " ").concat(this.nombre, " est\u00E1 acelerando."));
    };
    Vehiculo.prototype.frenar = function () {
        console.log("El ".concat(this.tipo, " ").concat(this.nombre, " est\u00E1 frenando."));
    };
    return Vehiculo;
}());
var VehiculoTerrestre = /** @class */ (function (_super) {
    __extends(VehiculoTerrestre, _super);
    function VehiculoTerrestre(nombre, ruedas) {
        var _this = _super.call(this, nombre, "Vehículo Terrestre") || this;
        _this.ruedas = ruedas;
        return _this;
    }
    VehiculoTerrestre.prototype.conducir = function () {
        console.log("El ".concat(this.tipo, " ").concat(this.nombre, " con ").concat(this.ruedas, " ruedas est\u00E1 en movimiento."));
    };
    return VehiculoTerrestre;
}(Vehiculo));
var VehiculoMaritimo = /** @class */ (function (_super) {
    __extends(VehiculoMaritimo, _super);
    function VehiculoMaritimo(nombre, eslora) {
        var _this = _super.call(this, nombre, "Vehículo Marítimo") || this;
        _this.eslora = eslora;
        return _this;
    }
    VehiculoMaritimo.prototype.navegar = function () {
        console.log("El ".concat(this.tipo, " ").concat(this.nombre, " con una eslora de ").concat(this.eslora, " metros est\u00E1 navegando."));
    };
    return VehiculoMaritimo;
}(Vehiculo));
var VehiculoAereo = /** @class */ (function (_super) {
    __extends(VehiculoAereo, _super);
    function VehiculoAereo(nombre, longitud) {
        var _this = _super.call(this, nombre, "Vehículo Aéreo") || this;
        _this.longitud = longitud;
        return _this;
    }
    VehiculoAereo.prototype.volar = function () {
        console.log("El ".concat(this.tipo, " ").concat(this.nombre, " con una longitud de ").concat(this.longitud, " metros est\u00E1 volando."));
    };
    return VehiculoAereo;
}(Vehiculo));
var camion = new VehiculoTerrestre("Camión", 18);
var barco = new VehiculoMaritimo("Barco", 50);
var avion = new VehiculoAereo("Avión", 60);
console.log("Vehículos:");
console.log("Nombre: ".concat(camion.nombre));
console.log("Tipo: ".concat(camion.tipo));
console.log("Ruedas: ".concat(camion.ruedas));
camion.conducir();
camion.acelerar();
camion.frenar();
console.log("Nombre: ".concat(barco.nombre));
console.log("Tipo: ".concat(barco.tipo));
console.log("Eslora: ".concat(barco.eslora));
barco.navegar();
barco.acelerar();
barco.frenar();
console.log("Nombre: ".concat(avion.nombre));
console.log("Tipo: ".concat(avion.tipo));
console.log("Longitud: ".concat(avion.longitud));
avion.volar();
avion.acelerar();
avion.frenar();
