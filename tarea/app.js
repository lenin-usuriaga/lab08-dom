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
// Paso 3: mostrar los objetos en la pagina
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
// Paso 4: agregar tareas con el formulario
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