//User Interface Logic
$("documents").ready(function(){
	$("#inputentry").submit(function(event) {
		var userInput = ($("#numberentry").val());
    $("#return").text('');
    number();
    $("#numberentry").val();
    event.numberDefault();
 })	;
});

//Business Logic
