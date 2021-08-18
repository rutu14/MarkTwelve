var btn2=document.querySelector("#btn2")
var radio=document.querySelectorAll(".radiobtn")
ans=[];
rightans=["no","no","no","yes","no","yes","no","no","no","yes","no","no","no","yes","no","no"]
btn2.addEventListener("click",function clickEventHandler(){
    score=0
    console.log(score)
    for(i=0;i<radio.length;i++){
        if(radio[i].checked){
            ans[i]="yes"
        }
        else{
            ans[i]="no"
        }
        if(ans[i]==rightans[i]){
            score+=1
        }
    }
     disquiz.innerText=("Your score is "+score)

})