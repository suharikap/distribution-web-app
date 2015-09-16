$(document).ready(function(){
 	
     $("#close-button").click(function(){
     	$("#secondModal").hide();
     });
     $("#remove-close-button").click(function(){
          $("#removeModal").hide();
     });
     $("#phone-close-button").click(function(){
          $("#phoneModal").hide();
     });
     $("#fos-close-button").click(function(){
          $("#fosModal").hide();
     });
     $("#stock-close-button").click(function(){
          $("#stockModal").hide();
     });

     $("#icon-select").click(function(){
     	console.log("icon clicked");
     	$("#secondModal").show();
     });
     $("#top-close-button").click(function(){
     	$("#openModal").hide();
     });
     $(".top-icon-select").click(function(){
     	console.log("icon clicked");
     	$("#openModal").show();
     });
     $(".remove-icon-select").click(function(){
          console.log("icon clicked");
          $("#removeModal").show();
     });
     $("#phone-icon-select").click(function(){
          console.log("icon clicked");
          $("#phoneModal").show();
     });
     $(".fos-icon-select").click(function(){
          console.log("icon clicked");
          $("#fosModal").show();
     });
     $(".stock-icon-select").click(function(){
          console.log("icon clicked");
          $("#stockModal").show();
     });
});
