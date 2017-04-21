<?php

	$i=0;
	while (isset($_FILES['uploadfile']['name'][$i])){
		if ( strpos(' jpg, png, gif', strtolower(substr($_FILES['uploadfile']['name'][$i], strrpos($_FILES['uploadfile']['name'][$i], '.')+1))) ){
			copy($_FILES['uploadfile']['tmp_name'][$i],"../uploads/".basename($_FILES['uploadfile']['name'][$i]));
		}
		else {
			echo $_FILES['uploadfile']['name'][$i].'/';
		}
		$i=$i+1;
	}
	
?>