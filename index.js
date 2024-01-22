var player1="Player1";
var player2="Player2";
function editName(){
player1=prompt("Change Player1 Name");
player2=prompt("Change Player2 Name");

if(player1.length<1||player2.length<1){
    alert("please write a valid name");
    return;
}
document.querySelector("p.player1").innerHTML=player1;
document.querySelector("p.player2").innerHTML=player2;

}
function rolltheDice(){
    var dicenum1=document.querySelector(".img1");
    var dicenum2=document.querySelector(".img2");
    dicenum1.setAttribute("src","dice.gif");
    dicenum2.setAttribute("src","dice.gif");
var result=document.querySelector("h1");
setTimeout(()=>{
var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
dicenum1.setAttribute("src","dice"+randomnumber1+".png");
dicenum2.setAttribute("src","dice"+randomnumber2+".png");
if(randomnumber1===randomnumber2){
result.innerHTML="DRAW";

}
else if(randomnumber2<randomnumber1){
result.innerHTML=(player1+" WINS! ");
}
else{
result.innerHTML=(player2+ " WINS! ");

}
},2500);

}
