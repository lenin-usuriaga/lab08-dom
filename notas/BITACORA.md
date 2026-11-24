# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: Chrome

## Ejercicio 2: Seleccionar y modificar el DOM 
| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|-------------|---------------------------|---------------------------------|
| textContent desde la consola | El titulo cambio a "Hola desde la consola" | No |
| textContent desde app.js | El titulo paso a decir "Hola TECSUP" | Si |
| style.color | El titulo se puso de color azul | Si |

## Ejercicio 3: Evento click 
| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|----------------|-----------------------|------------------------|
| click | Un clic sobre el boton | 1 |
| dblclick | Dos clics rapidos seguidos | 1 por doble clic |
| mouseover | Pasar el mouse sobre el boton | 1 cada vez que el mouse entra al boton |

En la consola, evento.type mostro el nombre del evento (click, dblclick o mouseover segun la prueba).
evento.target mostro el elemento que recibio el evento: el boton Sumar 1 (`<button id="btnSumar">`).

## Ejercicio 4: Eventos input y submit 
| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|--------|-------------------------|------------------------------|
| Escribir en el campo nombre | El texto "Hola, ..." cambia letra por letra | No |
| Enviar sin preventDefault | "Enviado" aparece un instante y desaparece | Si |
| Enviar con preventDefault, correo sin @ | Aparece "Correo no valido: falta @" en rojo | No |
| Enviar con preventDefault, correo con @ | Aparece "Enviado: " y el correo | No |

## Ejercicio 5: Clases y objetos
| Objeto | nombre | precio | conDescuento(0.25) |
|--------|--------|--------|--------------------|
| laptop | Laptop | 2500 | 1875 |
| mouse | Mouse | 45 | 33.75 |
| teclado | Teclado | 120 | 90 |