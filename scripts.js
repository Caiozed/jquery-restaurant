var menu = '<div class="menu-item">\
              <h2>Jquery</h2>\
      			</div>\
            <div class="menu-item">\
               <h2>REACT.js</h2>\
      			</div>\
            <div class="menu-item">\
               <h2>Node.js</h2>\
      			</div>';
             
var home = '<div class="home">\
      <h2>Welcome to JQuery test program!</h2>\
      <p>This is a test project for using jquery on a simple webpage! </p>\
    </div>';
    
$(document).ready(function(){
	$("#home").addClass("selected");
  
	$("#menu").on("click", function(){
  	$(".content").html(menu);
    $(this).addClass("selected");
    $("#home").removeClass("selected");
	});
  
  $("#home").on("click", function(){
  	$(".content").html(home);
    $(this).addClass("selected");
    $("#menu").removeClass("selected");
	});
});