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
var pingpong

function number() {
	for (var num=0;num<=pingpong;num++ ) {
  	if ((num%3 === 0) && (num%5===0)) {
    	$("#return").append("<li>Ping Pong</li>");
    }
    else if (num%3===0){
    	$("#return").append("<li>Ping</li>")
      }
    else if (num%5===0){
    	$("#return").append('<li>Pong</li>')
    }
  }
}
