var inputID =document.getElementById("input");
inputID.addEventListener("focus",function(){
    // debugger
    lishi.style.display="block";
})
inputID.addEventListener("blur",function(){
    // debugger
    document.getElementById("lishi").style.display="none";
})