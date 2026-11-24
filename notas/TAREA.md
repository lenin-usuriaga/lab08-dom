# Tarea: Mi componente interactivo

## Componente elegido

Una lista de tareas con prioridad. El usuario escribe una tarea, elige su prioridad (alta, media o baja) y la agrega. Puede marcar una tarea como hecha con un clic sobre su texto y borrarla con su botón. Abajo se muestra un resumen con el total y los pendientes.

## Codigo principal

```js
// Tarea: lista de tareas con clase Tarea, DOM y eventos
class Tarea {
  constructor(texto, prioridad) {
    this.texto = texto;
    this.prioridad = prioridad;
    this.completada = false;
  }

  alternar() {
    this.completada = !this.completada;
  }

  descripcion() {
    return this.texto + " (" + this.prioridad + ")";
  }
}

const t1 = new Tarea("Estudiar JavaScript", "alta");
const t2 = new Tarea("Hacer la bitacora", "media");

const lista = document.querySelector("#lista");
const resumen = document.querySelector("#resumen");
const tareas = [t1, t2];

function dibujar() {
  lista.textContent = "";

  tareas.forEach((tarea, indice) => {
    const li = document.createElement("li");
    li.classList.add(tarea.prioridad);
    if (tarea.completada) {
      li.classList.add("hecha");
    }

    const span = document.createElement("span");
    span.textContent = tarea.descripcion();
    span.style.cursor = "pointer";
    span.addEventListener("click", () => {
      tarea.alternar();
      dibujar();
    });

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar";
    btnBorrar.addEventListener("click", () => {
      tareas.splice(indice, 1);
      dibujar();
    });

    li.appendChild(span);
    li.appendChild(btnBorrar);
    lista.appendChild(li);
  });

  const pendientes = tareas.filter((tarea) => !tarea.completada).length;
  resumen.textContent = "Total: " + tareas.length + " | Pendientes: " + pendientes;
}

dibujar();

const formulario = document.querySelector("#formulario");
const campoTexto = document.querySelector("#texto");
const campoPrioridad = document.querySelector("#prioridad");
const aviso = document.querySelector("#aviso");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const texto = campoTexto.value.trim();
  if (texto === "") {
    aviso.textContent = "Escribe una tarea antes de agregar.";
    return;
  }

  tareas.push(new Tarea(texto, campoPrioridad.value));
  aviso.textContent = "";
  campoTexto.value = "";
  dibujar();
});
```

## Pruebas realizadas

| Accion | Resultado esperado | Cumple (Si/No) |
|--------|--------------------|----------------|
| Escribir "Mirar la clase de diseño", elegir Alta y pulsar Agregar | Aparece la tarea con borde rojo y el total sube a 3 | Si |
| Pulsar Agregar con el campo vacio | Aparece el aviso en rojo y no se agrega nada |Si |
| Hacer clic en el texto de una tarea | La tarea se tacha y bajan los pendientes | Si |
| Hacer clic otra vez en una tarea tachada | La tarea vuelve a verse normal y suben los pendientes | Si|
| Pulsar Borrar en una tarea | La tarea desaparece y baja el total | Si|

## Por que disene asi mi clase

Elegi `texto` y `prioridad` porque son los datos que el usuario escribe y elige al agregar, y `completada` porque cada tarea necesita recordar si ya se hizo. El metodo `alternar()` cambia ese estado en el propio objeto, y `descripcion()` devuelve el texto que se muestra en pantalla, asi la clase se encarga de sus datos y `dibujar()` solo los pinta. Guarde las tareas en un arreglo y redibujo la lista cada vez que cambia, para que la pantalla siempre refleje los objetos.