<?php
	
	if(isset($_POST["send"])){ $send = $_POST["send"]; }
	if(isset($_POST["chis1"])){ $chis1 = $_POST["chis1"]; }
	if(isset($_POST["chis2"])){ $chis2 = $_POST["chis2"]; }
	if(isset($_POST["operand"])){ $operand = $_POST["operand"]; }

	if($send == 1){									// Проверяем если была нажата кнопка - вычислить. Если кнопка не была нажата, значит что пользователь зашел на страницу напрямую и поэтому выводим ему сообщение об этом
		switch($operand) {
			case 1:	 $rez = $chis1+$chis2; 	break;
			case 2:	 $rez = $chis1-$chis2; 	break;	
			case 3:  $rez = $chis1/$chis2; 	break;
			case 4:	 $rez = $chis1*$chis2; 	break;
		} 	
		echo "calc".round($rez, 2);
	}
	else {	
		ob_clean();									// Очищает буфер вывода
		echo "Вы зашли на эту страницу напрямую, поэтому нет данных для обработки. Вы можете возвращаться на <a href='../index.html'> главную страницу </a>";	
	}
	
	

?>