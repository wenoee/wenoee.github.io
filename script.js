

function sayHello(){
  var response = prompt("What's your name?");
  alert("Hello " + response + ",have a nice day!");
}

function add(a,b){
  return a + b;
}
console.log(add(20,30));
console.log(add(30,500));

function showTopic(){
  var x = document.getElementById('demo');
  x.style.fontSize = "25px";
  x.style.color = "red";
}

function randomDecide(){
  var diningHalls = ['星光','北苑','南苑','梆子井','中蓝','外卖','西北风'];
  var diningHall = diningHalls[Math.floor(Math.random()*diningHalls.length)];
  alert("今天吃" + diningHall + "吧!");
}
