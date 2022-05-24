var alA=document.getElementById("gallary").getElementsByTagName("a");
   for(var i=0;i<alA.length;i++){
     alA[i].onclick=function(){
       document.getElementById("image").src=this.href;
       return false;
