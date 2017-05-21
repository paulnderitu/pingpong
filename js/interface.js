$(document).ready(function() {
  $("form#pingPongForm").submit(function(event) {
    $("#userOutput").empty();
    var userInput = parseInt($("input#number").val());
    var result = pingPongFun(userInput);
    result.forEach(function(output) {
    $("#userOutput").append("<li>" + output + "</li>");
    event.preventDefault();
  });
});
});
