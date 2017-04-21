<?php
	
    $directory = "../uploads";    						// Папка с изображениями
    $allowed_types=array("jpg", "png", "gif");  		// Разрешеные типы изображений
    $file_parts = array();
	  
    // Откроем папку
    $dir_handle = @opendir($directory) or die("Ошибка при открытии папки !!!");
	
    while ($file = readdir($dir_handle)){    			// Поиск по файлам
		if($file=="." || $file == "..") continue;  		// Пропустить ссылки на другие папки
		$file_parts = explode(".",$file);          		// Разделить имя файла от расширения и поместить его в массив
		$ext = strtolower(array_pop($file_parts));   	// Извлечем расширение в нижнем регистре
		if(in_array($ext,$allowed_types)){				// Если расширение в ходит в допустимые то продолжаем
			echo 	'<div class="block block_mod"> <img src="uploads/'.$file.'" class="img"/> </div>';
		}
    }
    closedir($dir_handle);  							// Закрыть папку

	

?>