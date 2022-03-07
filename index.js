
/*
let saludo=function( ){
    document.write('Hola desde JS')
}
saludo()

let pasar_aFarenheit=(grado)=>{return pasar_aFarenheit=grado*1.8+32;};
let result=pasar_aFarenheit(22)

document.getElementById('calular').innerHTML=result;

*/

let mes;
mes=prompt('Ingrese el mes para saber su numero de dias')
mes=parseInt(mes)

if (mes==1||mes==3||mes==5||mes==7||mes==8||mes==12) {
  alert('este mes tiene 31 días / APP NandoScript')
}
else if (mes>12||mes<=0) {
  alert('este mes no existe / APP NandoScript')
}

else if (isNaN(mes)) {
  alert('Ud. Ingreso un valor invalido / APP NandoScript')
}

else{
  mes=(mes==2)?'Este mes es Febrero, tiene 28 días / APP NandoScript': 'Este mes tiene 30 días / APP NandoScript';
  alert(`${mes}`)}