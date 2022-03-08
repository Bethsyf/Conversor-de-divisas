var vUsdCop=3812.57;
var vUsdEur=0.92
var vUsdMxn=21.30; 
var vUsdGbp=0.76;

var tiposDeCambio=[1, vUsdCop,vUsdEur,vUsdMxn, vUsdGbp ];
var simbolos=["USD", "COP","EUR","MXN", "GBP"];

$(document).ready(function(){

      $("#btn-calcular-divisa").click(function(){
        var monedaOrigen=$("#origen").value();
        var monedaDestino=$("#destino").value();
        var cantidadConvertir=$("#cantidad-dinero").value();
        consolelog(monedaOrigen);
        var precioDolar=cantidadConvertir*tiposDeCambio[monedaOrigen];
        var precioResultado=Math.round(precioDolar/tiposDeCambio[monedaDestino] * 100) / 100;
        $("#contenedor-resultado").html(cantidadConvertir+" "+simbolos[monedaOrigen]+ " = " + precioResultado+" "+simbolos[monedaDestino]);
      });
    });