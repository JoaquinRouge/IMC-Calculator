let peso = document.getElementById('peso')
let altura = document.getElementById('altura')
let boton = document.getElementById('calcular')
let resultado = document.getElementById('resultado')

boton.addEventListener('click', calcular)

function calcular() {
    let defAltura = altura.value / 100
    let calculo = peso.value / defAltura ** 2   
    let redondear = (calculo.toFixed(1))

    if (redondear < 1000) {
        resultado.innerHTML = 'Tu IMC es ' + redondear + ', es obesidad morbida'
    }
    if (redondear < 40) {
        resultado.innerHTML = 'Tu IMC es ' + redondear + ', es obesidad'
    }
    if (redondear < 35) {
        resultado.innerHTML = 'Tu IMC es ' + redondear + ', es obesidad leve'
    }
    if (redondear < 30) {
        resultado.innerHTML = 'Tu IMC es ' + redondear + ', es sobrepeso'
    }
    if (redondear < 25) {
        resultado.innerHTML = 'Tu IMC es ' + redondear + ', es peso normal'
    }
    if (redondear < 18.5) {
        resultado.innerHTML = 'Tu IMC es ' + redondear + ', es peso bajo'
    }
}
