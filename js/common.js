$(document).ready(function() {

// Плагин валидации формы
	$('#form_vklad, #form_valid').validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			digits: {
				required: true,
				minlength: 8
			},
			email: {
				minlength: 6
			},
			sum_vklad:  { required: true},
			mes_vklad:  { required: true},
			proc_vklad: { required: true},
		},
		messages: {
			name: {
				required: "Поле 'Имя' обязательно к заполнению",
				minlength: "Введите не менее 2-х символов в поле 'Имя'"
			},
			digits: {
				required: "Поле 'Телефон' обязательно к заполнению",
				minlength: "Введите не менее 8-х символов в поле 'Телефон'",
				digits: "Необходим формат телефон"
			},			
			email: {
				minlength: "Введите не менее 6-х символов в поле 'email'",
				email: "Необходим формат адреса email"	
			},
			sum_vklad:  { 
				required: "Поле 'Сумма вклада' обязательно к заполнению",
				digits: "Необходим формат цифры",
			},
			mes_vklad:  { 
				required: "Поле 'Срок в месяцах' обязательно к заполнению",
				digits: "Необходим формат цифры",
			},
			proc_vklad: { 
				required: "Поле 'Годовой процент' обязательно к заполнению",
				digits: "Необходим формат цифры",
			},
		}
	});

// Кнопка undo
	var check = [];									
	var i;	
	
	$("#name").change(function(){	check.push("name");});
	$("#digits").change(function(){	check.push("digits");});
	$("#email").change(function(){	check.push("email");});
	
	$(".form_undo").click(function(){
		if (check.length != 0){							// Проверка на пустоту
			var j;
			j = check.pop();
			if (i == j){	
				while (i == j) {
					j = check.pop();
				} 
			}
			i = j;
			switch(i){
				case 'name': 	$("#name").val('') 	 ; break;					
				case 'digits': 	$("#digits").val('') ; break;					
				case 'email': 	$("#email").val('')  ; break;	
			}
		}
	});
	
// Кнопка - Показать еще
	$("#block_button").click(function(){
		if ($(".block").hasClass("block_mod")){
			$(".catalog").append("<div class='block block_mod'></div>");
		}
		else{
			$(".catalog").append("<div class='block'></div>");
		}
	});

// Кнопка - Плитка/Список
	$("#button_mod").click(function(){
		$(".block").toggleClass("block_mod");
		$(".catalog").toggleClass("catalog_mod");
	});

});



// Доход по вкладу	
	function form_vklad() {
		var sum = $('#sum_vklad').val();
		var mes = $('#mes_vklad').val();
		var proc = $('#proc_vklad').val();
		
		$.ajax({							
			type: "POST",
			url: "php/vklad.php",
			cache: false, 			
			data: 'send=1&sum='+sum+'&mes='+mes+'&proc='+proc,
		}).done(function( msg ) {
			var reg;
			var n = msg.search('vklad');
			if (n == -1) { reg = -1;} else {reg = msg.substr(n+5);}
			if (reg == -1 ) {alert('Ошибка сервера');}	
			else {
				$("#rez_vklad").text('Результат: '+reg+ ' р.');			
			}
		});	
	}

	
// Форматированная дата
	function form_data() {
		var chis = $('#chis_data').val();
		var mes = $('#mes_data').val();
		
		$.ajax({							
			type: "POST",
			url: "php/data.php",
			cache: false, 			
			data: 'send=1&chis='+chis+'&mes='+mes,
		}).done(function( msg ) {
			var reg;
			var n = msg.search('data');
			if (n == -1) { reg = -1;} else {reg = msg.substr(n+4);}
			if (reg == -1 ) {alert('Ошибка сервера');}	
			else {
				$("#rez_data").text('Результат: '+reg);			
			}
		});	
	}

// Калькулятор
	function form_calc() {
		var chis1 = $('#chis1_calc').val();
		var chis2 = $('#chis2_calc').val();
		var operand = $('#operand option:selected').val();
		
		$.ajax({							
			type: "POST",
			url: "php/calc.php",
			cache: false, 			
			data: 'send=1&chis1='+chis1+'&chis2='+chis2+'&operand='+operand,
		}).done(function( msg ) {
			var reg;
			var n = msg.search('calc');
			if (n == -1) { reg = -1;} else {reg = msg.substr(n+4);}
			if (reg == -1 ) {alert('Ошибка сервера');}	
			else {
				$("#rez_calc").text('Результат: '+reg);			
			}
		});	
	}

// Угол между стрелками
	function form_ygol() {
		var chas = $('#chas_ygol').val();
		var min = $('#min_ygol').val();
		
		$.ajax({							
			type: "POST",
			url: "php/ygol.php",
			cache: false, 			
			data: 'send=1&chas='+chas+'&min='+min,
		}).done(function( msg ) {
			var reg;
			var n = msg.search('ygol');
			if (n == -1) { reg = -1;} else {reg = msg.substr(n+4);}
			if (reg == -1 ) {alert('Ошибка сервера');}	
			else {
				$("#rez_ygol").text('Результат: '+reg+' градусов');			
			}
		});	
	}

	
// Фотогалерея
	function form_upload() {
		var file = document.getElementById('uploadfile').files;
		
		var form_upload = document.getElementById('form_upload');				// Получим форму с id = "form_upload"
		var formData = new FormData(form_upload);								// Создадим объект FormData и добавим в него данные из формы
		
		$.ajax({							
			type: "POST",
			processData: false,
			contentType: false,
			url: "php/upload.php",
			cache: false, 			
			data: formData,
		}).done(function( msg ) {
			gallery();
			$('#rez_upload').html('');
			var n = (msg.split('/').length - 1);
			if (n != 0) { 
				reg = msg.split('/');
				for (i=0; i<n; i++){
					$("#rez_upload").append('<p style="color:red"> Файл не был загружен: <span style="color:green">'+reg[i]+'</span></p>');
				}
			}
		});	
	}

	function gallery() {
		$.ajax({							
			type: "POST",
			url: "php/gallery.php",
			cache: false, 			
		}).done(function( msg ) {
			$('#gallery').html('');
			$("#gallery").append(msg);
		});			
	}




















