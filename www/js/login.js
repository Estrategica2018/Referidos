//$(document).ready(function() {
	
	if (getCookie('id_usuario') !== '') {
		$.post('http://www.estrategicacomunicaciones.com/mobile/php/consult.user.php', {
				'id_usuario' : getCookie('id_usuario')
			}, function(response) {
				if (response.state == 'true') {					
					$('#txtNombre').val(response.result[0].nombres);
					$('#txtApellido').val(response.result[0].apellidos);
					$('#txtIdentificacion').val(response.result[0].identificacion);
					$('#txtEmail').val(response.result[0].correo);
					$('#txtTelefono').val(response.result[0].telefono);
					$('#cmbGenero').val(response.result[0].genero);
					$('#txtPassword').val(response.result[0].password);
					$('#txtPassword2').val(response.result[0].password);
					setCookie('id_usuario', response.result[0].id_usuario);
					$('#btnSalir').addClass('color-red').html('Cerrar Sesión');
				}
			}, 'json');
	} else {
		myApp.loginScreen('#modalLogin');
	}
	
	var mySwiper1 = myApp.swiper('.swiper-1', {
		pagination:'.swiper-1 .swiper-pagination',
		spaceBetween: 5,
		speed: 600
	});
	
	$('#btnIngresar').on('click', function () {
		if ($('#txtUsuario').val() != '' && $('#txtContrasena').val() != '') {
			$.post('http://www.estrategicacomunicaciones.com/mobile/php/consult.user.php', {
				'correo' : $('#txtUsuario').val(),
				'contrasena' : $('#txtContrasena').val()
			}, function(response) {
				if (response.state == 'true') {					
					$('#txtNombre').val(response.result[0].nombres);
					$('#txtApellido').val(response.result[0].apellidos);
					$('#txtIdentificacion').val(response.result[0].identificacion);
					$('#txtEmail').val(response.result[0].correo);
					$('#txtTelefono').val(response.result[0].telefono);
					$('#cmbGenero').val(response.result[0].genero);	
					$('#txtPassword').val(response.result[0].password);	
					$('#txtPassword2').val(response.result[0].password);	
					setCookie('id_usuario', response.result[0].id_usuario);
					$('#btnSalir').addClass('color-red').html('Cerrar Sesión');
					myApp.closeModal('#modalLogin');
				} else {
					myApp.alert(response.message, 'Referidos');
				}
			}, 'json');
			
		} else {
			myApp.alert('Ingrese su usuario y contraseña', 'Referidos');
		}
	});

	$('#btnRegistrar').on('click', function () {
		myApp.closeModal('#modalLogin');
		myApp.showTab('#view-4');
		$('#chkModificar').prop('checked', true);
		$('#divGuardarUsuario').show();
		$('#txtNombre, #txtApellido, #txtIdentificacion, #txtEmail, #txtPassword, #txtPassword2, #txtTelefono').prop('disabled', false).val('');
		$('#cmbGenero').prop('disabled', false).val('M');
	});  

	$('#btnCancelarLogin').on('click', function () {
		$('#txtNombre, #txtApellido, #txtIdentificacion, #txtEmail, #txtPassword, #txtPassword2, #txtTelefono').val('');
		$('#cmbGenero').val('M');
		$('#btnSalir').removeClass('color-red').html('Iniciar Sesión');
		myApp.closeModal('#modalLogin');
		myApp.showTab('#view-4');
	});
	
	$('#lnkEnterate').on('click', function () {
		myApp.closeModal('#modalLogin');
		myApp.showTab('#view-5');
		myApp.hideToolbar('#tbMenu');
	});
	
	$('#lnkPortafolio').on('click', function () {
		myApp.closeModal('#modalLogin');
		myApp.showTab('#view-2');
	});
	
	$('#lnkProyectos').on('click', function () {
		myApp.closeModal('#modalLogin');
		myApp.showTab('#view-3');
	});
	
//});