# Ruth-Leon
Pre entrega

<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>Prestamos personales</h1>
<p id="Ruth">This is a paragraph.</p>


<script>
    document.getElementById("Ruth").innerHTML = "Bienvenido usuario";
    console.log("Simulador")
</script>
<script src="pruebitaa.js"></script>
</body>
</html>

let monto= parseInt(prompt("ingrese monto"))

if(monto < 500){
  monto = parseInt(prompt("ingrese otro monto"))
};

let cuotas = parseInt(prompt("ingrese cuotas"))

let interes = 40
let montoTotal = 0 
for(let i = 1; i <= cuotas; i++) {
  let precioCuota = (monto / cuotas);
  interes = interes + 0.85
  precioCuota = precioCuota + (precioCuota * interes / 100)
  montoTotal += precioCuota
  console.log("Monto de la cuota numero " + i + " es de $" + precioCuota);
}
console.log("El monto total a pagar por el prestamo es de $" + montoTotal)
