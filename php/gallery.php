<?php
	
    $directory = "../uploads";    						// ����� � �������������
    $allowed_types=array("jpg", "png", "gif");  		// ���������� ���� �����������
    $file_parts = array();
	  
    // ������� �����
    $dir_handle = @opendir($directory) or die("������ ��� �������� ����� !!!");
	
    while ($file = readdir($dir_handle)){    			// ����� �� ������
		if($file=="." || $file == "..") continue;  		// ���������� ������ �� ������ �����
		$file_parts = explode(".",$file);          		// ��������� ��� ����� �� ���������� � ��������� ��� � ������
		$ext = strtolower(array_pop($file_parts));   	// �������� ���������� � ������ ��������
		if(in_array($ext,$allowed_types)){				// ���� ���������� � ����� � ���������� �� ����������
			echo 	'<div class="block block_mod"> <img src="uploads/'.$file.'" class="img"/> </div>';
		}
    }
    closedir($dir_handle);  							// ������� �����

	

?>