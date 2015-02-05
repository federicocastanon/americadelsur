$(document).ready(function() {
	var a = window.location.toString();
	var name = a.indexOf("index");
	var name2 = a.indexOf("/");

	if (name > 0 || name2 < 0) {
		/*Pagina de HOME*/
		$(".carrousellHome").slick({
			infinite : true,
			slidesToShow : 1,
			slidesToScroll : 1,
			adapatativeHeight : true
		});
	}
	name = a.indexOf("formacion");
	if(name > 0){
		/*PAGINA DE FORMACION*/
			$('#linksNavegacion > ul > .linkNavegacion').each(function(index) {
		$(this).click(function() {
		});
		
		
		});
		
	};

	var altura = $(".contenidoPrincipal").height() * 1.2;
	//el cuerpo crece con el contenido, al wrapper hay que hacerlo crecer
	if (altura > 400) {
		$("#cuerpo").height(altura);
	} else {
		$("#cuerpo").height(400);
	}

});
