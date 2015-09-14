$(document).ready(function(){
 	
     $("#close-button").click(function(){
     	$("#secondModal").hide();
     });
     $("#icon-select").click(function(){
     	console.log("icon clicked");
     	$("#secondModal").show();
     });
     $("#top-close-button").click(function(){
     	$("#openModal").hide();
     });
     $("#top-icon-select").click(function(){
     	console.log("icon clicked");
     	$("#openModal").show();
     });
});
