<?php 
  $visitors_full_name = $_POST['full_name'];
  $visitors_phone_number = $_POST['phone_number'];
  $visitors_date = $_POST['date'];
  $visitors_time = $_POST['time'];

  $visitors_full_name_length = strlen($visitors_full_name);
  $visitors_phone_number_length = strlen($visitors_phone_number);
  $visitors_date_length = strlen($visitors_date);
  $visitors_time_length = strlen($visitors_time);

  $form_is_valid_Array = array();

  if ($visitors_full_name_length > 1 && 
      $visitors_full_name != "Please retype your full name")  {
    array_push($form_is_valid_Array, "true");
  } 

  $search_string_Array = [
    "(", 
    ")", 
    " ", 
    "-"
  ];

  $inc = 0;

  $phone_number_is_valid_Array = array();
  $invalid_data_Array = array();

  foreach($search_string_Array as $key => $val) {
    if ($visitors_phone_number_length == 14)  {
      if ($key == 0)  {
        if (strstr($visitors_phone_number, $val) != false) {
          array_push($phone_number_is_valid_Array, "true");
        } 
      } else if ($key == 1) {
        if (strstr($visitors_phone_number, $val) != false && 
            $phone_number_is_valid_Array[0] == "true") {
          array_push($phone_number_is_valid_Array, "true");
        } 
      } else if ($key == 2)  {
        if (strstr($visitors_phone_number, $val) != false && 
            $phone_number_is_valid_Array[0] == "true" && 
            $phone_number_is_valid_Array[1] == "true") {
          array_push($phone_number_is_valid_Array, "true");
        } 
      } else if ($key == 3)  {
        if (strstr($visitors_phone_number, $val) != false && 
            $phone_number_is_valid_Array[0] == "true" && 
            $phone_number_is_valid_Array[1] == "true" && 
            $phone_number_is_valid_Array[2] == "true") {
          array_push($phone_number_is_valid_Array, "true");
        } 
      }
    } else if ($visitors_phone_number_length == 12)  {
      if ($key == 0)  {
        if (strstr($visitors_phone_number, $val) == false) {
          array_push($phone_number_is_valid_Array, "true");
        } 
      } else if ($key == 1) {
        if (strstr($visitors_phone_number, $val) == false && 
            $phone_number_is_valid_Array[0] == "true") {
          array_push($phone_number_is_valid_Array, "true");
        } 
      } else if ($key == 2)  {
        if (strstr($visitors_phone_number, $val) == false && 
            $phone_number_is_valid_Array[0] == "true" && 
            $phone_number_is_valid_Array[1] == "true") {
          array_push($phone_number_is_valid_Array, "true");
        } 
      } else if ($key == 3)  {
        if (strstr($visitors_phone_number, $val) != false && 
            $phone_number_is_valid_Array[0] == "true" && 
            $phone_number_is_valid_Array[1] == "true" && 
            $phone_number_is_valid_Array[2] == "true") {
          array_push($phone_number_is_valid_Array, "true");
        } 
      }
    } else if ($visitors_phone_number_length == 10) {
      if ($key == 0)  {
        if (strstr($visitors_phone_number, $val) == false) {
          array_push($phone_number_is_valid_Array, "true");
        } 
      } else if ($key == 1) {
        if (strstr($visitors_phone_number, $val) == false && 
            $phone_number_is_valid_Array[0] == "true") {
          array_push($phone_number_is_valid_Array, "true");
        } 
      } else if ($key == 2)  {
        if (strstr($visitors_phone_number, $val) == false && 
            $phone_number_is_valid_Array[0] == "true" && 
            $phone_number_is_valid_Array[1] == "true") {
          array_push($phone_number_is_valid_Array, "true");
        } 
      } else if ($key == 3)  {
        if (strstr($visitors_phone_number, $val) == false && 
            $phone_number_is_valid_Array[0] == "true" && 
            $phone_number_is_valid_Array[1] == "true" && 
            $phone_number_is_valid_Array[2] == "true") {
          array_push($phone_number_is_valid_Array, "true");
        } 
      }
    }
  }

  if (count($phone_number_is_valid_Array) == 4)  {
    array_push($form_is_valid_Array, "true");
  } 

  if ($visitors_date_length == 10) {
    array_push($form_is_valid_Array, "true");
  } 

  if ($visitors_time_length == 5) {
    array_push($form_is_valid_Array, "true");
  } 

  $valid_fields = 0;

  foreach($form_is_valid_Array as $val) {
   if ($val == "true") {
      $valid_fields++;
    }
  }
?>

<?php
  if ($valid_fields == 4) {
    $to      = "dalllasstl@gmail.com";
    $subject = "Suggested Appointment for " . $visitors_full_name . ", sent from dallasmobilewash.net";
    $message = 
              "From: " . $visitors_full_name . "\n\n" . 
              "Phone Number: " . $visitors_phone_number . "\n\n" . 
              "Appointment Date: " . $visitors_date . "\n\n" . 
              "Appointment Time: " . $visitors_time;
    $headers = "From: no_reply@dallasmobilewash.net" . "\r\n" . 
              "Reply-To: no_reply@dallasmobilewash.net" . "\r\n" .
              "X-Mailer: PHP/" . phpversion();

    mail($to, $subject, $message, $headers);

    $url_string = "http://dmw.chriscjamison.com/make-an-appointment.htm#appointment=complete";
  } else {
    $url_string = "http://dmw.chriscjamison.com/make-an-appointment.htm#error=make-an-appointment";
  }
?>

<?php if ($url_string != ""): ?>

<html>
  <script>window.location.href = "<?php echo $url_string; ?>";</script>
</html>

<?php endif; ?>