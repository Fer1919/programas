
/*
let saludo=function( ){
    document.write('Hola desde JS')
}
saludo()

//
let pasar_aFarenheit=(grado)=>{return pasar_aFarenheit=grado*1.8+32;};
let result=pasar_aFarenheit(22)

document.getElementById('calular').innerHTML=result;

//

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

  
//////////////////////////////////////////////////////////////////////////////////

  let edad=10;
  if (true) {
 let edad=20;
    console.log(edad);
  }
console.log(edad)


var edades = [10,20,30,40]
var edades = [10,20,30]
console.log(edades)



const edades = [10,20,30]
edades = [10,20,30,40]
console.log(edades)



const edades = [10,20,30]
edades.push(40)
console.log(edades)



let persona = {
  nombre: 'juanito',
  edad: 20
}

persona.edad = 21
persona.pais = 'México'
persona.name='fer'

console.log(persona)



function sumar (num1,num2) {
    console.log(num1+num2)
    }
sumar(10,20)

//


const sumarDos =( num1,num2) => {
  console.log(num1+num2)
}
sumarDos(10,15)

//

const sumarDos = num1 => {
  return num1
}
console.log(sumarDos(10))
//
let suma =(num1,num2)=>{
  return 'la suma es:'+(num1+num2)
}

//let resultado =suma(10, 20) 
console.log(suma(10, 20))//(resultado)
//


///////////////////////////////////////////16-03-2022
//1)
let suma=(num1,num2)=>{
  return 'El resultado de la suma es: '+(num1+num2);
  let resultado=suma(2,2)
}
console.log((resultado));
//

let suma=(num1,num2)=>{
  return 'la suma es: '+(num1+num2)

}
let  resultado=suma(10,10)
console.log(resultado);

//

const numero = (num) => {
  return 'el numero es: ' + num 
}
const resultado = numero(10)
console.log(resultado) 




const numero = (num1, num2) => {
  return `el numero es:  + ${num1+num2}` 
}
const resultado = numero(10,20)
console.log(resultado)



const mascota = {
  nombre: 'Tom',
  edad: 5,
  tipo: 'gato'
}
mascota.raza = 'peludo'
mascota.peso='10kl';
console.log(mascota)
console.log(mascota.nombre)


/////





//////////////////////////22-03-2022///////////
//1)
//Crear objeto con atributos

const mascota = {
  nombre: 'Tom',
  edad: 5,
  tipo: 'gato',
  raza : 'peludo'
}
raza : 'peluda'
mascota.peso='10kl';
//console.log(mascota)
console.log(mascota.raza)

//2)objeto bicicleta
bicicleta={
  marca:'gt',
  aro:26,
  material:'aluminio',
  sistema_de_frenos:'be_brake'
}
console.log(bicicleta)
console.log(bicicleta.material);

//3)


const numero = (num1, num2) => {
  return `el numero es:   ${num1+num2}` 
}
const resultado = numero(10,20)
console.log(resultado)


let suma=(num1,num2)=>{
  return num1+num2;
}
let resultado=suma(40,40)
console.log(resultado)



//suma concatenada con +
//4)
let a,b;
a=prompt('ingrese primer cifra')
a=parseInt(a)
b=prompt('ingrese second cifra')
b=parseInt(b)


let suma=(a,b)=>{
  return 'Su resultado es: ' +  a+b;
}
let resultado=suma(a,b)
alert(resultado);

//Suma conectada por interpolacion.-
//5) 
let a,b;
a=prompt('ingrese primer cifra')
a=parseInt(a)
b=prompt('ingrese second cifra')
b=parseInt(b)

//ln224
let suma=(a,b)=>{
  return ` el resultado de su suma es: ${a+b}`;
}
let resultado=suma(a,b)
alert(resultado);

/////////////////////23-03-2022/////////////////////
//1)
let a,b;
a=prompt('Ingrese numerador')
a=parseInt(a)
b=prompt('ingrese denominador')
b=parseInt(b)



let div=(a,b)=>{
  return 'su resultadoes: ' + a/b;
}
resultado=div(a,b);
alert(resultado)
//2)

let a,b;
a=prompt('ingrese denominador')
a=parseInt(a)
b=prompt('ingrese denominador')
b=parseInt(b)
let div=()=>{
  return 'el resultado es: '+a/b;
}
resultado=div(a,b);


let a,b;
a=prompt('ingrese denominador')
a=parseInt(a)
b=prompt('ingrese denominador')
b=parseInt(b)
let div=()=>{
  return `su resultado es: ${a/b}`;
}
resultado=div(a,b);
alert(resultado)

//3)
let bicicleta={
  marco:'aluminio',
  ruedas:'aro 26' ,
  suspension:'delantera',
  caramayola:'botella de medio litro',
  valvula:'americana'
}
console.log(bicicleta);

console.log(bicicleta.caramayola);


//4)
let  i=0;
while (i<5) {
  alert(i++ );
}

//5)
let i=0;
while (i<=0) {
  alert(i--)
}

let i = 5;
do {
  alert( i );
  i++;
} while (i < 3);

//6)
let i=3;
do{
  alert(i--)
}
while (i<4) {
  
}

//7)
let i=0;
for(;i<5;i++){
  alert(i)
}

let i=0
for(;i<10;){
  alert(i++)
}

//8)//reparando el codigo de walde.
let a= prompt("Ingrese numero", "");
num1=parseInt(a)
let b= prompt("Ingrese segundo numero", "");
num2=parseInt(b)

let result=()=>{
   return "el resultado de la division es"+ num1/num2;
}
alert(result());



let sum = 0;
while (true) {
  let value = +prompt("Ingresa n números para sumar, luego preisone ENTER para obtener el resultado", '');

  if (!value) break; // (*)
  sum += value;

}
alert( 'Suma: ' + sum );



let a= prompt("Ingrese numero", "");
num1=parseInt(a)
let b= prompt("Ingrese segundo numero", "");
num2=parseInt(b)

let result=()=>{
   return "el resultado de la division es "+ (num2/num1);
}
alert (result());


//3)
let bicicleta={
  marco:'aluminio',
  ruedas:'aro 26' ,
  suspension:'delantera',
  caramayola:'botella de medio litro',
  valvula:'americana'
}
console.log(bicicleta);

console.log(bicicleta.caramayola);


let obj={

  j:` Volkswaguen `,
  k:` gol `,
  l:` deportivo `,
  m:` aliacion `,
  n:` anchos `,

}
console.log(obj.j);
console.log(obj.n);


//

let a;
a=prompt('ingrese un tributo'){

}

//ln391
let obj={

  j:` Volkswaguen `,
  k:` gol `,
  l:` deportivo `,
  m:` aliacion `,
  n:` anchos `,

}
console.log(obj.j+obj.n);

class Bicicleta{


  constructor(marca, modelo, marco, rueda, valvula, caramayola){
  this.marca='Gt';
  this.modelo='MTB';
  this.marco='Tijera';
  this.rueda='Aro 26';
  this.valvula='Americana';
  this.caramayola='Botella de 1/2Lt'

}
}
let Mi_Bicicleta=new Bicicleta();//Istancia
document.write(Mi_Bicicleta.marca+' del modelo:  '+Mi_Bicicleta.modelo+' tipo de caramayola: '+Mi_Bicicleta.caramayola )



let a;
a=prompt('ingrese su nombre')
let Hi=()=>{
  alert(`Bienvenido a su casa sr. ${a}`)
}
Hi();



let a;
a=prompt('Ingrese su nombre')
let Hi=()=>{
   resultado=alert(`Bienvenido Sr. ${a}`)
}
resultado=Hi();


let a, b;
a=prompt("Ingrese su nombre", "");
   nombre=parseInt (a);
   b= prompt("Ingrese su apellido", "");
   apellido=parseInt (b);
   
 class Personal{
   

   constructor(nombre, apellido, edad, rut, nacionalidad){
   this.nombre='Waldo';
   this.apellido='Avila';
   this.edad='47';
   this.rut='9155887-4';
   this.nacionalidad='Chilena';
   

 }
 }
 let Personaje=new Personal();
 alert(` Hola ${a}`+ Personaje.apellido+' su edad es:  '+Personaje.edad+' años ')





let a, b, c, d, e;

a=prompt("ingrese nombre", '');
b=prompt("ingrese su apellido", '');
c=prompt("ingrese su edad", '');
d=prompt("ingrese su rut", '');
e=prompt("ingrese su nacionalidad", '');


 class Personal{
   

   constructor(nombre, apellido, edad, rut, nacionalidad){
   this.nombre= a ;
   this.apellido= b;
   this.edad=c;
   this.rut=d;
   this.nacionalidad=e;
   

 }
 }
 let Personaje=new Personal();
 alert(' Hola '+ Personaje.nombre+ Personaje.apellido+ Personaje.rut + ' su edad es:  '+Personaje.edad+' años ')

//24-03-2022//
//Sumas solo con variables.
let a,b;
a=prompt('ingrese el primer numer')
a=parseInt(a);
b=prompt('ingrese su numero')
b=parseInt(b)
let resultado=(a*b)
alert(resultado+' es el producto de los input')


let a,b;
a=prompt('ingrese el primer numer')
a=parseInt(a);
b=prompt('ingrese su numero')
b=parseInt(b)
let resultado=(a*b)
alert(`el resultado de la multiplicacion es: ${resultado} `)

let a,b;
a=prompt('ingrese primera cifra');
a=parseInt(a);
b=prompt('ingrese segundo numero');
b=parseInt(b);

let mult=(a,b)=>{
  return 'la suma es'+ (a+b);
}
resultado=(mult(a,b));
alert(resultado)



let a,b;
a=prompt('ingrese primer cifra')
a=parseInt(a)
b=prompt('ingrese second cifra')
b=parseInt(b)


let suma=(a,b)=>{
  return `su resultado es: ${a+b}`;
}
let resultado=suma(a,b)
alert(resultado);



let Hi=()=>{
  saludo='hola socio'
  alert(saludo)
}
Hi()


let a;
a=prompt('ingrese su nombre')

let Hi=()=>{
  saludo='hola socio'+ a;
  alert(saludo)
}
Hi()

let a;
a=prompt('ingrese su nombre')

a=parseInt(a)


let b;
b=prompt('ingrese su nombre')
let Hi=()=>{
  saludo=(a*b);
  alert(saludo)
}
Hi()


/////////////////////////25-03-2022//////
//1)
//let a,b;
a=10
b=a
let resultado=`su resultado es; ${a*b} `
alert(resultado)

let a,b;
a=prompt('ingrese numero first')
parseInt(a)

b=prompt('ingrese numero scnd')
parseInt(b)

let mult=(a,b)=>{
return 'su resultado es: '+ (a*b);
}
//let resultado=mult(a,b)
alert(mult(a,b))






let a,b;
a=prompt('ingrese numero first')
a=parseInt(a)

b=prompt('ingrese numero scnd')
b=parseInt(b)

let mult=()=>{
//return 'su resultado es: '+ (a*b);
 resultado='su resultado es'+ (a*b);
alert(resultado);
}
//let resultado=mult(a,b)
mult()



let obj={

  j:` Volkswaguen `,
  k:` gol `,
  l:` deportivo `,
  m:` aliacion `,
  n:` anchos `,

}
console.log(obj.j+obj.n);


///////////////////27-03-2022---------
//01)
let a,b;

a=prompt('ingrese valor')
a=parseInt(a)
b=prompt('ingrese segundo valor')
b=parseInt(b)

let resultado=(a*b) + ' es el producto de su esultado'
alert(resultado)

///////////////28-03-22
//01)

//ln637
let a = 2 * 2;

switch (a) {
  case 3:
    alert( 'Muy pequeño' );
    break;
  case 4:
    alert( '¡Exacto!' );
    break;
  case 5:
    alert( 'Muy grande' );
    break;
  default:
    alert( "Desconozco estos valores" );
}


let a=3*3;
switch (a) {
  case 3:
    alert('Muy pequeño')
    break;

case 10:
  alert('Muy grande') 
break;
  case 9:
    alert('exacto')
break;
  default:
    alert('Este Valor es invalido')
}


let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("esto se ejecuta, porque +a es 1, exactamente igual b+1");
    break;

  default:
    alert("esto no se ejecuta");
}



let arg = prompt("Igrese su edad");
switch (arg) {
  case '18':
  //case '1':
    alert( 'Usted es mayor de edad' );
    break;

  

  case '<18':
    alert( '¡Nunca ejecuta!' );
    break;
  default:
    alert( 'Un valor desconocido' );
}



let navegador=prompt('ingrese navegador')
switch (navegador) {
  case 'Edge':
    alert( "¡Tienes Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Esta bien, soportamos estos navegadores también' );
    break;

  default:
    alert( '¡Esperamos que esta página se vea bien!' );
}

//02)
let Serie=prompt('Ingrese su serie favorita')
switch (Serie){
  case 'Mr. Robot':
  alert('Es una serie de hackers');
  break;
  case 'Hey Arnold!':
  alert('Es una serie buena onda');
  break;

  case 'Samurai X':
    alert('Es una serie de animé');
    break;

    case 'Small Vill':
      alert('Es una serie de ficción gringa del joven Super_Man');
      break;
       
      case 'Two and a half man':
        alert('Es una serie basada en mi vida');
        break;

        case 'Mad about you':
  alert('Es una serie de una pareja NY que se respeta en la buena onda');
  break;

  default:
  alert(' Sorry, but no esta en la lista o ingreso un valor no valido')
  
}






if(navegador === 'Edge')
 {
  console.log('¡Tiene Edge!' );
  }else if(navegador === 'Chrome' ||
  navegador ==='Firefox' ||
  navegador === 'Safari' ||
  navegador === 'Opera' ) {
  console.log('Esta bien soportamos esos navegadores tambien');
  }else{
  console.log('¡Esperamos que esta pagina se vea bien!');
  }



//03)
let edad=parseInt( prompt('ingrese su edad'))

if (edad>=18) {
  alert('Bien, tienes la edad suficiente para entrar!!');
  }

else if (edad>120) {
  alert('ufff, que longevo')
}

else{
    alert('Sorry, vete a casa')
}


let year = prompt('¿En que año fué publicada la especificación ECMAScript-2015?', '');

if (year == 2015) alert( '¡Estás en lo cierto!' );
else(alert(' sorry, sigue intentandolo'))


//04)
let anio=prompt('Ingrese su rut con puntos y guión');
if (anio=='15.465.164-0') {
  alert('Si, Eres Fernando')
}
else{
  alert('No eres Fernando')
}
//05)

let rut=prompt('Ingrese su rut')
if (rut=='15.465.164-0') {
  alert('Su rut corresponde al ciudadano Fernando.')
}

else{
  alert('Ud. ingreso un rut invalido')
}


let year = prompt('¿En qué año fue publicada la especificación ECMAScript-2015?', '');

if (year < 2015) {
  alert( 'Muy poco...' );
}
 else if (year > 2015) {
  alert( 'Muy Tarde' );
} else {
  alert( '¡Exactamente!' );
}

//06)
let kilo=prompt('Cuantos gramos tiene un Kilo')
if (kilo<1000) {
  alert('te faltan gramos para el kilo')
}
else if (kilo>1000) {
  alert('Te sobram gramos para el kilo')
}
else(alert('Exacto!'))



let age = prompt('¿edad?', 0)//?=Escribe   y    : = sino

let message = (age < 3) ? '¡Hola, bebé!' :
  (age < 18) ? '¡Hola!' :
  (age < 100) ? '¡Felicidades!' :
  '¡Qué edad tan inusual!'

alert( message );

//07
let edad=prompt('Ingrese su edad')
let mensaje=(edad<5)?'Eres un bebe':
(edad<15)?'Eres un jovenzuelo':
(edad<18)?'eres un lolo':
(edad<50)?'eres un adulto':
(edad<100)?'eres de la tercera edad':

'que edad ta inusual'
alert(mensaje)


let edad=prompt('Ingrese edad de waldo')
let mensaje=(edad==47)?'correcto':
'la edad no es la correcta'
alert (mensaje);


let edad=prompt('Ingrese edad de waldo')
if (edad==47) 
  alert('ok, super')

else(alert('ud no es waldo'))

//08)
let a, b;
a=parseInt( prompt('ingrese primer valor'))
b=parseInt( prompt('ingrese segundo valor'))
let resultado='el resultado de la suma es ' + (a+b)
alert(resultado)


let a=prompt("ingrese numero", "");
let b=prompt("ingrese segundo numero", "");

let suma=a+b;

alert (`el resultado de la suma es ${suma}`);


//09)
let a=prompt("ingrese numero", "");
let dato1=parseInt(a);
let b=prompt("ingrese segundo numero", "");
let dato2=parseInt(b)
let suma=(dato1+dato2);

alert (`el resultado de la suma es ${suma}`);




let a, b;
a=parseInt( prompt('ingrese primer valor'))
b=parseInt( prompt('ingrese segundo valor'))

let suma=(a,b)=>{
  return 'su resultado es: ' + (a+b)  
}
resultado=suma(a,b)
alert(resultado)

//10)

let a, b;
a=parseInt( prompt('ingrese primer valor'));
b=parseInt( prompt('ingrese segundo valor'));
let suma= ()=>{
  
  let resultado= (a+b)
  alert(resultado);
};
suma()





let a, b;
a=parseInt( prompt('ingrese primer valor'));
b=parseInt( prompt('ingrese segundo valor'));
let suma= ()=>{return (a+b)};
alert(suma ());



let a, b;
a=parseInt( prompt('ingrese primer valor'))
b=parseInt( prompt('ingrese segundo valor'))

let suma=()=>{
  return 'su resultado es: ' + (a+b)  
}
//resultado=suma(a,b)
alert(suma())

//11)

let edad = prompt("What is your age?", 'Escrba aquí');

let entrada = (edad >= 18) ?
  () => alert('pasa') :
  () => alert("fuera");

entrada();


////////////////////30-03-2022

let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return );  // 6


//01)
let objeto={
  for:9,
  let:2,
  return:3
};
alert(objeto.for + objeto.let +objeto.return);



//02)

let objeto={
  n1:9,
  n2:9
}
alert('El poducto es:  ' + objeto.n1 * objeto.n2)


//03)
let n1,n2;
n1=parseInt(prompt('Ingrese n1')) 
n2=parseInt(prompt('Ingrese n2'))
let objeto={
  n1:n1,
  n2:n2
}
alert('El producto de los input es: '+ objeto.n1 * objeto.n2)


//04)
let obj = {
  0: "test" // igual que "0": "test"
};

// ambos alerts acceden a la misma propiedad (el número 0 se convierte a una cadena "0")
alert( obj["0"] ); // test
alert( obj[0] ); // test (la misma propiedad)


//code_Walde
let a=prompt("ingrese valor1", "");

let b=prompt("ingrese valor2", "");

let c=prompt("ingrese valor3", "");

let objeto={
   v1:parseInt(a),
   v2:parseInt(b),
   v3:parseInt(c)
 };
 alert(objeto.v1 + objeto.v2 + objeto.v3);





//05)
let ordenados = {
  "49": "a",
  "41": "b",
  "44": "c",
  
  "1": "d"
};

for (let code in ordenados) {
  alert(ordenados); // 1, 41, 44, 49
}


//
let ordenados = {
  "4": "a",
  "2": "b",
  "3": "c",
  // ..,
  "1": "d"
};

for (let code in ordenados) {
  alert(code);
}


let i = 0
for (; i < 3; i++) { // muestra 0, luego 1, luego 2
  alert(i);
}




let i=0;

for (; i < 3;) { // muestra 0, luego 1, luego 2
  alert(i++);
}



let sum = 0;

while (true) {

  let value = +prompt("Ingresa un número", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Su acumulado es: ' + sum );


////////////////////31-03-2022////////////////////////////
//01)
let suma=0;
while(true){
  let valor =parseInt( prompt('Ingrese un número','0'));

  if(!valor)break;//! acumula el input valor hasta el quiebre_Break
  suma+=valor;
}
alert(`Su valor acumuladoe es: ${suma}`)

///////////////////////
let ordenados = {
  "4": "a",
  "2": "b",
  "3": "c",
  // ..,
  "1": "d"
};

for (let code in ordenados) {
  alert(code);
}



//02)
let ordenados={
  4:'a',
  2:'b',
  3:'c',
  1:'d'
}
for (let codigo in ordenados){
  alert(codigo);
}

//03)

let i=1;
while(i){
  alert(i)
  i++
}

//04)
for (let i = 0; i <10; i++) {
  //const element = array[i];
  alert(i)
}

let i=1
while (i<20) {
  alert(i++)
}


let i = 4;
do {
  alert( i );
  i++;
} while (i < 3);

//05)

let i=4;
do{
  alert(i)
  i++
}while(i<3)


let=5
do {
  alert(i++)
} while (i<5);


//06)
//////////////////////////////01-04-2021
//01)

//for



//1)

let i=0;
for(;i<6;){
  alert(i++ )
} 



//02)


//03)
let i=9;
do {
  alert(i++)
} while (i<5);



let i=0;//_______hasta_7   Mientras
while (i<8) {
  alert(i++)
}


let i=0;
for(;i<8;){
  alert(i++);
}
////////////////////////////////04-04-2022


//01)
let i=0;
for (;i<8;){
  alert(i++)
} 

//02
let i=0;
while (i<9) {
  alert(i++)
}

//03)

let i=2;
do {
  alert(i++)
} 
while (i<4);

//04)
let a,b;
a=2
b=2
resultado=(a+b)
alert(resultado)

//05)
let a,b;
a=2;
b=2;
resultado=`${a+b}`
alert(resultado)


let a=2,b=5;

let suma=()=>{
  return (a+b)
}


let a=2,b=5;

let suma=(a,b)=>{
  return (a+b)+' Es el resultado de su suma'
}
resultado=suma(a,b);
alert(resultado);
///////////////////////////////////////////////////////////////////////////////////////////
Suma +,
Resta -,
Multiplicación *,
División /,
Resto %,
Exponenciación **.
Incremento !

//05)

alert(2**5)


let a,b;
a=parseInt(prompt('ingrese valor uno'))
b=parseInt(prompt('ingrese valor dos'))
alert(a**b)

//06)
alert(2*5)

//07)

alert(+false+2)

//08)
alert(-true)

alert(-false)

//08)
let x = 2 * 2 + 1, z=5;

alert( x**z ); // 3125

//09)
let a = 1;
let b = 2;

let c = b - (a = b + a);

alert( a ); // 3
alert( c ); // 0

//10)
let n=5;
n+=4
alert(n)


let a=1;
a++;
alert(a)

//11)
let a=1;
let b=a++
alert(b)


let a=1
alert(2**++a)//unValide.-

let counter = 1;
counter++;
alert( 2 * counter );


////////////////////////////////////////////////////////////////////////////////////////////Simbolos/////////////////////////////////////////////////////////////////////////////
AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )

Suma +,
Resta -,
Multiplicación *,
División /,
Resto %,
Exponenciación **.
Incremento !

//12)
let a=(12+12,12+12)//aroja el resultado de la ultima suma.-
alert(a)



function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Estás de acuerdo?",
  function() { alert("Estás de acuerdo"); },
  function() { alert("Cancelaste la ejecución."); }
);


//14)
function   pregunta(llave,si,no){
  if (confirm(llave))
  si()
  else no()
}
pregunta(
  "Estas de acuerdo??",
  function(){alert('ok, estas de acuerso')},
  function(){alert('cancelaste la ejecución')}
);



//15)
//Expresiones de función

let pregunta=(llave,si,no)=>{
if(confirm(llave))
si()
else no()
}
pregunta(
  "Estas de acuerdo???",
  ()=>{alert('okiDoky, Estas de aceurdo')},
  ()=>{alert('ufffffff, no estas de acuerdo')}
);


///////////////////////////////////////////////05-04-2022/////////////////////////////
//01)
let consulta=(llave,y,n)=>{
if(confirm(llave))
y()
else n()
}
consulta(
  'Estas de acuerdo?',
()=>{alert('ud. a aceptado nuestros terminos')},
()=>{alert('ud. no a aceptado los terminos')}
)

//02)

let consultar=(kay,y,n)=>{
if(confirm(kay))
y()
else n()
}
consultar(
  'Confirme o rechace',
  ()=>{alert('ud. aceptó')},
  ()=>{alert('ud. rechazó')}
)


///////////////////////////////////////////////////////////////////////
let age = prompt("Cuál es tu edad?", 18);

// declarar condicionalmente una función
if (age < 18) {

  function welcome() {
    alert("Hola!");
  }

} 
else {

  function welcome() {
    alert("Saludos!");
  }

}0

// ...usarla más tarde


//03)
let age =prompt('cual es tu edad?', 0);
if (age<18){
 w=()=>{
    alert('Get out!')
  }
}
else{
   w=()=>{
    alert('ok you can enter')
  }
}

w()



//04)
/////////////////////////////////////////con funciones
let edad=prompt('ingrese su edad',0)
if (edad<18){
  a=()=>{
    alert('Fuera, eres menor')
  }
}
else{
  a=()=>{
    alert('Ud. Puede ingresar')
  }
}
a()


///////////////////////////////////////////sin funcion.
//05)
let edad=prompt('ingrese su edad')
if(edad<18){
  alert('No')
}
else{
  alert('si')
}
//06)

let edad=prompt('ingrese su nombre') 
if(edad<18){
  a =()=>{
    alert('no')
  }
}
else{
  a=()=>{
    alert('si')
  }
  
}
a()



////////////  || devuelve el primer valor verdadero.
///////////   ?? devuelve el primer valor definido.

//07)
let height = 0; // altura cero

alert(height || 100); // 100
alert(height ?? 100); // 0

let n1=0;

//alert(n1||100);
alert(n1??100);



let height = null;
let width = null;

// Importante: usar paréntesis
let area = (height || 100) * (width || 50);

alert(area); // 5000



let x = (2 && 2) ?? 3; // Funciona

alert(x); // 2


//08)

function pow(x, n) {
  let result = 1;

  // multiplicar el resultado por x n veces en el ciclo
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

alert( pow(2, 3) ); // 8


function mult(x,n){
  let result=1;

  for (let i=0;i<n;i++){
    result*=x;
  }
  return result;
}
alert(mult(2,4));

/////////////////////////////////////06-04-2022///////////////////////////////////////////////

//01)
function mult(x,n){
  let result=1;

  for(let i=0;i<n;i++){
    result*=x;
  }
  return result;
}
alert(mult(2,4));


//02)

let result=1;

let mult=(x,n)=>{

for(let i=0;i<n;i++){
  result*=x;
  
}
return result;
}
alert(mult(2,4))


///////////////////////////////////////08-04-2022//////////////////////////////////////////////////////
//01)
let result=1;
let mult=(x,n)=>{
  for(let i=0;i<n;i++){       //Dice: haz 4 ciclos de multiplicar 2 * 2 cuatro veces. 
    result*=x;
  }
  return result;
}

alert(mult(2,4))


//02)
let result=1;
let mult=(x,n)=>{
  for(let i=0;i<n;i++){
    result*=x
  }
  return result
}
result=(mult(2,4))
alert(result)


//03)
function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let suma=(a,b)=>{
return a+b;
}
alert(`1+2 = ${suma(1,2)}`);

/////////////////////////////////////11-04-2022/////////////////////////////////////////
//01)
//let year = prompt('¿En que año fué publicada la especificación ECMAScript-2015?', '');
//if (year == 2015) alert( '¡Estás en lo cierto!' );
let año=prompt('en que año naciste',0)
if(año==1981){
  alert('Muy bien, eres Fer')
}
else{(alert('Sorry, no eres Fer'))
}
//02)

let year = prompt('¿En qué año fue publicada la especificación ECMAScript-2015?', '');

if (year < 2015) {
  alert( 'Muy poco...' );
} else if (year > 2015) {
  alert( 'Muy Tarde' );
} else {
  alert( '¡Exactamente!' );
}

//03)
let año=prompt('En que año naciste','')
if(año<1981){
  alert('No eres tan mayor Fernando')
}else if(año>1981){
alert('No eres tan joven Fernando')
}
else{
  alert('Exacto, diste en el numero')
}


//04)
let age = prompt('¿edad?', 18);

let message = (age < 3) ? '¡Hola, bebé!' :
  (age < 18) ? '¡Hola!' :
  (age < 100) ? '¡Felicidades!' :
  '¡Qué edad tan inusual!';

alert( message );

//05)
let edad=prompt('ingrese su edad',0);
let saludo=(edad<3)?'Eres solo un B-B':
(edad<11)?'Eres un niño':
(edad<14)?'Eres un Pre_adolecente':
(edad<18)?'Eres un adolecente':
(edad<35)?'Eres un adulto joven':
(edad<45)?'Eres un adulto maduro':
(edad<55)?'Eres un adulto grande':
(edad<65)?'Eres un adulto mayor':
(edad<90)?'Whoooo!, llegaste hacer todo un anciano':
'Uffffffff, que edad tan inusual';
alert(saludo)


//06)                                     ?Escribe esto         :sino
let ask=prompt('Cual es tu nombre?',0);
let name=(ask=='Fer')?'ok. pudes entrar':
'Error';
alert(name)


//07)

//let a=parseInt=prompt('Primer cifra')
//let b=parseInt=prompt('Segunda cifra')
//let result;

// if (a + b < 4) {
//   result = 'Debajo';
// } else {
//   result = 'Encima';
// }

let a=parseInt(prompt('ingrese primera cifra'))
let b=parseInt(prompt('Ingrese segunda Cifra'))
let result = (a + b < 11) ? 'Debajo' :
 'Encima';
 alert(result)

let message;

if (login == 'Empleado') {
  message = 'Hola';
} else if (login == 'Director') {
  message = 'Felicidades';
} else if (login == '') {
  message = 'Sin sesión';
} else {
  message = '';
}



//08)

let message = (login == 'Empleado') ? 'Hola' :
  (login == 'Director') ? 'Felicidades' :
  (login == '') ? 'Sin sesión' :
  '';


let pass=parseInt(prompt('Ingrese su Password'))
let message=(pass=='1234')?'Puedes entrar, eres el gerente':
(pass=='123')?'puedes entrar, eres del equipo de ingeniería':
(pass=='12')?'Eres técnico':
'No eres parte del equipo';
alert(message);


//09)

let a = parseInt(prompt('In_n1'))
//let b = parseInt(prompt('In_n2'))

switch (a) {
  case 3:
    alert( 'Muy pequeño' );
    break;
  case 4:
    alert( '¡Exacto!' );
    break;
  case 5:
    alert( 'Muy grande' );
    break;
  default:
    alert( "Desconozco estos valores" );
}


let arr = ["Yo", "estudio", "JavaScript", "ahora", "mismo"];

// remueve los 2 primeros elementos
let removed = arr.splice(0, 2);

alert( removed ); // "Yo", "estudio" <-- array de los elementos removidos

//01)



//02)

let formas=['circulo', 'cuadrado', 'rectangulo', 'ovalo']
let ordenes=formas.splice(0,1,2,3);
alert(ordenes);

//03)
let arreglado=['yo','practico','ajedrez', 'todos ', 'los', 'días'];
let ordenados=arreglado.splice(5)  //El 0 llama a todos los elementos del arreglo.
alert(ordenados);






//4)
let arreglo=['Brasil', 'Argentina', 'Uruguay', 'Chile', 'Bolivia', 'Peru', 'Ecuador'];
let ordenados=arreglo.splice(1)
alert(ordenados);



let arr = ["Yo", "estudio", "JavaScript"];

// desde el index 2
// remover 0
// después insertar "el", "complejo" y "language"
arr.splice(2,0,"el", "complejo", "language");

alert( arr ); // "Yo", "estudio","el", "complejo", "language", "JavaScript"


//05)
let arr = ["t", "e", "s", "t"];

alert( arr.slice(2, 4) ); // e,s (copia desde 1 hasta 3)

alert( arr.slice(-3) ); // s,t (copia desde -2 hasta el final)

let arreglo=['a','b','c','d'];
alert(arreglo.slice(1,4))


//06)
let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

alert( arr.concat(arrayLike) ); // 1,2,something,else



let arr=[1,2,'este arr, es solo para concatenar'];
let arreglo={
  0:'algo',
  1:'sino',
  [Symbol.isConcatSpreadable]:true,
  length:2
}
alert(arr.concat(arreglo));





["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

//07)
['Bilbo', 'Gandalf', 'Nazgul'].forEach(alert

//08)  
  ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
  });



['Bilbo', 'Gandalf', 'Nazgul'].forEach((it,ind,ar)=>{
  alert(`${it} is at index ${ind} in ${ar}`)
})
/////////////////////////////////////////////19-04-2022//////////////////////////////////////

let map = new Map();

map.set('1', 'str1');   // un string como clave
map.set(1, 'num1');     // un número como clave
map.set(true, 'bool1'); // un booleano como clave

// ¿recuerda el objeto regular? convertiría las claves a string.
// Map mantiene el tipo de dato en las claves, por lo que estas dos son diferentes:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3


//1)

let map=new Map();
map.set('1', 'str1');
map.set(1,'num1');
//map.set(true, 'bool1');

alert(map.get(1));
alert(map.get('1'));
alert(map.size);

//2)
let mapa =new Map();
mapa.set('1', 'str1');
mapa.set(1, 'num1');
mapa.set(2, 'prueba')

alert(mapa.get('1'))
alert(mapa.get(1))
alert(mapa.get(2))

alert(mapa.size)

//3)




let claveObj={clave:'E_Corp'};

let visitas=new Map();
visitas.set(claveObj, '15.465.164-0')
alert(visitas.get(claveObj));
alert(visitas.size)



let johnn = { name: "john" };

// para cada usuario, almacenemos el recuento de visitas
let visitsCountMap = new Map();

// john es la clave para el Map
visitsCountMap.set(johnn, 123);

alert( visitsCountMap.get(johnn) ); // 123

//04)

let llave={name:'Eliot'};
let F_society=new Map();

F_society.set(llave, 1919);

alert(F_society.get(llave));
alert(F_society.size);



let mapa =new Map();
mapa.set('1', 'str1');
mapa.set(1, 'num1');
mapa.set(2, 'prueba')

alert(mapa.get('1'))
alert(mapa.get(1))
alert(mapa.get(2))

alert(mapa.size)



//let Portal = {
  // name: "String, cualquier cosa/No impacta el codigo"
   //};

let Sistema_Dagobah = new Map();


Sistema_Dagobah.set(Portal, 11111111111111111111111111111111);

alert( Sistema_Dagobah.get(Portal) ); 
alert(Sistema_Dagobah.size)



//5)

let llave=new Map();
llave.set(1,'ENCENDIDO');
llave.set(2,'APAGADO');

alert(llave.get(1));
alert(llave.get(2));
alert(llave.size);

/////////////////////////////////////////////////////20-04-2022//////////////////////////////////
//01)
let llave=new Map();
llave.set(1,'On')
llave.set(2,'off')
alert(llave.get(1))
alert(llave.get(2))
alert(llave.size)



//02
let recipeMap = new Map([
  ['pepino', 500],
  ['tomates', 350],
  ['cebollas',    50]
]);

// iterando sobre las claves (verduras)
//for (let vegetable of recipeMap.keys()) {
  //alert(vegetable); // pepino, tomates, cebollas
//}



// iterando sobre los valores (precios)
//for (let amount of recipeMap.values()) {
  //alert(amount); // 500, 350, 50
//}

// iterando sobre las entradas [clave, valor]
for (let entry of recipeMap) { // lo mismo que recipeMap.entries()
  alert(entry); // pepino,500 (etc)
}

////////////////////////////////////////////////25-04-2022///////////////////////////////////////////////////////
//1)

let saludo=()=>{
  let hola=alert('Hola amigos mios')
}
saludo();

/////////////////////////////////////////////////////////////////////////////////////
//02)
let pasar_aFarenheit=(grado)=>{return pasar_aFarenheit=grado*1.8+32;};
let result=pasar_aFarenheit(22)

//document.getElementById('calular').innerHTML=result;
alert(result)


let a=prompt=('ingrese °C',0);
let conversor=(grado)=>{return conversor=grado*1.8+32;};
let result=conversor(a)  
alert(result) 




let a=parseInt( prompt("ingrese grado", "0"));
//let grado=parseInt(a);
let conversor=(grado)=>{return conversor=grado*1.8+32;};
let result=conversor(a);
alert (result) ()


let a =parseInt(prompt('Ingrese °C',0))
let conversor=(grado)=>{return conversor=grado*1.8+32}
let result=conversor(a);
alert(result)

//03)
function sumar (num1,num2) {
  console.log(num1+num2)
  }
sumar(10,20)


let n1= parseInt(prompt('Ingrese n1'));
let n2= parseInt(prompt('Ingrese n2'));
function suma(n1,n2){
  alert('Su suma es: '+(n1+n2) );
}
suma(n1,n2);

//04)
let suma=(a,b)=>{
  return ` el resultado de su suma es: ${a+b}`;
}
let resultado=suma(a,b)
alert(resultado);


//
let a=parseInt(prompt('ingrese n1'));
let b=parseInt(prompt('Ingrese n2'));
let suma=(a,b)=>{return `El resultado es: ${a+b} `}
result=suma(a,b)
alert(result)

//05)

let a=parseInt(prompt('ingrese n1'));
let b=parseInt(prompt('Ingrese n2'));

let div=(a,b)=>{
  return 'su resultado es: ' + a/b;
}
resultado=div(a,b);
alert(resultado)



let a=parseInt(prompt('Ingrese n1',0));
let b=parseInt(prompt('Ingrese n1',0));

//let mult=(a,b)=>{return 'El producto es: '+ a*b};
let mult=(a,b)=>{return`El producto es: ${a*b}`};
//result=mult(a,b);
alert(mult(a,b))


//06)
let i=0;
while(i<6){
  alert(i++)
}

//07)
let a=0;
while(a>-6){
  alert(a--)
}
//
let i=0;
for(;i<5;){
  alert(i++)
}
//
let a=prompt('Ingrese su nombre')
let hi=()=>{
  alert(`bien venido ${a}`)
}
hi()

///////////////////////////////////////////27-04-2022/////////////////////////////////////////////
//ln391
//01)
let obj={

  j:` Volkswaguen `,
  k:` gol `,
  l:` deportivo `,
  m:` aliacion `,
  n:` anchos `,

}
console.log(obj.j+obj.n);
alert(obj.j+obj.n)

let Obj={
  personaje:`Eliot`,
  oficio:`Hacker`,
  empresa:`F_Society`,
  mision:`llevar equidad al mundo`,
  enemigo:`E-Corp`
}
alert(Obj.personaje+' es un '+ Obj.oficio)


let Mascota={
  gato:`miay hace el gato`,
  perro:`guau hace el perro`,
  pollito:`pio pio hace elpollito`
}
alert(Mascota.gato+' '+Mascota.perro+' '+Mascota.pollito)


//02)

class Bicicleta{
  constructor(marca, modelo, marco, rueda, valvula, caramayola){
  this.marca='Gt';
  this.modelo='MTB';
  this.marco='Tijera';
  this.rueda='Aro 26';
  this.valvula='Americana';
  this.caramayola='Botella de 1/2Lt'

}
}
let Mi_Bicicleta=new Bicicleta();//Istancia
document.write(Mi_Bicicleta.marca+' del modelo:  '+Mi_Bicicleta.modelo+' tipo de caramayola: '+Mi_Bicicleta.caramayola )


class Mascota{
  constructor(perro, gato, pollito){
    this.perro='el perro dice guau';
    this.gato='el gato dice miau';
    this.pollito='el pollito dice pio pio'
  }
}
let Mis_Mascotas=new Mascota();
alert()



//03)

//ln637


let b=parseInt(prompt('ingrese n1'))
let c=parseInt(prompt('ingrese n2'))
let a = b * c;

switch (a) {
  case 3:
    alert( 'Muy pequeño' );
    break;
  case 4:
    alert( '¡Exacto!' );
    break;
  case 5:
    alert( 'Muy grande' );
    break;
  default:
    alert( "Desconozco estos valores" );
}

//04)
let i=0;
while(i<7){
  alert(i++)
}

//05)

let i=0;
for(;i<7;){
  alert(i++)
}




let pregunta=(llave,si,no)=>{
  if(confirm(llave))
  si()
  else no()
  }
  pregunta(
    "Estas de acuerdo???",
    ()=>{alert('okiDoky, Estas de aceurdo')},
    ()=>{alert('ufffffff, no estas de acuerdo')}
  );
  

  let pregunta=(llave, si, no)=>{
    if(confirm(llave))
    si()
    else no ()  
    }
    pregunta(
      '¿Estas de acuerdo con nuetras politicas?',
      ()=>{alert('Ud. Esta de acuerdo con nuestras politicas')}
      ()=>{alert('Ud. No esta de acuerdo con nuestras politicas')}
    )



    let a, b;
a= prompt ("En que año ejecutaron el golpe de estado en Chile los infelices?", "");
b= parseInt (a);

switch (b) {
   case 1973: alert ("Correcto")
   break;
   default: alert ("Incorrecto");
}


let a, b, c, d, e;
a= prompt ("ingrese valor1 a sumar para que el resultado sea 4", "");
b= parseInt (a);
c= prompt ("Ingrese valor2", "");
d= parseInt (c);
e= b+d;
switch (e) {
   case 4 : alert ("Exacto !");
   break;
   default: alert ("No, incorrecto, siga participando")

   //05)
   let navegador=prompt('ingrese navegador')
   switch (navegador) {
     case 'Edge':
       alert( "¡Tienes Edge!" );
       break;
   
     case 'Chrome':
     case 'Firefox':
     case 'Safari':
     case 'Opera':
       alert( 'Esta bien, soportamos estos navegadores también' );
       break;
   
     default:
       alert( '¡I dont know this brw. I hope that this páge se vea bien!' );
   }

   

   let vehiculo=prompt('Ingrese el modelo de su vehiculo')
   switch(vehiculo){
     case  'Fiorino':
       alert('Tienes una Fiore');
       break
       case 'Ford':
         case 'Chevrolet':
         case'John deer':
         case'Volkswawgen':
         case 'Mercedes':
           case 'Volvo':
            case 'Chrysler':
         alert('Su vehiculo esta respaldado por una gran marca')
   
   break;
   default:
     alert('Ud tiene un vehiculo Charchely');
  }
  

//05)
  //ln33)
  let sum = 0;
while (true) {
  let value = +prompt("Ingresa n números para sumar, luego preisone ENTER para obtener el resultado", '');

  if (!value) break; // (*)
  sum += value;

}
alert( 'Suma: ' + sum );


let suma=0;
while(true){
  let valor=+prompt('Ingrese n numeros a la maquina sumadora','');
  if(!valor)break;
  suma+=valor;
}
alert('Su acumuladoe es'+' '+suma)

////////////////////////////////////////////////28-04-2022/////////////////////////////////////////////////////////
//01)
let suma=0;
while(true){
  let acumulado=+prompt('Ingrese n numeros para alimentar la maquina sumadora','');
  if(!acumulado)break;
  suma+=acumulado
}
alert('su acumuladod es'+' '+suma)


//02)
let suma=0;
while(true){
let acumulado=+prompt('in numeros para crear la maquina acumulada',0)
if(!acumulado)break;
suma+=acumulado;
}
alert('su acumulado total es'+' '+suma)

//03)

let suma=0;
while(true){
  let acumulado=+prompt('Ingrese valores para generar el acumulado',0)
  if(!acumulado)break;
  suma+=acumulado;
}
alert('su acumulado total es'+' '+ suma)

//04)
let suma=0;
while(true){
  let acumulado=+prompt('Ingrese numeros a la maquina acumuladora',0)
  if(!acumulado)break;
  suma+=acumulado;
}
alert('El acumulado total es'+' '+suma)

//05
let suma=0;
while(true){
let acumulado=+prompt('Ingrese numeros para alimentar la maquina acumuladora',0);
if(!acumulado)break;
suma+=acumulado
}
alert('El resultado de los acumulados son'+' '+suma)


//06)
let suma=0;
while(true){
  let acumulado=+prompt('Ingrese numeros');
  if(!acumulado)break;
  suma+=acumulado;
}
alert('el acumulado es'+' '+suma);



//07)///////////////////////////////if ! con incremento////////////////////////////////////////////

let sumando=0;
while(true){
  let=incremental=+prompt('ingrese');
if(!incremental)break;
sumando+=incremental;
}
alert('El resultado de los acumulados son'+' '+sumando)

//08)
let sumandos=0;
while(true){
  let incremento=+prompt('Ingrese valoers')
  if(!incremento)break;
  sumandos+=incremento;
}
alert('Su resultado es'+' '+sumandos);


//09)
let suma=0;
while(true){
  let incremento=+prompt('Ingrese valores')
  if(!incremento)break;
  suma+=incremento
}
alert('El total cumuladoe es'+' '+suma)


//10)
let suma=0;
while(true){
  let incremento=+prompt('Ingrese valores');
  if(!incremento)break;
  suma+=incremento;
}
alert('resultado es'+' '+suma);


////////////////////////////////////////////02-may-2022///////////////////////////////////////////////////////
//01)
let sumatoria=0;
while(true){
  let acumulado=+prompt('Ingrese valores',0)
if (!acumulado)break;
sumatoria+=acumulado;
}
alert('acumulado es:'+' '+sumatoria)

//02)
let sumados=0;
while(true){
  let acumulado=+prompt('Ingrese n numeros',0)
  if(!acumulado)break;
  sumados+=acumulado;
}
alert('Su resultado es:'+' '+sumados)

//03)



let vehiculo=prompt('Ingrese el modelo de su vehiculo')
switch(vehiculo){
  case  'Fiorino':
    alert('Tienes una Fiore');
    break
    case 'Ford':
      case 'Chevrolet':
      case'John deer':
      case'Volkswawgen':
      case 'Mercedes':
        case 'Volvo':
         case 'Chrysler':
      alert('Su vehiculo esta respaldado por una gran marca')

break;
default:
  alert('Ud tiene un vehiculo Charchely');
}

/////////////////////////////Clase//////////////////////////////////////////
const mascota = {
  nombre: 'Tom',
  edad: 5,
  tipo: 'gato',
  raza : 'peludo'
}
raza : 'peluda'
mascota.peso='10kl';
//console.log(mascota)
console.log(mascota.raza)


//04)
class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

// Uso:
let user = new User("John");
user.sayHi();

//////////////////////////////////////////////////////////////////////////////
class User{
  constructor(name){
  this.name=name;
}
sayHi(){
alert(this.name);
}
}
let user=new User('Fernando');
user.sayHi();


//05)
class Usuario{
  constructor(nombre){
    this.nombre=nombre;
  }
  DiHola(){
    alert(this.nombre)
  }
}
let user=new Usuario('Fernando, hola como estas')
user.DiHola()


//06)

class Usuario{
  constructor(nombre){
    this.nombre=nombre;
    }
Hola(){
  alert(this.nombre)
}
}
 let User=new Usuario('Hola como estas')
 User.Hola() 


class Usuario{
  constructor(nombre){
    this.nombre=nombre;
  }
  Hola(){
    alert(this.nombre)
  }
}
let User=new Usuario('Hola como estas amigo')
User.Hola()


//07)
class Usuario{
  constructor(name){
    this.name=name;
  }
  Hola(){
    alert(this.name)
  }
}
let User=new Usuario('Hola como te va')
User.Hola()

//08)
class Usuario{
  constructor(nombre){
    this.nombre=nombre;
  }
  saludo(){
    alert(this.nombre)
  }
}
let User=new Usuario('Hola amigo, como va')
User.saludo()

//09)
class Usuario{
  constructor(nombre){
    this.nombre=nombre;
  }
  Saludo(){
    alert(this.nombre)
  }
}
let User=new Usuario('Hola')
User.Saludo()

//10)

class Usuario{
  constructor(name){
    this.name=name;
  }
  Saludo(){
    alert(this.name)
  }
}
let User=new Usuario('Hola sensei')
User.Saludo()


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

//////////////////////////////////////////////04-05-2022/////////////////////////////////////////////////////////////////////  

let mes;
mes=+prompt('Ingrese el numero del mes, para saber su numero de días',0)
if(mes==1||mes==3||mes==5||mes==7||mes==8||mes==12){
  alert('Este mes tiene 31 días / App NandoScript')
}
else if(mes>12||mes<1){
  alert('Este mes no existe / App NandoScript')
}
else if(isNaN(mes)){
  alert('Ud. Ingreso un valor invalido / App NandoScript')
}
else{
  mes=(mes==2)
  ?'Este mes tiene 28 días / App NandoScript'
  :'Este mes tiene 30 días / App NandoScript'
  alert(`${mes}`)
}


//01)

let mes;
mes=+prompt('Ingrese el numero de mes')
if(mes==1||mes==3||mes==5||mes==7||mes==8||mes==12){
  alert('Este mes tiene 31 días')
}

let mes=+prompt('Ingrese el numero del mes del cual quiere saber su numero de días')
if(mes==1||mes==3||mes==5||mes==7||mes==8||mes==12){
  alert('Este mes tiene 31 días')
}
else if(mes>12||mes<1){
  alert('Este mes no existe')
}
else if(isNaN(mes)){
  alert('Ud. Ingreso caracteres invalidos')
}
else{
  mes=(mes==2)
  ?'Este mes tiene 28 días'
  :'Este mes tiene 30 días'
  alert(`${mes}`)
}

let mes=+prompt('Ingrese el numero del mes, para obtener su numero de días');
if(mes==1||mes==3||mes==5||mes==7||mes==8||mes==12){
  alert('Este mes tiene 31 días')
}
else if(mes>12||mes<1){
  alert('Este mes no existe')
}
else if(isNaN(mes)){
  alert('Ud. Ingreso un valor invalido')
}
else{
  mes=(mes==2)
?'Este mes tiene 28 días'
:'Este mes tiene 30 días'
  alert(`${mes}`)
}



let mes=+prompt('Ingrese el numero del mes del cual quiera obtener su numero de días')
if(mes==1||mes==3||mes==5||mes==7||mes==8||mes==12){
  alert('Este mes tiene 31 días')
}
else if(mes>12||mes<1){
  alert('Este mes no existe')
}
else if(isNaN(mes)){
  alert('Ud. Ingreso un valor invalido')
}
else{ mes=(mes==2)
?'Este mes tiene 28 días'
:'Este mes tiene 30 días'
  alert(`${mes}`)
}



let mes=+prompt('Ingrese mes de interes')
if(mes==1||mes==3||mes==5||mes==7||mes==8||mes==12){
  alert('Este mes tiene 31 días')
}
else if(mes<1||mes>12){
  alert('Este mes no EXISTE')
}
else if(isNaN(mes)){
  alert('Ud. Ingreso un valor invalido')
}
else{
  mes=(mes==2)
  ?'Este mes tiene 28 días o 29 ,si y solo si, es bisiesto'
  :'ESte mes tiene 30 días'
}
alert(`${mes}`)


let mes=+prompt('Ingrese el mes para saber su numero de días')
if(mes==1||mes==3||mes==5||mes==7||mes==8||mes==12){
  alert('Este mes tiene 31 días')
}
else if(mes<1||mes>12){
  alert('Este mes no Existe')
}
else if(isNaN(mes)){
  alert('Este valor es nulo')
}
else{
  mes=(mes==2)
  ?'Este mes tiene 28 días'
  :'Este mes tiene 30 días'
  }
alert(`${mes}`)


let mes=+prompt('Ingrese el mes',0)
if(mes==1||mes==3||mes==5||mes==7||mes==8||mes==12){
  alert('Este mes tiene 31 días')
}
else if(mes<1||mes>12){
  alert('Este mes no existe')
}
else if(isNaN(mes)){
  alert('Ud. Ingreso un dato Invalido')
}
else{
  mes=(mes==2)
  ?'Este mes tiene 28 días'
  :'Este mes tiene 30 días'
}
alert(`${mes}`)



let suma=0;
while(true){
let acumulado=+prompt('Ingrese numeros para alimentar la maquina acumuladora',0);
if(!acumulado)break;
suma+=acumulado
}
alert('El resultado de los acumulados son'+' '+suma)

***************************************************************Desarrollos******************************************************************** 
//I)
let suma=0;
while(true){
  let acumulado=+prompt('Ingrese número para alimentar la maquina acumuladora',0);
  if(!acumulado)break;
  suma+=acumulado
}
alert('El resultado acumulado es'+' '+suma)

let suma=0;
while(true){
  let acumulado=+prompt('Ingrese numeros')
  if (!acumulado)break;
  suma+=acumulado;
}
alert('acumulado total+'+' '+suma)

///////////////////////////////////////////////////////////acumulador/////////////////////////////////////

let suma=0;
while(true){
  let acumulado=+prompt('Ingrese valores para acumular')
  if(!acumulado)break;
  suma+=acumulado
}
alert(` su acumulado es ${suma}`)

///////////////////////////////////////////////////////suma simple////////////////////////////////////////////////////
let a,b;
a=5; b=1;
resultado=a+b;
alert(resultado)

////////////////////////////////////////////////////////Meses///////////////////////////////////////////////////////
let mes=+prompt('Ingrese el mes de su interes')
if(mes==1||mes==3||mes==5||mes==7||mes==8||mes==12){
  alert('Este mes tiene 31')
}
else if(mes<1||mes>12){
  alert('Este mes no existte')
}
else if(isNaN(mes)){
  alert('Ud. Ingreso un valor nulo')
}
else{
  mes=(mes==2)
  ?'Este mes tiene 28 días'
  :'Este mes tiene 30 días'
}
alert(`${mes}`)

/////////////////////////////////////////////////////////////////////////acumulado.
let suma=0;
while(true){
  let acumulado=+prompt('Ingrese numeros que desea acumular')
  if (!acumulado)break;
  suma+=acumulado
}
alert(`su acumulado total es ${suma}`)

/////////////////////////////////////////////////////////////////////////Suma
let a,b;
a=10;b=10;
result=a+b;
alert(result)

/////////////////////////////////////////////////////////////////////////meses
let mes=+prompt('Ingrese valor')
if(mes==1||mes==3||mes==5||mes==7||mes==8||mes==12){
  alert('Este mes tiene 31días')
}
else if(mes<1||mes>12){
  alert('Este mes no existe')
}
else if(isNaN(mes)){
  alert('Ud. Ingreso un valor nulo')
}
else{
  mes=(mes==2)
  ?'Este mes tiene 28 días'
  :'Este mes tiene 30 días'
}
alert(`${mes}`)

let mes=+prompt('Ingrese vaor')
if(mes==1||mes==3||mes==5||mes==8||mes==12){
  alert('Este mes tiene 30 días')
}
else if(mes<1||mes>12){
  alert('Este mes no Existe')
}
else if(isNaN(mes)){
  alert('Ud. Ingreso un valor nulo')
}
else{
  mes=(mes==2)?'Este mes tiene 28 días'
  :'Este mes tiene 31 días'
}
alert(`${mes}`)

let mes=+prompt('Ingrese el mes del cual desea saber el numero de días')
if(mes==1||mes==3||mes==5||mes==7||mes==8||mes==10||mes==12){
  alert('Este mes tiene 31 días ')
}
else if(mes<1||mes>12){
  alert('Este mes no existe')
}
else if(isNaN(mes)){
  alert('Ud. Ingreso un valor nulo')
}
else{
  mes=(mes==2)?'Este mes tiene 28 días'
  :'Este mes tiene 30 días'
}
alert(`${mes}`)


//////////////////////////////////////////////////////////////////Input de dato
let dato, resultado;
dato=prompt('Ingrese su nombre');
resultado=(`Bienvenido Sr(a) ${dato}`);
alert(resultado);

let dato, num, total;
dato=+prompt('Ingrese el valor Bruto')
num=.19*dato;
total=num+dato
alert(`Su iva es ${total}. App Nando_Script`)
///////////////////////////////////////////////////////////////
let contador=1
while (contador<5){
  let dato=+prompt('Igrese numero')
  dato=contador+1;
}
alert(contador)



let i = 3;
while (i) alert(i--);




let i=5;
while(i)
alert(i++)


let i=10;
while(i);
alert(i--)


let i=100;
while(i);
alert(i--)


let i=10;
while(i);
alert(i--)


let i=100;
while(i)
alert(i--)

let i=50;
while(i)
alert(i++)



let i = 0;
while (i < 3) { // muestra 0, luego 1, luego 2
  alert( i );
  i++;
}

let i=51;
while(i){
  alert(i--);
}


let i=51;
while(i)
alert(i--)


let i = 10;
while (i ) { // muestra 0, luego 1, luego 2
  alert( i );
  i--;
}

let i=50;
while(i){
alert(i--)
}



for (let i = 0; i < 10; i++) {

  // si es verdadero, saltar el resto del cuerpo
  if (i % 2 == 0) continue;

  alert(i); // 1, luego 3, 5, 7, 9
}
////////////////////////////////////////////////////////////////////////////////////
for (let i=1;i<10;i++){
  if(i % 5==5)continue;//if(i % 2==1)continue; pares*********if(i % 2==0)continue; impares*******************if(i % 0==0)continue;todos los numeros
  alert(i)
}
//0 a la derecha= Impares--------------2 a la Izquierda= pares------------------ otra combinacion= corelativaos 



for(let i=1;i<10;i++){      //Todos menos los multiplos de 2, osea, los impares
  if(i % 2==0)continue;
  alert(i);
}



for(let i=1;i<10;i++){      //todos menos los multiplos de 4
  if(i % 4==0)continue;
  alert(i);
}



for(let i=1;i<10;i++){      //todos menos los multiplos de  7
  if(i % 7==0)continue;
  alert(i);
}
//y así sustantivamente.



for(let i=1;i<10;i++){   //Todos
  if(i % 1==1)continue;
  alert(i);
}



for(let i=1;i<10;i++){   //Todos
  if(i % 0==0)continue;
  alert(i);
}



for(let i=1;i<10;i++){   //Todos
  if(i % 0==1)continue;
  alert(i);
}



for(let i=1;i<10;i++){   //Todos
  if(i % 0==5)continue;
  alert(i);
}


//////////////////////////////////////////////////Continue, multiplos/////////////
for(let i=0;i<20;i++){
  if(i % 5==0)continue;
  alert(i);
}


let i=0;
while(i<5){
  alert(i++)
}

let i=0;
while(i<11){
  alert(i++)
}


let i=0;
while(i<11){
  alert(i++)
}

//acumulado
let suma=0;
while(true){
  let acumulado=+prompt('Ingrese numero para acumular')
  if(! acumulado)break;
  suma+=acumulado;
}
alert(suma)


let dato, num, total;
dato=+prompt('Ingrese el valor Neto')
num=.19*dato;
total=num+dato
alert(`Su total bruto es: ${total}. App Nando_Script`)
*/
let dato, num, total;
dato=+prompt('Ingrese su valor Neto')
num=.19*dato;
total=num+dato;
alert(`Su total bruto es ${total}. APP NandoScipt`)