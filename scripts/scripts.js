const formulario = document.getElementById('formulario');
const monedaOrigen = document.getElementById('origen');
const monedaDestino = document.getElementById('destino');
const validar = document.getElementById('cont-principal');

const fragmento = document.createDocumentFragment();
const fragmento2 = document.createDocumentFragment();

let divisa = ['Elige tu divisa','Dolar','Peso Mexicano','Peso Colombiano','Euro', 'Libra Esterlina'];
let cambio = ['Elige divisa de cambio','Dolar','Peso Mexicano','Peso Colombiano','Euro', 'Libra Esterlina'];

// divisa.forEach((data,index)=>{
//      const item = document.createElement('option');
//      item.setAttribute('value',index)
//      item.textContent = data;
//      fragmento.appendChild(item)   
// })

// cambio.forEach((data,index)=>{
//      const item = document.createElement('option');
//      item.setAttribute('value',index)
//      item.textContent = data;
//      fragmento2.appendChild(item)   
// })

// listaDivisa.appendChild(fragmento);
// listaCambio.appendChild(fragmento2);

formulario.addEventListener('submit', (e) => {
     e.preventDefault();
})
formulario.addEventListener('submit', function conversor(){
     let valor = parseFloat(document.getElementById('cantidad').value);  
     let resultado = 0; 

     const divisaSelect = document.getElementById('origen');
     const divisaSeleccionada = divisaSelect.options[divisaSelect.selectedIndex].value;
     const cambioDivisaSelect = document.getElementById('destino');
     const cambioDivisaSeleccionada = cambioDivisaSelect.options[cambioDivisaSelect.selectedIndex].value;

     const divMensaje = document.createElement('div');
     divMensaje.classList.add('text-center', 'alert');

      // validación del formulario 
      if(divisaSeleccionada == 0 || cambioDivisaSeleccionada == 0) {
          divMensaje.classList.add('alert-danger');
          divMensaje.appendChild(document.createTextNode('Es requisito escoger las dos monedas'));
          validar.appendChild(divMensaje)
          return
     } 
     else{        
     //USD a MXN
     if(divisaSeleccionada==1&&cambioDivisaSeleccionada==2){
          let usd = 1;
          let mxn = 20.42;
          resultado=(valor*mxn)/usd;
     }
     //USD a COP
     else if(divisaSeleccionada==1&&cambioDivisaSeleccionada==3){
          let usd = 1;
          let cop = 3790;
          resultado=(valor*cop)/usd;
     }
     //USD a EUR
     else if(divisaSeleccionada==1&&cambioDivisaSeleccionada==4){
          let usd = 1;
          let eur = 0.86;
          resultado=(valor*eur)/usd;
     }
     //USD a GBP
     else if(divisaSeleccionada==1&&cambioDivisaSeleccionada==5){
          let usd = 1;
          let gbp = 0.74;
          resultado=(valor*gbp)/usd;
     }
     //MXN a USD
     else if(divisaSeleccionada==2&&cambioDivisaSeleccionada==1){
          let mxn = 1;
          let usd = 0.049;
          resultado=(valor*usd)/mxn;
     }
     //MXN a COP
     else if(divisaSeleccionada==2&&cambioDivisaSeleccionada==3){
          let mxn = 1;
          let cop = 185.58;
          resultado=(valor*cop)/mxn;
     }
     //MXN a EUR
     else if(divisaSeleccionada==2&&cambioDivisaSeleccionada==4){
          let mxn = 1;
          let eur = 0.042;
          resultado=(valor*eur)/mxn;
     }
     //MXN a GBP
     else if(divisaSeleccionada==2&&cambioDivisaSeleccionada==5){
          let mxn = 1;
          let gbp = 0.036;
          resultado=(valor*gbp)/mxn;
     }
     //COP a USD
     else if(divisaSeleccionada==3&&cambioDivisaSeleccionada==1){
          let cop = 1;
          let usd = 0.00026;
          resultado=(valor*usd)/cop;
     }
     //COP a MXN
     else if(divisaSeleccionada==3&&cambioDivisaSeleccionada==2){
          let cop = 1;
          let mxn = 0.0054;
          resultado=(valor*mxn)/cop;
     }
     //COP a EUR
     else if(divisaSeleccionada==3&&cambioDivisaSeleccionada==4){
          let cop = 1;
          let eur = 0.00023;
          resultado=(valor*eur)/cop;
     }
     //COP a GBP
     else if(divisaSeleccionada==3&&cambioDivisaSeleccionada==5){
          let cop = 1;
          let gbp = 0.00019;
          resultado=(valor*gbp)/cop;
     }
     //EUR a USD
     else if(divisaSeleccionada==4&&cambioDivisaSeleccionada==1){
          let eur = 1;
          let usd = 1.16;
          resultado=(valor*usd)/eur;
     }
     //EUR a MXN
      else if(divisaSeleccionada==4&&cambioDivisaSeleccionada==2){
          let eur = 1;
          let mxn = 23.71;
          resultado=(valor*mxn)/eur;
     }
     //EUR a COP
     else if(divisaSeleccionada==4&&cambioDivisaSeleccionada==3){
          let eur = 1;
          let cop = 4401.07;
          resultado=(valor*cop)/eur;
     }
     //EUR a GBP
     else if(divisaSeleccionada==4&&cambioDivisaSeleccionada==5){
          let eur = 1;
          let gbp = 0.86;
          resultado=(valor*gbp)/eur;
     }
     //GBP a USD
     else if(divisaSeleccionada==5&&cambioDivisaSeleccionada==1){
          let gbp = 1;
          let usd = 1.36;
          resultado=(valor*usd)/gbp;
     }
     //GBP a MXN
     else if(divisaSeleccionada==5&&cambioDivisaSeleccionada==2){
          let gbp = 1;
          let mxn = 27.73;
          resultado=(valor*mxn)/gbp;
     }
     //GBP a COP
     else if(divisaSeleccionada==5&&cambioDivisaSeleccionada==3){
          let gbp = 1;
          let cop = 5143.41;
          resultado=(valor*cop)/gbp;
     }
     //GBP a EUR
     else if(divisaSeleccionada==5&&cambioDivisaSeleccionada==4){
          let gbp = 1;
          let eur = 1.17;
          resultado=(valor*eur)/gbp;
     }
     //DIVISAS IGUALES
     else{
          resultado=valor;
     }
     document.getElementById("result").value= resultado.toFixed(2);
     
}
})