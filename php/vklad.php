<?php
	
	if(isset($_POST["send"])){ $send = $_POST["send"]; }
	if(isset($_POST["sum"])){ $sum = $_POST["sum"]; }
	if(isset($_POST["mes"])){ $mes = $_POST["mes"]; }
	if(isset($_POST["proc"])){ $proc = $_POST["proc"]; }

	if($send == 1){									// ��������� ���� ���� ������ ������ - ���������. ���� ������ �� ���� ������, ������ ��� ������������ ����� �� �������� �������� � ������� ������� ��� ��������� �� ����
			echo "vklad".round(((($sum * $proc)/100)*$mes)/12, 2);
		}
	else {	
		ob_clean();									// ������� ����� ������
		echo "�� ����� �� ��� �������� ��������, ������� ��� ������ ��� ���������. �� ������ ������������ �� <a href='../index.html'> ������� �������� </a>";	
	}

?>