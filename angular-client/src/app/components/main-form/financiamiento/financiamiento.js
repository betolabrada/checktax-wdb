const valorOp = document.getElementById("input-valorOperacion");
const noPagos = document.getElementById("input-noPagos");
const iva = document.getElementById("input-iva");
const interes = 0.24;

console.log(valorOp);
console.log(noPagos);
console.log(iva);

function financiamientoSaldoI(){
    var capital = valorOp/noPagos;
    var intereses = valorOp*interes/noPagos;
    var ivaSubTotal = interes*iva;
    var total = 0;

}

function financiamientoGlobalM(){
    var capital = valorOp/noPagos;
    var intereses = valorOp*interes/noPagos;
    var ivaSubTotal = interes*iva;
    var total = 0;
}
