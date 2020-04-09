var total1;
var score1=[];
var count1=1;
var over = prompt("enter the number of overs");

function f1(){
    if(count1<(6*over)){
        let num1 =(Math.random()*100)%7;
        score1.push(Math.floor(num1));
        total1= score1.reduce((total1,current1)=>{
            return total1 +current1;

        })
        document.getElementById("score1").innerHTML="the score for team1 is" +total1;
        count1++;
        localStorage.setItem("total1",total1);
        localStorage.setItem("score1",score1);

    }
    console.log(total1,"total1");
console.log(score1,"score1");
console.log(count1,"count1");
console.log(over,"over");
};
//team 2 starts
var total2;
var score2=[];
var count2=1;
// var over = prompt("enter the number of overs");

function f2(){
    if(count2<(6*over)){
        let num2 =(Math.random()*100)%7;
        score2.push(Math.floor(num2));
        total2= score2.reduce((total2,current2)=>{
            return total2 +current2;

        })
        document.getElementById("score2").innerHTML="the score for team2 is" +total2;
        count2++;
        localStorage.setItem("total2",total2);
        localStorage.setItem("score2",score2);

    }
    console.log(total1,"total2");
console.log(score1,"score2");
console.log(count2,"count2");
console.log(over,"over");
};

function winner(){
    if(total1 > total2){

        document.getElementById("winnertext").innerHTML="the winner is team one"+ total1;
    }
    if(total2 > total1){

        document.getElementById("winnertext").innerHTML="the winner is team two"+ total2;
    }
    if(total1===total2){
        document.getElementById("winnertext").innerHTML="the match is tie";
    }
};