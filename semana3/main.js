import { loadData, saveData, onRemove } from "./storage.js"; 

const btnAgregar = document.getElementById("agregar");
const btnEliminar = document.getElementById("eliminar");
const inputText = document.getElementById("text");
const lista = document.getElementById("listaNotas");
const notificacion = document.getElementById("notificacion")

btnEliminar.addEventListener("click", onRemove)

btnAgregar.addEventListener("click", () => {
  if (inputText.value) {
    notificacion.innerText="Agregado correctamente ✅​"
    agrgarTarea(inputText.value)
    saveData(inputText.value)
    inputText.value=""
  } else {
    notificacion.innerText="Escriba algo antes de guardar ❌​"
  }

  setTimeout(() => {
      notificacion.innerText=""
    }, 2000);
});

function agrgarTarea(tarea){
    lista.innerHTML+=`<li>${tarea}</li>`
}

function render() {
  const data=loadData()
  if (data) {
    renderList(data);
  } else {
    renderNone();
  }
}

function renderList(data) {
  for (const element of data) {
      lista.innerHTML += `
    <li>${element}</li>
  `;
  }
  
}

function renderNone() {
  lista.innerHTML = `
  `;
}
render();