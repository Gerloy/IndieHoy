//Variables del form
var body = document.body;
var form = document.getElementById('formulario');
var input_nombre = document.getElementById('nombre');
var input_mail = document.getElementById('mail');
var input_disciplina = document.getElementById('disciplina');
var input_boton = document.getElementById('botonFin');
var mensaje_final = document.getElementById('final');

//Cosas generales ---------------------------------------------------------------------------------------------------------------------
function abrirLink(url){
	window.open(url, '_blank').focus();
}

function resetearForm(){
	input_nombre.value = 'Nombre';
	input_mail.value = 'Correo Electronico';

	//Creo la opcion default para el select
	let opt = document.createElement('option');
	opt.value = 'default';
	opt.innerHTML = 'Elegir disciplina';

	input_disciplina.add(opt);
	input_disciplina.value = 'default';
}

//Cosas  del nombre -------------------------------------------------------------------------------------------------------------------
input_nombre.value = 'Nombre';
input_nombre.addEventListener('click', function() {
	if (this.value == 'Nombre'){
		this.value = "";
	}
})

input_nombre.addEventListener('focusout', function(){
	if (this.value == ''){
		this.value = 'Nombre';
	}
})

//Cosas del mail ----------------------------------------------------------------------------------------------------------------------
input_mail.value = 'Correo Electronico';
input_mail.addEventListener('click', function() {
	if (this.value == 'Correo Electronico'){
		this.value = '';
	}
})

input_mail.addEventListener('focusout', function(){
	if (this.value == ''){
		this.value = 'Correo Electronico';
	}
})

//Cosas del select --------------------------------------------------------------------------------------------------------------------
input_disciplina.value = 'default';
//Borra la opcion "Elegir disciplina del select"
input_disciplina.addEventListener('mousedown', function() {
	for(let i=0; i<input_disciplina.length; i++){
		if(input_disciplina[i].value == 'default'){
			input_disciplina.remove(i);
			break;
		}
	}
});


//Submit ------------------------------------------------------------------------------------------------------------------------------
function mostrarMensaje(nombre, mail){
	let msg_nom = document.getElementById('nom_msg');
	msg_nom.innerHTML = nombre.toUpperCase();
	let msg_mail = document.getElementById('mail_msg');
	msg_mail.innerHTML = mail;
	mensaje_final.style.display = 'inline-block';
}

function pararScroll(){
	body.classList.add('bloqueado');
}

form.addEventListener('submit', function(e){
	let nombre = input_nombre.value;
	let mail = input_mail.value;
	let disciplina = input_disciplina.value;

	pararScroll();
	mostrarMensaje(nombre, mail);
	e.preventDefault();
});

//Cerrar submit -----------------------------------------------------------------------------------------------------------------------
var cruz = document.getElementById('cruz_fin');

cruz.addEventListener('click', () => {
	resetearForm();
	body.classList.remove('bloqueado');
	mensaje_final.style.display = 'none';
});

//Cosas del media query ---------------------------------------------------------------------------------------------------------------
var mobile = false;
var query = window.matchMedia('(max-width: 768px)');

query.addEventListener('change', (e) => mobile = e.matches);

//Carrousel de cards ------------------------------------------------------------------------------------------------------------------
var container_cards = document.getElementById('container-cards');
var container_interno = document.getElementById('container-interno');

var presionado = false;
var inicioX;
var scrollIz;

container_interno.addEventListener('touchstart', (e) => {
	presionado = true;
	inicioX = e.touches[0].pageX - container_interno.offsetLeft;
	scrollIz = container_interno.scrollLeft;
	container_cards.style.userSelect = 'none';
})

container_interno.addEventListener('touchend', () => {
	presionado = false;
})

container_interno.addEventListener('touchmove', (e) => {
	if (!presionado) return;
	e.preventDefault();
	const x = e.touches[0].pageX - container_interno.offsetLeft;
	const walk = (x - inicioX) * 3;
	container_interno.scrollLeft = scrollIz - walk;
})
