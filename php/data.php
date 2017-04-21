<?php
	function data($a, $b){
		switch($b) {
			case 1:	 $b = 'января'; break;
			case 2:	 $b = 'февраля'; break;	
			case 3:  $b = 'марта'; break;
			case 4:	 $b = 'апреля'; break;
			case 5:	 $b = 'мая'; break;
			case 6:	 $b = 'июня'; break;
			case 7:	 $b = 'июля'; break;
			case 8:	 $b = 'августа'; break;
			case 9:	 $b = 'сентября'; break;
			case 10: $b = 'октября'; break;
			case 11: $b = 'ноября'; break;
			case 12: $b = 'декабря'; break;
		} 
		return "data".$a.' '.$b;
	}
	
	if(isset($_POST["send"])){ $send = $_POST["send"]; }
	if(isset($_POST["chis"])){ $chis = $_POST["chis"]; }
	if(isset($_POST["mes"])){ $mes = $_POST["mes"]; }

	if($send == 1){									// Проверяем если была нажата кнопка - вычислить. Если кнопка не была нажата, значит что пользователь зашел на страницу напрямую и поэтому выводим ему сообщение об этом
			echo data($chis, $mes);
		}
	else {	
		ob_clean();									// Очищает буфер вывода
		echo "Вы зашли на эту страницу напрямую, поэтому нет данных для обработки. Вы можете возвращаться на <a href='../index.html'> главную страницу </a>";	
	}

?>