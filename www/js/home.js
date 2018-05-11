$(document).ready(function() {
	
	// Portafolio Page
	
	// Proyectos Page
	
	// Prospectos Page
	
	// Usuarios Page
	
	$('#btnGuardarUsuario').on('click', function () {
		if ($('#txtNombre').val() != '' && $('#txtApellido').val() != '' && $('#txtIdentificacion').val() != '' && $('#txtEmail').val() != '' && $('#txtTelefono').val() != '' && $('#cmbGenero').val() != '') {
			if ($('#txtPassword').val() == $('#txtPassword2').val()) {	
				$.post('http://www.estrategicacomunicaciones.com/mobile/php/register.user.php', {
					'nombres' : $('#txtNombre').val(),
					'apellidos' : $('#txtApellido').val(),
					'identificacion' : $('#txtIdentificacion').val(),
					'correo' : $('#txtEmail').val(),
					'password' : $('#txtPassword').val(),
					'telefono' : $('#txtTelefono').val(),
					'genero' : $('#cmbGenero').val(),
					'id_perfil' : $('#txtIdPerfil').val()
				}, function(response) {
					if (response.state == 'true') {
						setCookie('id_usuario', response.result[0].id_usuario);
						$('#btnSalir').addClass('color-red').html('Cerrar Sesión');
						$('#chkModificar').prop('checked', false);
						$('#txtNombre, #txtApellido, #txtIdentificacion, #txtEmail, #txtPassword, #txtPassword2, #txtTelefono, #cmbGenero').prop('disabled', true);
						$('#divGuardarUsuario').hide();
						myApp.showTab('#view-1');
					}
					myApp.alert(response.message, 'Referidos');
				}, 'json');
			} else {
				myApp.alert('La contraseña no coincide. Por favor verifíquela', 'Referidos');
			} 
		} else {
			myApp.alert('Diligencie todos los campos', 'Referidos');
		}
		
	});
	
	$('#chkModificar').on('change', function() {
		$('#txtNombre, #txtApellido, #txtIdentificacion, #txtEmail, #txtPassword, #txtPassword2, #txtTelefono, #cmbGenero').prop('disabled', !$('#chkModificar').prop('checked'));
		($('#chkModificar').prop('checked')) ? $('#divGuardarUsuario').show() : $('#divGuardarUsuario').hide();
	});
	
	
	$('#btnVolverReferidos').on('click', function () {
		myApp.loginScreen('#modalLogin');
		myApp.showToolbar('#tbMenu');
		myApp.showTab('#view-1');
	});
	
	$('#btnSalir').on('click', function () {
		deleteCookie('id_usuario');
		$('#txtUsuario, #txtContrasena').val('');
		$('#btnSalir').addClass('color-red').html('Cerrar Sesión');
		myApp.loginScreen('#modalLogin');
	});
	
});