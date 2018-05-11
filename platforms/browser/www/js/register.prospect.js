var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' , 'September' , 'October', 'November', 'December'];
 
var calendarInline = myApp.calendar({
    container: '#calendar-inline-container',
    value: [new Date()],
    weekHeader: false,
    toolbarTemplate: 
        '<div class="toolbar calendar-custom-toolbar">' +
            '<div class="toolbar-inner">' +
                '<div class="left">' +
                    '<a href="#" class="link icon-only"><i class="icon icon-back"></i></a>' +
                '</div>' +
                '<div class="center"></div>' +
                '<div class="right">' +
                    '<a href="#" class="link icon-only"><i class="icon icon-forward"></i></a>' +
                '</div>' +
            '</div>' +
        '</div>',
    onOpen: function (p) {
        $('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
        $('.calendar-custom-toolbar .left .link').on('click', function () {
            calendarInline.prevMonth();
        });
        $('.calendar-custom-toolbar .right .link').on('click', function () {
            calendarInline.nextMonth();
        });
    },
    onMonthYearChangeStart: function (p) {
        $('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
    }
});

$('#btnEnviarProspecto').on('click', function() {
	$.post('http://www.estrategicacomunicaciones.com/mobile/php/regsiter.prospect.php', {
		'nombre_empresa' : $('txtNombreEmpresa').val(),
		'nombre_contacto' : $('txtNombreContacto').val(),
		'cargo_contacto' : $('txtCargoContacto').val(),
		'telefono' : $('txtTelefono').val(),
		'oportunidad' : $('txtOportunidad').val(),
		'cita' : $('txtCita').val(), 
		'id_usuario' : $('txtIdUsuario').val()
	}, function(response) {
		if (response.state == 'true') {
			$('#txtNombre').val(response.result[0].nombres + " " + response.result[0].apellidos);
			$('#txtIdentificacion').val(response.result[0].identificacion);
			$('#txtEmail').val(response.result[0].correo);
			$('#txtTelefono').val(response.result[0].telefono);
			$('#cmbGenero').val(response.result[0].genero);	
		}
	}, 'json');
});
