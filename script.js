var scoreJ1;
var scoreJ2;
var scoreTempJ1;
var scoreTempJ2;

var bScoreJ1=document.getElementById('score-0');
var bScoreJ2=document.getElementById('score-1');
var bScoreTempJ1=document.getElementById('courent-0');
var bScoreTempJ2=document.getElementById('courent-1');



function init(){
// Q1 a 
 scoreJ1=0;
 scoreJ2=0;
 scoreTempJ1=0;
 scoreTempJ2=0;
 
 bScoreJ1.innerHTML=0;
 bScoreJ2.innerHTML=0;
 bScoreTempJ1.innerHTML=0;
 bScoreTempJ2.innerHTML=0;
// Q1 b


}
document.body.addEventListener("onload",init());