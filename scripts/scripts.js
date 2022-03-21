let moneda = ['Elige tu moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro', 'Libra Esterlina'];
let cambio = ['Elige tu moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro', 'Libra Esterlina'];
const formulario = document.getElementById('formulario');
const monedaOrigen = document.getElementById('origen');
const monedaCambio = document.getElementById('destino');
const validar = document.getElementById('cont-principal');
const menuOrigen = document.createDocumentFragment();
const menuCambio = document.createDocumentFragment();

moneda.forEach((data,index)=>{
  const item = document.createElement('option');
  item.setAttribute('value',index)
  item.textContent = data;
  menuOrigen.appendChild(item)   
})

cambio.forEach((data,index)=>{
  const item = document.createElement('option');
  item.setAttribute('value',index)
  item.textContent = data;
  menuCambio.appendChild(item)   
})

monedaOrigen.appendChild(menuOrigen);
monedaCambio.appendChild(menuCambio);

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
})

formulario.addEventListener('submit', function convertir(){
  let cantidadConvertir = parseFloat(document.getElementById('cantidad').value);  
  let resultado = 0; 
  const menuOrigenSelec = document.getElementById('origen');
  const monedaSeleccionada = menuOrigenSelec.options[menuOrigenSelec.selectedIndex].value;
  const menuCambioSelec = document.getElementById('destino');
  const cambioSeleccionado = menuCambioSelec.options[menuCambioSelec.selectedIndex].value;
  const usd=1, mxn=20.39, cop=3818, eur=0.91, gbp=0.76;
  const MensValid = document.createElement('div');
  MensValid.classList.add('text-center', 'alert');
      
  if(monedaSeleccionada == 0 || cambioSeleccionado == 0) {
    MensValid.classList.add('alert-danger');
    MensValid.appendChild(document.createTextNode('Debes escoger una moneda en cada casilla'));
    validar.appendChild(MensValid)
    return
    } 
    else{  
     // de Dolar a Peso Mexicano
      if(monedaSeleccionada==1&&cambioSeleccionado==2){
        resultado=(cantidadConvertir*mxn)/usd;
      }
     //de Dolar a Peso Colombiano
      else if(monedaSeleccionada==1&&cambioSeleccionado==3){
        resultado=(cantidadConvertir*cop)/usd;
      }
     //de Dolar a Euro
      else if(monedaSeleccionada==1&&cambioSeleccionado==4){
        resultado=(cantidadConvertir*eur)/usd;
      }
     //de Dolar a Libra Esterlina
      else if(monedaSeleccionada==1&&cambioSeleccionado==5){
        resultado=(cantidadConvertir*gbp)/usd;
      }
     //de Peso Mexicano a Dolar
      else if(monedaSeleccionada==2&&cambioSeleccionado==1){
        resultado=(cantidadConvertir*usd)/mxn;
      }
     //de Peso Mexicano a Peso Colombiano
      else if(monedaSeleccionada==2&&cambioSeleccionado==3){
        resultado=(cantidadConvertir*cop)/mxn;
      }
     //de Peso Mexicano a Euro
      else if(monedaSeleccionada==2&&cambioSeleccionado==4){
        resultado=(cantidadConvertir*eur)/mxn;
      }
     //de Peso Mexicano a Libra Esterlina
      else if(monedaSeleccionada==2&&cambioSeleccionado==5){
        resultado=(cantidadConvertir*gbp)/mxn;
      }
     //de Peso Colombiano a Dolar
      else if(monedaSeleccionada==3&&cambioSeleccionado==1){
        resultado=(cantidadConvertir*usd)/cop;
      }
     //de Peso Colombiano a Peso Mexicano
      else if(monedaSeleccionada==3&&cambioSeleccionado==2){
        resultado=(cantidadConvertir*mxn)/cop;
      }
     //de Peso Colombiano a Euro
      else if(monedaSeleccionada==3&&cambioSeleccionado==4){
        resultado=(cantidadConvertir*eur)/cop;
      }
     //de Peso Colombiano a Libra Esterlina
      else if(monedaSeleccionada==3&&cambioSeleccionado==5){
        resultado=(cantidadConvertir*gbp)/cop;
      }
     //de euro a Dolar
      else if(monedaSeleccionada==4&&cambioSeleccionado==1){
        resultado=(cantidadConvertir*usd)/eur;
      }
     //de euro a Peso Mexicano
      else if(monedaSeleccionada==4&&cambioSeleccionado==2){
        resultado=(cantidadConvertir*mxn)/eur;
      }
     //de euro a Peso Colombiano
      else if(monedaSeleccionada==4&&cambioSeleccionado==3){
        resultado=(cantidadConvertir*cop)/eur;
      }
     //de euro a Libra Esterlina
      else if(monedaSeleccionada==4&&cambioSeleccionado==5){
        resultado=(cantidadConvertir*gbp)/eur;
      }
     //de Libra Esterlina a Dolar
      else if(monedaSeleccionada==5&&cambioSeleccionado==1){
        resultado=(cantidadConvertir*usd)/gbp;
      }
     //de Libra Esterlina a Peso Mexicano
      else if(monedaSeleccionada==5&&cambioSeleccionado==2){
        resultado=(cantidadConvertir*mxn)/gbp;
      }
     //de Libra Esterlina a Peso Colombiano
      else if(monedaSeleccionada==5&&cambioSeleccionado==3){
        resultado=(cantidadConvertir*cop)/gbp;
      }
     //de Libra Esterlina a Euro
      else if(monedaSeleccionada==5&&cambioSeleccionado==4){
        resultado=(cantidadConvertir*eur)/gbp;
      }
     // si las monedas son iguales 
     else{
          resultado=cantidadConvertir;
     }
     document.getElementById("resultado").value= resultado.toFixed(2);
     
}
})