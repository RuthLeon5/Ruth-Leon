ListaBancos = ['HSBC','Galicia','BBVA','Macro']
InteresesBancos = [25,40,20,30]
AcumulacionInteresesBancos = [5.5,0.3,4,0.9]

let banco = prompt("Elija banco. Opciones: HSBC, Galicia, BBVA, Macro")

while(banco != 'HSBC' && banco != 'Galicia' && banco != 'BBVA' && banco != 'Macro'){
    banco = prompt("Opcion no valida. Elija un banco entre las sig. opciones: HSBC, Galicia, BBVA, Macro")
}

bancoPosicionLista = ListaBancos.indexOf(banco)

let monto= parseInt(prompt("ingrese monto"))
if(monto < 500){ monto = parseInt(prompt("ingrese otro monto")) };
let cuotas = parseInt(prompt("ingrese cuotas"))
let interes = InteresesBancos[bancoPosicionLista] 
let acumIntereses = AcumulacionInteresesBancos[bancoPosicionLista]
let montoTotal = 0 
for(let i = 1; i <= cuotas; i++) { 
let precioCuota = (monto / cuotas); 
if (i == 1){
    interes = interes
}else{
    interes = interes + acumIntereses
}
 
precioCuota = precioCuota + (precioCuota * interes / 100) 
montoTotal += precioCuota
console.log("Monto de la cuota numero " + i + " es de $" + precioCuota); }
console.log("El monto total a pagar por el prestamo es de $" + montoTotal)




