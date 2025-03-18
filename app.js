let amigos = [];

function agregarAmigo() {
    let ingresa = document.getElementById("amigo");
    let nombre = ingresa.value.trim();

    if (nombre === "") {
        alert("por favor, ingrese un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ingresa otro nombre, no repitas.");
        return;
    }

    amigos.push(nombre); //agreda nombre a la lista
    actualizarLista();
    ingresa.value = ""; //limpiar campo
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //limpiar lista antes de actualizar.

    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) { //valida si hay solo un nombre
        alert("Agrega al menos un amigo para sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado]; //obtener nombre sorteado

    let resultado = document.getElementById("resultado"); //obtener el elemento para mostrar el resultado
    resultado.innerHTML = `<li>🎉 Amigo Secreto: <strong>${amigoSorteado}</strong> 🎉</li>`;
}

//agrega amigo automaticamente al presiona ENTER
document.getElementById("amigo").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); //evitar que se recarge la pagina
        agregarAmigo(); //funcion agregar amigo
    }
});