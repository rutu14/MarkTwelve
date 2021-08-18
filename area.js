var len1=document.querySelector("#len1")
var len2=document.querySelector("#len2")
var len3=document.querySelector("#len3")
var btn3=document.querySelector("#btn3")
btn3.addEventListener("click",function clickEventHandler(){
    first = Number(len1.value);
    second = Number(len2.value);
    third = Number(len3.value);
    if (first+second>third && second+third>first && first+third>second){
     semi =(first+second+third)/2;
     res = Math.sqrt(semi*(semi-first)*(semi-second)*(semi-third));
     disarea.innerText ="Area of a triangle using heron's formula "+res+" units";
    } 
  else {
    disarea.innerText = "Enter valid side length";
  }
})