<?php
echo date("l jS \of F Y h:i:s A") . nl2br("\n\n");
echo  nl2br("Here's your form data, name then value:\n\n\n") ;
foreach($_REQUEST as $key => $value){
echo"$key | $value<br>";
}
?>