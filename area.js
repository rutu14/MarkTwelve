var len1=document.querySelector("#len1")
var len2=document.querySelector("#len2")
var len3=document.querySelector("#len3")
var btn3=document.querySelector("#btn3")
btn3.addEventListener("click",function clickEventHandler(){
  first = Number(len1.value);
  second = Number(len2.value);
  third = Number(len3.value);
  console.log(first,second,third)

  if(first == "" || first == null || first == 0, second == "" || second == null || second == 0, third == "" || third == null || third == 0 ) {
    disarea.innerHTML=" Enter values to proceed ahead!  "
  }
  else if (( Math.sign( first ) === -1 ) || ( Math.sign( second ) === -1 ) || ( Math.sign( third ) === -1 )){
    disarea.innerHTML=" Enter positive values. "
  }
  else if ( first + second > third && second + third > first && first + third > second ) {
    semi = ( first + second + third ) / 2;
    res = Math.sqrt( semi * ( semi - first ) * ( semi - second ) * ( semi - third ) );
    disarea.innerText = " Area of a triangle using heron's formula " + res.toFixed(2) + " units. ";
   } 
  else {
    disarea.innerText = " Enter valid side length ";    
  }
})