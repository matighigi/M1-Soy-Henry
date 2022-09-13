
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // aca tiraria el valor de 10 para x (por que está definido dentro del contexto)
  console.log(a);// aca tiraria el valor de 5 para a (ya que no lo encuentra en su contexto por lo cual le pide la info al contexto global)
  var f = function(a, b, c) {
    b = a;
    console.log(b);// acá imprime el valor de 5
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);// imprime el valor de 10 para b
}
c(8,9,10);
console.log(b);//aca imprimiría el valor de 10 para b
console.log(x);//acá imprimiría el valor de 1 para x
```

```javascript
console.log(bar);//imprime undefined
console.log(baz);//imprime undefined 
foo();
function foo() { console.log('Hola!'); }//no imprime nada de momento
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);//imprime el "Franco"
```

```javascript
var instructor = "Tony";
console.log(instructor);//impprime "Tony"
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);//imprime "Franco"
   }
})();
console.log(instructor);//imprime "Tony"
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);//imprime "The Flash"
    console.log(pm);//imprime "Reverse Flash"
}
console.log(instructor);//imprime "The Flash"
console.log(pm);//imprime "Franco"
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // el resultado será 2 ya que JS toma el string "3" y lo transforma automaticamente a numero
"2" * "3"// el resultado será 6
4 + 5 + "px"// devuelve "5px"
"$" + 4 + 5// devuelve "$45"
"4" - 2// devuelve 2
"4px" - 2//devuelve "4px-2"
7 / 0// devuelve infinity
{}[0]// devuelve [0]
parseInt("09")// devuelve el numero 09
5 && 2// devuelve 2
2 && 5// devuelve 5
5 || 0// devuelve 5
0 || 5// devuelve 5
[3]+[3]-[10]// devuelve 23
3>2>1// devuelve false (por que 3>2=true, y true=1 y 1>1 es false)
[] == ![]// devuelve true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();// el output del codigo es:
//undefined
//2
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);//el output del codigo es:
//"Meow Mix"
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};
// el output de el codigo es:
console.log(obj.prop.getFullname());
//"Aurelio De Rosa"
var test = obj.prop.getFullname;

console.log(test());
//"Juan Perez"
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();// el output del codigo es:
//1
//4
//3
//2
```
