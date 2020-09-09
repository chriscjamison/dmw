/* main.js - JavaScript and jQuery that powers index.htm */

// A String that will hold the CSS selector for the buttons triggering 
// the appearance of details of the cleaning services housed in Level #2 
// is initialized.
var details_buttons_selector = "";

// The CSS selector for the buttons housed in Level #2 is passed on.
details_buttons_selector = ".level_2-a";

$(details_buttons_selector).mouseover(
  function () {
    
    // An Object variable that will hold the jQuery object referring 
    // to the button the visitor is interacting with is initialized.
    var button_element = $(this);

    // An Array that will hold the result of the method, 'explode', executed 
    // on 'button_element' is initialized.
    var string_contents_Array = [];

    // The CSS selector of the button is split into substrings.
    string_contents_Array = $(button_element).attr("id").split("-");

    // A String variable is intialized that will hold the CSS selector 
    // for the specific button triggering the detail about 
    // the cleaning service a visitor wants access to.
    var block_selector_value = "";

    // The CSS selector of the specific button the visitor is interacting 
    // with is passed on.
    block_selector_value = string_contents_Array[3];

    // The visibility of the button and the content the visitor is 
    // interacting with is changed by the use of the function, 'showLevel2Content'.
    showLevel2Content(block_selector_value);
  }
);



$(details_buttons_selector).click(
  function () {
    
    // An Object variable that will hold the jQuery object referring 
    // to the button the visitor is interacting with is initialized.
    var button_element = $(this);

    // An Array that will hold the result of the method, 'explode', executed 
    // on 'button_element' is initialized.
    var string_contents_Array = [];

    // The CSS selector of the button is split into substrings.
    string_contents_Array = $(button_element).attr("id").split("-");

    // A String variable is intialized that will hold the CSS selector 
    // for the specific button triggering the detail about 
    // the cleaning service a visitor wants access to.
    var block_selector_value = "";

    // The CSS selector of the specific button the visitor is interacting 
    // with is passed on.
    block_selector_value = string_contents_Array[3];

    // The visibility of the button and the content the visitor is 
    // interacting with is changed by the use of the function, 'showLevel2Content'.
    showLevel2Content(block_selector_value);
  }
);



// A String variable is initialized that will hold the CSS selector that refers 
// to the details visible in Level #2.
var content_selector = "";

// The CSS selector that refers to the details visible in Level #2 is passed on.
content_selector = ".level_2-details-div";

$(content_selector).mouseleave(
  function () {

    // An Object variable that will hold the jQuery object referring 
    // to the content the visitor is interacting with is initialized.
    var content_element = $(this);

    // An Array that will hold the result of the method, 'explode', executed 
    // on 'content_element' is initialized.
    var string_contents_Array = [];

    // The CSS selector of the button is split into substrings.
    string_contents_Array = $(content_element).attr("id").split("-");

    // A String variable is intialized that will hold the CSS selector 
    // for the specific button triggering the detail about 
    // the cleaning service a visitor wants access to.
    var block_selector_value = "";

    // The CSS selector of the specific button the visitor is interacting 
    // with is passed on.
    block_selector_value = string_contents_Array[2];

    // The visibility of the button and the content the visitor is 
    // interacting with is changed by the use of the function, 'showLevel2Buttons'.
    showLevel2Buttons(block_selector_value);
  }
);



$(content_selector).blur(
  function () {

    // An Object variable that will hold the jQuery object referring 
    // to the content the visitor is interacting with is initialized.
    var content_element = $(this);

    // An Array that will hold the result of the method, 'explode', executed 
    // on 'content_element' is initialized.
    var string_contents_Array = [];

    // The CSS selector of the button is split into substrings.
    string_contents_Array = $(content_element).attr("id").split("-");

    // A String variable is intialized that will hold the CSS selector 
    // for the specific button triggering the detail about 
    // the cleaning service a visitor wants access to.
    var block_selector_value = "";

    // The CSS selector of the specific button the visitor is interacting 
    // with is passed on.
    block_selector_value = string_contents_Array[2];

    // The visibility of the button and the content the visitor is 
    // interacting with is changed by the use of the function, 'showLevel2Buttons'.
    showLevel2Buttons(block_selector_value);
  }
);



// The CSS selector that refers to the links within the main mobile menu is passed on.
var mobile_menu_links_selector = ".nav-mobile-a";

$(mobile_menu_links_selector).click(
  function () {
    displayMobileMenu();
  }
);



// CSS selectors that refer to the form input fields of the 'Talk to Dallas, 
// and 'Make an Appointment' forms are passed on.
var input_selector = "#input-contact-full_name, #input-contact-phone_number, #input-contact-message, #input-maa-full_name, #input-maa-phone_number";

$(input_selector).focusin(
  function () {
    var input_element = {};
    
    input_element = this;
    
    verifyFields(input_element, "focus");
    
  }
);

$(input_selector).blur(
  function () {
    var input_element = {};
    
    input_element = this;
    
    verifyFields(input_element, "blur");
  }
);


// CSS selectors that refer to the 'confirmation message's' background 
// are passed on.
var message_selector = "#contact-confirmation_message, #maa-confirmation_message";

$(message_selector).click(
  function ()	{
    window.location.href = "http://dmw.chriscjamison.com";
  }
);



// CSS selectors that refer to the 'error message's' background 
// are passed on.
var message_selector = "#contact-error_message, #maa-error_message";

$(message_selector).click(
  function ()	{
    $(message_selector).fadeOut(100);

    var form_selector = "#content-form-contact, #content-form-maa";

    $(form_selector).fadeIn(400);
  }
);



// CSS selectors that refer to the main tablet navigation links 
// are passed on.

var links_selector = ".nav-top-a";

$(links_selector).click(
  function () {
    toggleTabletMenu();
  }
);



$(document).ready( 
  function () {
    var url_string = window.location.href;

    var search_string_Array = [
      "talk-to-dallas.htm", 
      "make-an-appointment.htm"
    ];

    search_string_Array.forEach(
      function (item, index)	{
        if (url_string.indexOf(search_string_Array[index]) > -1)  {
          adjustHeight();

          if (item === "make-an-appointment.htm") {
            initializeAppointmentForm();
          }
        }
      }
    );
    
    var url_hash = window.location.hash;
    
    var url_hash_search_string = "message=complete";
		
		if (url_hash.indexOf(url_hash_search_string) > -1)	{
			loadConfirmationMessage("talk-to-dallas");
    }

    url_hash_search_string = "error=talk-to-dallas";

    if (url_hash.indexOf(url_hash_search_string) > -1)	{
			loadErrorMessage("talk-to-dallas");
    }

    url_hash_search_string = "appointment=complete";

    if (url_hash.indexOf(url_hash_search_string) > -1)	{
			loadConfirmationMessage("make-an-appointment");
    }

    url_hash_search_string = "error=make-an-appointment";

    if (url_hash.indexOf(url_hash_search_string) > -1)	{
			loadErrorMessage("make-an-appointment");
    }
  }
);



function showLevel2Content(block_selector_value) {
  /* @PARAMS **********************************************
   * 
   *  Variable:
   *    block_selector_value
   *      - Holds a String that refers to the CSS selectors 
   *        of the button and content contained in Level #2
   *        that the visitor is interacting with.
   * 
   ******************************************************** */
  
  // A String variable is initialized that will hold the CSS selector for the 
  // button the visitor is interacting with.
  var button_selector = "#level_2-service-a-" + block_selector_value;
  // A String variable is initialized that will hold the CSS selector for the 
  // block of content the visitor is interacting with.
  var content_selector = "#level_2-detail-" + block_selector_value;

  // A String variable is initialized that will contain CSS class 
  // that will trigger the browser to hide the button.
  var button_not_visible_class = "level_2-button-not_visible";

  // A String variable is initialized that will contain CSS class that 
  // will be removed from the button.
  var button_visible_class = "level_2-button-visible";

  // The button is hidden from view.
  $(button_selector).fadeTo(200, 0);
  $(button_selector).removeClass(button_visible_class);
  $(button_selector).addClass(button_not_visible_class);

  // A String variable is initialized that will contain CSS class 
  // that will be removed from the HTML element containing the content 
  // the visitor is interacting with.
  var content_not_visible_class = "level_2-details-not_visible";

  // A String variable is initialized that will contain the CSS class 
  // that will trigger the browser to show the content.
  var content_visible_class = "level_2-details-visible";

  // The content is made visible.
  $(content_selector).removeClass(content_not_visible_class);
  $(content_selector).addClass(content_visible_class);
  setTimeout(
    function () {
      $(content_selector).fadeTo(400, 1);
    }, 50
  );
} // END of FUNCTION showLevel2Content



function showLevel2Buttons(block_selector_value) {
  /* @PARAMS **********************************************
   * 
   *  Variable:
   *    block_selector_value
   *      - Holds a String that refers to the CSS selectors 
   *        of the button and content contained in Level #2
   *        that the visitor is interacting with.
   * 
   ******************************************************** */
  
  // A String variable is initialized that will hold the CSS selector for the 
  // block of content the visitor is interacting with.
  var content_selector = "#level_2-detail-" + block_selector_value;
  
  // A String variable is initialized that will contain CSS class 
  // that will be removed from the HTML element containing the content 
  // the visitor is interacting with.
  var content_not_visible_class = "level_2-details-not_visible";

  // A String variable is initialized that will contain the CSS class 
  // that will trigger the browser to show the content.
  var content_visible_class = "level_2-details-visible";

  // A Boolean variable that serves as a flag that refers to the presence 
  // of a CSS class within the HTML element holding the content 
  // the visitor is interacting with is initialized.
  var content_is_visible = $(content_selector).hasClass(content_visible_class);
  
  // IF statement that changes the visibility of the content and the button 
  // the visitor is interacting with.
  if (content_is_visible === true)  {

    // The content is hidden.
    $(content_selector).fadeTo(200, 0);
    $(content_selector).removeClass(content_visible_class);
    $(content_selector).addClass(content_not_visible_class);

    // A String variable is initialized that will hold the CSS selector for the 
    // button the visitor is interacting with.
    var button_selector = "#level_2-service-a-" + block_selector_value;

    // A String variable is initialized that will contain CSS class 
    // that will trigger the browser to hide the button.
    var button_not_visible_class = "level_2-button-not_visible";

    // A String variable is initialized that will contain CSS class that 
    // will be removed from the button.
    var button_visible_class = "level_2-button-visible";

    // The button is made visible.
    $(button_selector).removeClass(button_not_visible_class);
    $(button_selector).addClass(button_visible_class);
    setTimeout(
      function () {
        $(button_selector).fadeTo(400, 1);
      }, 50
    );
  }
} // END of FUNCTION showLevel2Buttons



function showLevel5Content(block_selector_value) {
  /* @PARAMS **********************************************
   * 
   *  Variable:
   *    block_selector_value
   *      - Holds a String that refers to the CSS selectors 
   *        of the content contained in Level #5
   *        that the visitor is interacting with.
   * 
   ******************************************************** */

  // A String variable is initialized that will hold the CSS 
  // selector that refers to the blocks on content within Level #5 
  // the visitor is interacting with.
  var all_content_selector = ".level_5-service-div";

  // A String variable is initialized that will hold the CSS class 
  // that triggers the visibility of the content the visitor 
  // is interacting with.
  var content_visible_class = "level_5-service-visible";

  // The blocks of content within Level #5 the visitor is interacting with 
  // are all hidden from view.
  $(all_content_selector).removeClass(content_visible_class);

  // A String variable is initialized that will hold the CSS 
  // selector that refers to the link the visitor is interacting with.
  var content_selector = "#level_5-service-" + block_selector_value;

  // A String variable is initialized that will hold the CSS selector 
  // that refers to the <section>'s within the webpage.
  var section_selector = ".homepage-section";

  // A Number variable that will hold the height of the <section>'s 
  // within the webpage.
  var section_height = $(section_selector).height();

  // A Number variable is initialized that will hold the current vertical 
  // position within the browser.
  var current_position = section_height * 6;

  // The block of content the visitor is interacting with is made visible.
  $(content_selector).addClass(content_visible_class);

  // The browser is repositioned to align the view with the content 
  // the visitor is interacting with.
  $(window).scrollTop(current_position);
}



function loadConfirmationMessage(page_type)	{
  var message_and_bkgrnd_selector = "";
  var form_selector = "";

  if (page_type === "talk-to-dallas") {
    message_and_bkgrnd_selector = "#contact-confirmation_message, #contact-bkgrnd";
    form_selector = "#content-form-contact";
  } else if (page_type === "make-an-appointment") {
    message_and_bkgrnd_selector = "#maa-confirmation_message, #maa-bkgrnd";
    form_selector = "#content-form-maa";
  }

  block_visible_css = {
		display: "block"
  };
  
  block_not_visible_css = {
    display: "none"
  };

	$(message_and_bkgrnd_selector).css(block_visible_css);
	$(form_selector).css(block_not_visible_css);
}


function loadErrorMessage(page_type)	{
  var message_and_bkgrnd_selector = "";
  var form_selector = "";

  if (page_type === "talk-to-dallas") {
    message_and_bkgrnd_selector = "#contact-error_message, #contact-bkgrnd";
    form_selector = "#content-form-contact";
  } else if (page_type === "make-an-appointment") {
    message_and_bkgrnd_selector = "#maa-error_message, #maa-bkgrnd";
    form_selector = "#content-form-maa"
  }

  block_visible_css = {
		display: "block"
  };
  
  block_not_visible_css = {
    display: "none"
  };

	$(message_and_bkgrnd_selector).css(block_visible_css);
	$(form_selector).css(block_not_visible_css);
}



function closeMessage()	{
	var div_selector;
	
	div_selector = "#contact-confirmation_message, #contact-error_message, #contact-bkgrnd, #maa-confirmation_message, #maa-error_message, #maa-bkgrnd";
	
	var visible_css = {};
	
	visible_css = {
		display: "none"
	}
	
	$(div_elements).css(visible_css);
}



/* function loadErrorMessage(message_type) {
  if (message_type === "talk-to-dallas")  {
    var div_selector = "#contact-error_message, #contact-bkgrnd";
  } else if (message_type === "maa") {
    var div_selector = "#maa-error_message, #maa-bkgrnd";
  }

  var visible_css = {};
	
	visible_css = {
		display: "none"
	}
	
	$(div_selector).css(visible_css);
} */


function adjustHeight()	{
  var window_height = $(window).height();

  var form_and_bkground_selectors = "#contact-bkgrnd, #maa-bkgrnd";

  $(form_and_bkground_selectors).height(window_height);
}



function initializeAppointmentForm()	{
  var date_data = new Date;

  var current_date = date_data.getFullYear();
  
  current_date = current_date + "-" + String(date_data.getMonth() + 1).padStart(2, '0');
    
  current_date = current_date + "-" + String(date_data.getDate() + 1).padStart(2, '0');

  var date_selector = "#input-maa-date";

  $(date_selector).val(current_date);

  var current_time = (date_data.getHours() + 1).toString() + ":00:00"; 

  if (date_data.getHours() + 1 === 24)  {
    current_time = "00:00:00";
  }

  var time_selector = "#input-maa-time";

  $(time_selector).val(current_time);
}



function verifyFields(input_element, field_status) {
	var color_base_css = {};
	var color_valid_css = {};
	var color_error_css = {};
	
	color_base_css = {
		borderColor: "#98a0a5", 
		backgroundColor: "#fff", 
		color: "#2b2c30"
	};
	
	color_valid_css = {
		borderColor: "#98a0a5", 
		backgroundColor: "#fff",
		color: "#000"
	};
	
	color_error_css = {
		borderColor: "#d46a6a", 
		backgroundColor: "#ffaaaa", 
		color: "#aa3939"
	};
	
	var field_selector;
	var field_value;
	
	field_selector = $(input_element).attr("id");
	field_value = $(input_element).val();
	
	var default_value_string;
	var error_value_string;

	switch (field_selector) {
		case "input-contact-full_name":
			default_value_string = "Type your full name";
			error_value_string = "Please retype your full name";
			
			if (field_value === error_value_string) { 
				if (field_status === "focus")	{
					clearData(input_element, color_valid_css);
				}	else {
					resetData(input_element, default_value_string, color_base_css);
				}
			}
			
			if (field_value === default_value_string) {
				if (field_status === "focus")	{
					clearData(input_element, color_valid_css);
				}	
			}
			
			if (field_value.length === 0) {
				if (field_status === "blur")	{
					resetData(input_element, default_value_string, color_base_css);
				}
			} else {
				if (field_value !== default_value_string && 
					field_status === "blur")	{
					validateData(input_element, error_value_string, color_valid_css, color_error_css);
				}	
			}
		break; 

		case "input-contact-phone_number":
			default_value_string = "Type your phone number";
			error_value_string = "Please retype your phone number";
			
			if ((field_value === default_value_string || 
					 field_value === error_value_string) && 
				 	(field_status === "focus")) {
				clearData(input_element, color_valid_css);
			} else if (field_status === "blur") { 
				if (field_value.length > 0)	{
					validateData(input_element, error_value_string, color_valid_css, color_error_css);
				} else {
					resetData(input_element, default_value_string, color_base_css);
				}
			} 
		break;

		case "input-contact-message":
			default_value_string = "Type your message here";
			
			if (field_value === default_value_string) {
				if (field_status === "focus")	{
					clearData(input_element, color_valid_css);
				}	else {
					resetData(input_element, default_value_string, color_base_css);
				}
			}
			
			if (field_value.length === 0) {
				if (field_status === "blur")	{
					resetData(input_element, default_value_string, color_base_css);
				}
			} else if (field_value !== default_value_string) {
				$(input_element).css(color_valid_css);
			}
    break;
    
    case "input-maa-full_name":
			default_value_string = "Type your full name";
			error_value_string = "Please retype your full name";
			
			if (field_value === error_value_string) { 
				if (field_status === "focus")	{
					clearData(input_element, color_valid_css);
				}	else {
					resetData(input_element, default_value_string, color_base_css);
				}
			}
			
			if (field_value === default_value_string) {
				if (field_status === "focus")	{
					clearData(input_element, color_valid_css);
				}	
			}
			
			if (field_value.length === 0) {
				if (field_status === "blur")	{
					resetData(input_element, default_value_string, color_base_css);
				}
			} else {
				if (field_value !== default_value_string && 
					field_status === "blur")	{
					validateData(input_element, error_value_string, color_valid_css, color_error_css);
				}	
			}
		break; 

		case "input-maa-phone_number":
			default_value_string = "Type your phone number";
			error_value_string = "Please retype your phone number";
			
			if ((field_value === default_value_string || 
					 field_value === error_value_string) && 
				 	(field_status === "focus")) {
				clearData(input_element, color_valid_css);
			} else if (field_status === "blur") { 
				if (field_value.length > 0)	{
					validateData(input_element, error_value_string, color_valid_css, color_error_css);
				} else {
					resetData(input_element, default_value_string, color_base_css);
				}
			} 
		break;
	}
}



function validateData(input_element, error_value_string, color_valid_css, color_error_css)	{
	var field_selector;
	var field_value;
	
	field_selector = $(input_element).attr("id");
	field_value = $(input_element).val();

  var search_string;
	var search_index_num;
	
	switch ($(input_element).attr("id"))	{
		case "input-contact-full_name": 

			search_string = " ";
      search_index_num = field_value.indexOf(search_string);
      

      if (search_index_num > 1 && 
          field_value.length > (search_index_num + 1))	{
				$(input_element).css(color_valid_css);
			}	else {
				$(input_element).css(color_error_css);
				$(input_element).val(error_value_string);
			}
		break;

		case "input-contact-phone_number": 
			var search_string_Array;
			var phone_number;

			search_string_Array = [
				"(", 
				")", 
        "-", 
        " "
			];

			phone_number = field_value;

			var is_valid_results_Array;
			var inc;

			is_valid_results_Array = [];
			inc = 0;

			search_string_Array.forEach(
				function (item, index)	{
					var search_string;
					var search_result_num;

					search_string = item;

					search_result_num = phone_number.indexOf(search_string);

					if (search_result_num > -1)	{
            is_valid_results_Array[index] = true;

          } else {
						is_valid_results_Array[index] = false;
					}
				}
			);
						
			var is_valid;
			
      is_valid = false;
      
      if (is_valid_results_Array[0] === true && 
          is_valid_results_Array[1] === true && 
          is_valid_results_Array[2] === true && 
          is_valid_results_Array[3] === true && 
          phone_number.length === 14) {
        is_valid = true;
      }

      if (is_valid_results_Array[0] === false && 
          is_valid_results_Array[1] === false && 
          is_valid_results_Array[2] === true && 
          is_valid_results_Array[3] === false && 
          phone_number.length === 12) {
        is_valid = true;
      }

      if (is_valid_results_Array[0] === false && 
          is_valid_results_Array[1] === false && 
          is_valid_results_Array[2] === false && 
          is_valid_results_Array[3] === false && 
          phone_number.length === 10) {
        is_valid = true;
      }
			
			if (is_valid === true)	{
				$(input_element).css(color_valid_css);
			} else {
				$(input_element).css(color_error_css);
				$(input_element).val(error_value_string);
			}
			
		break;
    
    case "input-maa-full_name": 

			search_string = " ";
      search_index_num = field_value.indexOf(search_string);
      

      if (search_index_num > 1 && 
          field_value.length > (search_index_num + 1))	{
				$(input_element).css(color_valid_css);
			}	else {
				$(input_element).css(color_error_css);
				$(input_element).val(error_value_string);
			}
		break;

		case "input-maa-phone_number": 
			var search_string_Array;
			var phone_number;

			search_string_Array = [
				"(", 
				")", 
        "-", 
        " "
			];

			phone_number = field_value;

			var is_valid_results_Array;
			var inc;

			is_valid_results_Array = [];
			inc = 0;

			search_string_Array.forEach(
				function (item, index)	{
					var search_string;
					var search_result_num;

					search_string = item;

					search_result_num = phone_number.indexOf(search_string);

					if (search_result_num > -1)	{
            is_valid_results_Array[index] = true;

          } else {
						is_valid_results_Array[index] = false;
					}
				}
			);
						
			var is_valid;
			
      is_valid = false;
      
      if (is_valid_results_Array[0] === true && 
          is_valid_results_Array[1] === true && 
          is_valid_results_Array[2] === true && 
          is_valid_results_Array[3] === true && 
          phone_number.length === 14) {
        is_valid = true;
      }

      if (is_valid_results_Array[0] === false && 
          is_valid_results_Array[1] === false && 
          is_valid_results_Array[2] === true && 
          is_valid_results_Array[3] === false && 
          phone_number.length === 12) {
        is_valid = true;
      }

      if (is_valid_results_Array[0] === false && 
          is_valid_results_Array[1] === false && 
          is_valid_results_Array[2] === false && 
          is_valid_results_Array[3] === false && 
          phone_number.length === 10) {
        is_valid = true;
      }
			
			if (is_valid === true)	{
				$(input_element).css(color_valid_css);
			} else {
				$(input_element).css(color_error_css);
				$(input_element).val(error_value_string);
			}
			
		break;
		
	}
}



function clearData(input_element, color_valid_css)	{
	$(input_element).val("");
	$(input_element).css(color_valid_css);
}



function resetData(input_element, default_value_string, color_base_css) {
	$(input_element).css(color_base_css);
	$(input_element).val(default_value_string);	
}



function displayMobileMenu() {
  /* @params ********************************************************
     Name:      displayMobileMenu

     Purpose:   Toggle the visibility of mobile menu. 
  
  **************************************************************** */

  var menu_icon_selector = "";

  menu_icon_selector = "#menu-icon-img";

  var menu_icon_source = $(menu_icon_selector).attr("src");

  var search_string = "/menu.png";

  if (menu_icon_source.indexOf(search_string) > -1) {
    $(menu_icon_selector).attr("src", "/assets/img/common/menu/menu-close.png");
  } else {
    $(menu_icon_selector).attr("src", "/assets/img/common/menu/menu.png");
  }
  
  var main_menu_selector = "";

  main_menu_selector = "#mobile-nav-links";

  var html_selector = "";

  html_selector = "html";

  var html_class_name = "";

  html_class_name = "overflow-hidden-html";

  var window_height = $(window).height();

  var main_menu_height = window_height - 84 - 65 - 26;

  $(main_menu_selector).height(main_menu_height);

  $(main_menu_selector).fadeToggle(250);

  $(html_selector).toggleClass(html_class_name);
} // END of displayMobileMenu 



function toggleTabletMenu() {
  /* @params ********************************************************
     Name:      displayTabletMenu

     Purpose:   Toggle the visibility of tablet menu. 
  
  **************************************************************** */

  var menu_icon_selector = "";

  menu_icon_img_selector = "#top-tablet-nav-icon";

  var menu_icon_source = $(menu_icon_img_selector).attr("src");

  var search_string = "/menu-tablet.png";

  var menu_icon_selector = "#top-tablet-nav";
  var logo_selector = "#top-nav-logo-a";
  var aside_selector = "#header-contact_info_container-aside";
  var main_menu_selector = "#top-nav-ul";
  var main_content_selector = "main, .carousel";
  var menu_background_selector = "#top-desktop-nav";
  var html_selector = "html";

  var tablet_menu_visible_class = "tablet-nav-visible";

  var menu_icon_css = {};
  var logo_and_aside_css = {};
  var html_css = {};
  var main_content_half_visible_css = {};

  var window_width = $(window).width();

  if (window_width > 415 && window_width < 1900)  {
    if (menu_icon_source.indexOf(search_string) > -1) {
      menu_icon_css = {
        right: "302px"
      };
  
      $(menu_icon_selector).css(menu_icon_css);
      $(menu_icon_img_selector).attr("src", "/assets/img/common/menu/menu-tablet-close.png");
  
      logo_and_aside_css = {
        display: "none"
      };
  
      $(logo_selector).css(logo_and_aside_css);

      if (window_width >= 800) {
        $(aside_selector).css(logo_and_aside_css);
      }
      
      $(menu_background_selector).toggleClass(tablet_menu_visible_class);
      $(main_menu_selector).fadeIn(400);
  
      main_content_half_visible_css = { 
        opacity: 0.5
      };
  
      $(main_content_selector).animate(main_content_half_visible_css);
      
  
    } else {
      if (window_width >= 800 && window_width <= 1024) {
        menu_icon_css = {
          right: "26px"
        };
      } else if (window_width > 800 && window_width <= 1900) {
        menu_icon_css = {
          right: "76px"
        };
      } else if (window_width > 414 && window_width <= 800) {
        menu_icon_css = {
          right: "0"
        };
      }
  
      $(menu_icon_selector).css(menu_icon_css);
      $(menu_icon_img_selector).attr("src", "/assets/img/common/menu/menu-tablet.png");
  
      $(menu_background_selector).toggleClass(tablet_menu_visible_class);
      
      logo_and_aside_css = {
        display: "inline-flex"
      };

      setTimeout(
        function () {
          $(logo_selector).css(logo_and_aside_css);
        }, 250
      );

      if (window_width >= 800)  {
        setTimeout(
          function () {
            $(aside_selector).css(logo_and_aside_css);
          }, 250
        );  
      }
      
      $(main_menu_selector).fadeOut(300);
  
      main_content_half_visible_css = {
        opacity: 1
      };
  
      $(main_content_selector).animate(main_content_half_visible_css);
    }
    
    var html_class_name = "";
  
    html_class_name = "overflow-hidden-html";
  
    
  
    $(html_selector).toggleClass(html_class_name);
  
  }
} // END of displayMobileMenu 


