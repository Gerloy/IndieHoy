
//Variables del form
var input_nombre = document.getElementById("nombre");
var input_mail = document.getElementById("mail");
var input_disciplina = document.getElementById("disciplina");

//Cosas generales ---------------------------------------------------------------------------------------------------------------------
function abrirLink(url){
	window.open(url, '_blank').focus();
}



//Cosas del select --------------------------------------------------------------------------------------------------------------------
input_disciplina.value = "default";
//Borra la opcion "Elegir disciplina del select"
var primera = true;
input_disciplina.addEventListener("mousedown", function() {
	console.log(primera);
	if(primera){
		console.log(input_disciplina.options[0]);
		input_disciplina.remove(0);
		primera = false;
	}
});
