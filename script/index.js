// objetos
class Alumno {
    constructor(nombre, apellido, notaFinal) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.notaFinal = notaFinal;
    }
}

// funciones
function mostrarAlumnos() {
    const parrafo = document.createElement("div")
    parrafo.innerHTML = `<p>${nombre.value} ${apellido.value}. Nota final: ${Math.round(promedio)}</p>`
    container.appendChild(parrafo)
}

// variables
let promedio = 0
let listaAlumnos = []

const jsonAlmacenado = localStorage.getItem('listaAlumnos')
if (jsonAlmacenado) {
    listaAlumnos = JSON.parse(jsonAlmacenado)
}

// capturo los datos ingresados en el formulario
const form = document.querySelector('#agregarAlumno')
const nombre = document.querySelector('#inputNombre')
const apellido = document.querySelector('#inputApellido')
const trim1 = document.querySelector('#inputTuno')
const trim2 = document.querySelector('#inputTdos')
const trim3 = document.querySelector('#inputTtres')

const container = document.querySelector('#container')

// mostrarAlumnos()

form.addEventListener('submit', evento => {
    evento.preventDefault()

    promedio = (parseInt(trim1.value) + parseInt(trim2.value) + parseInt(trim3.value)) / 3

    const alumno = new Alumno(nombre.value, apellido.value, Math.round(promedio))
    listaAlumnos.push(alumno)
    localStorage.setItem('listaAlumnos', JSON.stringify(listaAlumnos))

    mostrarAlumnos()

    nombre.value = ''
    apellido.value = ''
    trim1.value = ''
    trim2.value = ''   
    trim3.value = ''   
})

