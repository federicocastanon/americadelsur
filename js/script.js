$(document).ready(function() {
	var a = window.location.toString();
	var name = a.indexOf("index");
	var name2 = a.indexOf("/");

	var altura1 = $("body").height() - $("#header").outerHeight() - $("#footer").outerHeight() - 35;

	var altura = $(".contenidoPrincipal").height() * 1.1 + 150;
	//el cuerpo crece con el contenido, al wrapper hay que hacerlo crecer
	if (altura > altura1) {
		$("#cuerpo").height(altura);
	} else {
		$("#cuerpo").height(altura1);
	}

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
							duration : 1000
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
		$('#wrapperIframeCalendario').html($('#wrapperIframeCalendario').html().replace('200', anchoIf).replace('300', alturaIf));
		$('.oculto').each(function(index) {
			$(this).html($(this).html().replace('200', anchoIf).replace('300', alturaIf));
		});

	};

});
