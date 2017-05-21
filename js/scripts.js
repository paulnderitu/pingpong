function pingPongFun(userInput){
var result = [];
for (var i = 1; i <= userInput; i++){
  if ((i % 15) === 0){
    result.push ("Ping-Pong");
  } else if ((i % 5) === 0){
    result.push ("Pong");
  } else if ((i % 3) === 0){
    result.push ("Ping");
  } else
    result.push (i);
}
return result;
}
