$(document).ready(function() {
	var a = window.location.toString();
	var name = a.indexOf("index");
	var name2 = a.indexOf("/");
	
	$('.encabezado').click(function(){
		window.location.href = "index.html";
	});

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
	if (name > 0) {
		/*PAGINA DE FORMACION*/
		$('.itemNavegacionFormacion').each(function(index) {
			$(this).click(function() {
				var titAnt = $('#tituloFormacion').html();
				var bajAnt = $('#bajadaFormacion').html();
				var contAnt = $('#wrapperContenidoFormacion').html();
				
				$('#tituloFormacion').html($(this).find(".tituloItemNavegacion").html());
				$('#bajadaFormacion').html($(this).find(".bajadaItemNavegacion").html());
				$('#wrapperContenidoFormacion').html($(this).find(".oculto").html());
				
				$(this).find(".tituloItemNavegacion").html(titAnt);
				$(this).find(".bajadaItemNavegacion").html(bajAnt);
				$(this).find(".oculto").html(contAnt);
				
			});

		});

	};
	name = a.indexOf("calendario");
	if (name > 0) {
		/*PAGINA DE CALENDARIO*/
		$('.itemNavegacionCalendario').each(function(index) {
			$(this).click(function() {
				var titAnt = $('#tituloCalendario').html();
				var bajAnt = $('#bajadaCalendario').html();
				var contAnt = $('#wrapperIframeCalendario').html();
				
				$('#tituloCalendario').html($(this).find(".tituloItemNavegacion").html());				
				$('#wrapperIframeCalendario').html($(this).find(".oculto").html());
				
				var linkAnterior = $('.itemNavegacionCalendario.oculto');
				
				$(linkAnterior).find(".tituloItemNavegacion").html(titAnt);				
				$(linkAnterior).find(".oculto").html(contAnt);
				$(linkAnterior).removeClass("oculto");
				
				$(this).addClass("oculto");
				
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
