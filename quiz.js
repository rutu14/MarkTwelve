var btn2=document.querySelector("#btn2")
var radio=document.querySelectorAll(".radiobtn")
ans = [];
rightans = ["no","no","no","yes","no","yes","no","no","no","yes","no","no","no","yes","no","no"];
btn2.addEventListener("click",function clickEventHandler(){
    res=0;
    for ( i = 0; i < radio.length; i++ ){
        if ( radio[i].checked ) {
            ans[i] = " yes ";
        }
        else{
            ans[i] = " no ";
        }
        if ( ans[i] === " yes " ){
            if ( i == 3){
                res +=1;
            }
            if ( i == 5 ){
                res +=1;
            }
            if ( i==9){
                res+=1;
            }
            if(i==13){
                res +=1;
            }
        }
    }
    if ( res == 0 ) {
        for ( j = 0; j < radio.length; j++ ){
            if ( !ans.includes( " yes ") ){
                disquiz.innerText = " Choose your options "; 
            }
            else{
                disquiz.innerText = ( "Your score is " + res * 4 + "/16" );
            }   
    }}
    else{
        disquiz.innerText = ( "Your score is " + res * 4 + "/16"  );
    }
    

})