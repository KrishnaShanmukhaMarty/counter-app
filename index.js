let count=document.getElementById("count");
let value=0;
let check=document.getElementById("check");
let saveBtn=document.getElementById("save-btn");
let resetBtn=document.getElementById("reset-btn");
let incrementBtn=document.getElementById("increment-btn");
incrementBtn.addEventListener("click", function(e){
    value=value+1;
    count.textContent=value; 
    count.style.color="green";
    
});

resetBtn.addEventListener("click",function(e){
    count.textContent=0;
});

saveBtn.addEventListener("click",function(e){
    check.textContent+= "-"+value;
    check.style.color="red";

});

