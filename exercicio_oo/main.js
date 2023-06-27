function Veiculos(modelo, marca) {
    this.modelo = modelo;
    this.marca = marca;
    this.acelerar = function() {
        console.log("Vrummmmm");
    }
}

function Moto(marca, modelo, velocidadeFinal, cilindradas) {
    Veiculos.call(this, modelo, marca);
    this.velocidadeFinal = velocidadeFinal;
    this.cilindradas = cilindradas;

}

function Carro(marca, modelo, potenciaEmCv, categoria) {
    Veiculos.call(this, modelo, marca);
    this.potenciaEmCv = potenciaEmCv;
    this.categoria = categoria
}

const moto1 = new Moto("Ultra Glide Limited", "Harley Davidson", 185, 1600)

const moto2 = new Moto("S1000RR", "BMW", 300, 1000 )

const carro1 = new Carro("Mitsubish", "L200 Triton", 170, "pickup")

console.log(moto1);
moto1.acelerar();
console.log(moto2);
moto2.acelerar();
console.log(carro1);
carro1.acelerar();