$(document).ready(function(){

	$("#add-parameters").click(function(){
		$("#add-parameters-card").show();
		$("#add-fos-card").hide();
		$('#target-card').hide();

	});

	$("#add-fos").click(function(){
		$("#add-parameters-card").hide();
		$("#add-fos-card").show();
		$('#target-card').hide();
	});

	$("#set-target").click(function(){
		$("#add-parameters-card").hide();
		$("#add-fos-card").hide();
		$('#target-card').show();


	});
});