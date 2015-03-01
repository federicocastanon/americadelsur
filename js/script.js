function agrandarCuerpo(alturaContenido) {
	var altura1 = $("body").height() - $("#header").outerHeight() - $("#footer").outerHeight() - 35;

	//el cuerpo crece con el contenido, al wrapper hay que hacerlo crecer
	if (alturaContenido > altura1) {
		$("#cuerpo").height(alturaContenido);
	} else {
		$("#cuerpo").height(altura1);
	}
}

function cargarCalendario(cal) {
	$('.wrapperCalendario').fadeOut('slow', function() {

		$.get(cal, function(msg) {
			$('.wrapperCalendario').html(msg);			
			$('.wrapperCalendario').fadeIn('slow');
			inicializarCalendario();
		});
	});
}
function inicializarCalendario(){
	$('.itemNavegacionCalendario').each(function(index) {
			$(this).click(function() {

				var linkActual = $(this);
				var linkAnterior = $('.itemNavegacionCalendario.oculto');

				$(this).hide({
					direction : "right",
					effect : "drop",
					duration : 1000,
					complete : function() {
						$(linkActual).addClass("oculto");
					}
				});
				$('#tituloCalendario').hide({
					effect : "fade",
					duration : 1000,
					complete : function() {
						$('#tituloCalendario').html($(linkActual).find(".tituloItemNavegacion").html());
					}
				});
				$('#wrapperIframeCalendario').hide({
					direction : "down",
					effect : "drop",
					duration : 1000,
					complete : function() {
						$('#wrapperIframeCalendario').html($(linkActual).find(".oculto").html());
						$(linkAnterior).removeClass("oculto");

						$(linkAnterior).show({
							direction : "right",
							effect : "drop",
							duration : 1000
						});
						$('#tituloCalendario').show({
							effect : "fade",
							duration : 1000
						});

						$('#wrapperIframeCalendario').show({
							direction : "down",
							effect : "drop",
							duration : 1000
						});
					}
				});

			});

		});
		var alturaIf = $('#wrapperIframeCalendario').height();
		var anchoIf = $('#wrapperIframeCalendario').width();

		$('#wrapperIframeCalendario').html($('#wrapperIframeCalendario').html().replace('200', anchoIf));
		$('#wrapperIframeCalendario').html($('#wrapperIframeCalendario').html().replace(/300/g, alturaIf));

		$('.oculto').each(function(index) {
			$(this).html($(this).html().replace('200', anchoIf).replace(/300/g, alturaIf));
		});
}

$(document).ready(function() {
	var a = window.location.toString();
	var name = a.indexOf("index");
	var name2 = a.indexOf("/");

	$('.encabezado').click(function() {
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
	name = a.indexOf("institucional");
	if (name > 0) {
		//institucional
		var altura = $(".contenidoPrincipal").height() * 1.1;
	} else {
		//todas menos institucional
		var altura = $(".contenidoPrincipal").height() + 30;
	}
	agrandarCuerpo(altura);

	name = a.indexOf("formacion");
	if (name > 0) {
		/*PAGINA DE FORMACION*/
		$('.itemNavegacionFormacion').each(function(index) {
			$(this).click(function() {

				var linkAnterior = $('.itemNavegacionFormacion.oculto');
				var linkActual = $(this);

				$(this).hide({
					direction : "right",
					effect : "drop",
					duration : 1000,
					complete : function() {
						$(linkActual).addClass("oculto");
					}
				});
				$('#tituloFormacion').hide({
					effect : "fade",
					duration : 1000,
					complete : function() {
						$('#tituloFormacion').html($(linkActual).find(".tituloItemNavegacion").html());
					}
				});
				$('#bajadaFormacion').hide({
					effect : "fade",
					duration : 1000,
					complete : function() {
						$('#bajadaFormacion').html($(linkActual).find(".bajadaItemNavegacion").html());
					}
				});
				$('#wrapperContenidoFormacion').hide({
					direction : "down",
					effect : "drop",
					duration : 1000,
					complete : function() {
						$('#wrapperContenidoFormacion').html($(linkActual).find(".oculto").html());
						$(linkAnterior).removeClass("oculto");

						$(linkAnterior).show({
							direction : "right",
							effect : "drop",
							duration : 1000
						});
						$('#tituloFormacion').show({
							effect : "fade",
							duration : 1000
						});
						$('#bajadaFormacion').show({
							effect : "fade",
							duration : 1000
						});

						$('#wrapperContenidoFormacion').show({
							direction : "down",
							effect : "drop",
							duration : 1000,
							complete : function() {
								agrandarCuerpo($("#tituloFormacion").outerHeight() + $("#bajadaFormacion").outerHeight() + $("#hSeparatorFormacion").outerHeight() + $("#wrapperContenidoFormacion").outerHeight() + 70);
							}
						});

					}
				});

			});

		});
		var a = window.location.toString();
		var indice = a.substring(a.indexOf("=") + 1);
		$(".itemNavegacionFormacion[indice*='" + indice + "']").click();

	};
	name = a.indexOf("masque");
	if (name > 0) {
		/*PAGINA DE Mas que una escuela*/
		$('.itemNavegacionFormacion').each(function(index) {
			$(this).click(function() {

				var linkAnterior = $('.itemNavegacionFormacion.oculto');
				var linkActual = $(this);

				$(this).hide({
					direction : "right",
					effect : "drop",
					duration : 1000,
					complete : function() {
						$(linkActual).addClass("oculto");
					}
				});
				$('#tituloFormacion').hide({
					effect : "fade",
					duration : 1000,
					complete : function() {
						$('#tituloFormacion').html($(linkActual).find(".tituloItemNavegacion").html());
					}
				});
				$('#bajadaFormacion').hide({
					effect : "fade",
					duration : 1000,
					complete : function() {
						$('#bajadaFormacion').html($(linkActual).find(".bajadaItemNavegacion").html());
					}
				});
				$('#wrapperContenidoFormacion').hide({
					direction : "down",
					effect : "drop",
					duration : 1000,
					complete : function() {
						$('#wrapperContenidoFormacion').html($(linkActual).find(".oculto").html());
						$(linkAnterior).removeClass("oculto");

						$(linkAnterior).show({
							direction : "right",
							effect : "drop",
							duration : 1000
						});
						$('#tituloFormacion').show({
							effect : "fade",
							duration : 1000
						});
						$('#bajadaFormacion').show({
							effect : "fade",
							duration : 1000
						});

						$('#wrapperContenidoFormacion').show({
							direction : "down",
							effect : "drop",
							duration : 1000,
							complete : function() {
								var altNav = $(".wrapperNavegacionFormacion").outerHeight();
								var altInfo = $("#tituloFormacion").outerHeight() + $("#bajadaFormacion").outerHeight() + $("#hSeparatorFormacion").outerHeight() + $("#wrapperContenidoFormacion").outerHeight() + 70;
								agrandarCuerpo(altNav > altInfo ? altNav : altInfo);
							}
						});

					}
				});

			});

		});
		var a = window.location.toString();
		var indice = a.substring(a.indexOf("=") + 1);
		$(".itemNavegacionFormacion[indice*='" + indice + "']").click();

	};

	name = a.indexOf("calendario");
	if (name > 0) {
		/*PAGINA DE CALENDARIO*/
		inicializarCalendario();

	};

});
