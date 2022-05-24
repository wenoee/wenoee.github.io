

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

var meal = prompt("你想吃点什么？（请输入“早餐/午餐/晚餐”）")

function showColor(){
  var x = document.getElementById('changeColor');
  x.style.color = "purple";
}

function randomDecide(){
  if(meal === "早餐"){
    randomBreakfast()
  }else if(meal === "午餐"){
    randomLunch()
  }else if(meal === "晚餐"){
    randomDinner()
  }else {
    saySorry()
  }
}

function randomBreakfast(){
  var breakfasts = ['星光小笼包','广院肉饼','南苑小馄饨','小米粥','鸡蛋','生煎','胡辣汤','豆浆油条'];
  var breakfast = breakfasts[Math.floor(Math.random()*breakfasts.length)];
  alert("早餐吃" + breakfast + "吧!");
}

function randomLunch(){
  var lunches = ['黄焖鸡米饭','中蓝基本伙','淮南牛肉汤','梆子井猪脚饭','港式烧腊饭','麻辣香锅','麻辣烫','北苑酸菜鱼','水煮肉片','老麻抄手'];
  var lunch = lunches[Math.floor(Math.random()*lunches.length)];
  alert("午餐吃" + lunch + "吧!");
}

function randomDinner(){
  var dinners = ['小马扎烧烤','火锅','KFC','水果捞','泡面','南苑自选','轻食餐','炸鸡'];
  var dinner = dinners[Math.floor(Math.random()*dinners.length)];
  alert("晚餐吃" + dinner + "吧!");
}

function saySorry(){
  alert("请先输入您要用餐的时段噢~")
  meal = prompt("你想吃点什么？（请输入“早餐/午餐/晚餐）")
}
