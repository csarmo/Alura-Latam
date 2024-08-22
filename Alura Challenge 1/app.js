
function limpiaParteDerecha() {
	
	//Oculta elemento dentro del div de la derecha (Imagen y textos)
		
	document.querySelector(".searching_image").hidden = true;
	document.querySelector(".message_1").hidden = true;
	document.querySelector(".message_2").hidden = true;
	
}

function evaluarEntrada(inputText) {
	
	// try... catch para manejar errores por entradas de texto u objetos invalidos mas alla de lo especificado
	
	try {
	
		if(inputText.value == "") {
			
			return true;
		
		
		//Validamos que el texto de entrada sean minusculas y sin acentos usando expresion regular
		} else if(inputText.value.match(/[\u0041-\u005a\u00a2-\ufffc]/) !== null) { 	/*Si se inserta un caracter diferente al permitido, saltara alerta.
																		u0041-u005a u00a2-ufffc es el rango unicode para caracteres especiales y mayúsculas.*/
			
			alert("No se aceptan ni mayúsculas, ni acentos, ni caracteres especiales.");
			return true;
		}
		
		return false;
	
	}	
	catch (invalidInputError) {
		alert("Texto inválido");
	}
	
}

function encriptar_texto() {
	
			
		const textoEntrada = document.querySelector("textarea");
		
		if(evaluarEntrada(textoEntrada) == true) {
			
			
		} else {
		
		limpiaParteDerecha();
		
		//Muestra texto encriptado resultante
		document.querySelector(".encripted_text").innerHTML = cifrar(textoEntrada.value);
		document.querySelector(".encripted_text").hidden = false;
		
		}	
}

function desencriptar_texto() {
	
		
		const textoEntrada = document.querySelector("textarea");
		
		if(evaluarEntrada(textoEntrada)) {
			
			
		} else {
		
		limpiaParteDerecha();
		
		//Muestra texto encriptado resultante
		document.querySelector(".encripted_text").innerHTML = desifrar(textoEntrada.value);
		document.querySelector(".encripted_text").hidden = false;
		
		}
				
	} 
	
// funcion que hace ambas cosas, cifra y desifra el texto
function cifrar(inputText) {
		

	//Usamos array para almacenar nuevo string cifrado
	let textoCifrado = [];

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

		/*Vamos escaneando los caracteres del texto de entrada para, 
		una vez identificadas las vocales, convertirlas a su codigo equivalente*/
		for(let caracterNumero = 0; caracterNumero != inputText.length; caracterNumero++)
		{
			switch(inputText[caracterNumero]) {
				
				case "a":				
					textoCifrado.push("ai");
					break;
				
				case "e":
					textoCifrado.push("enter");
					break;
					
				case "i":
					textoCifrado.push("imes");
					break;
			
				case "o":
					textoCifrado.push("ober");
					break;
					
				case "u":
					textoCifrado.push("ufat");
					break;
						
				default:
					textoCifrado.push(inputText[caracterNumero]);
				}

		}
		
		return textoCifrado.join("");
}

function desifrar(inputText) {
	
		
	let textoDesifrado = inputText;
	
	// Para desifrar solo sustituimos todas los codigos por sus vocales en todo el texto.
	//En caso de la palabra "aimes" que combina dos codigos, se decodifica como a (ai) y mes
	textoDesifrado = textoDesifrado.replaceAll("ai", "a");
	textoDesifrado = textoDesifrado.replaceAll("enter", "e");
	textoDesifrado = textoDesifrado.replaceAll("imes", "i");
	textoDesifrado = textoDesifrado.replaceAll("ober", "o");
	textoDesifrado = textoDesifrado.replaceAll("ufat", "u");
	
	
	return textoDesifrado;	
}
