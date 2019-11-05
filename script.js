var scoreJ1;
var scoreJ2;
var scoreTempJ1;
var scoreTempJ2;
const scoreMax=20;

var bScoreJ1=document.getElementById('score-0');
var bScoreJ2=document.getElementById('score-1');
var bScoreTempJ1=document.getElementById('courent-0');
var bScoreTempJ2=document.getElementById('courent-1');
var pj1=document.getElementsByClassName("panel-joueur-0")[0];
var pj2=document.getElementsByClassName("panel-joueur-1")[0];
var de =document.querySelector(".de");

function Joueur(nbr){
	this.Nbr=nbr;
	this.actif=true;
	this.ScoreTemp=0;
	this.ScoreTot=0;

}
var j1=new Joueur("1");
var j2=new Joueur("2");
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
pj1.classList.add("actif");
pj2.classList.remove("actif");

//Q1 c
de.style.display="none";

j1.actif=true;
j2.actif=false;
}
document.body.addEventListener("onload",init());
//Q2
var btnLance=document.querySelector(".btn-lancer");
btnLance.addEventListener("click", function(){
var random = Math.floor(Math.random()*6+1);
				//console.log(random);
				de.style.display="inline";
				switch (random){
						case 1 :de.src="de-1.png";break;
						case 2 :de.src="de-2.png";break;
						case 3 :de.src="de-3.png";break;
						case 4 :de.src="de-4.png";break;
						case 5 :de.src="de-5.png";break;
						case 6 :de.src="de-6.png";break;
				}
				if(random==1){
							if(j1.actif==true){
								bScoreTempJ1.innerHTML=0;
								j1.ScoreTemp=0;
								j1.actif=false;
								pj1.classList.remove("actif");
								pj2.classList.add("actif");
							}

							else{
								bScoreTempJ2.innerHTML=0;
								j2.ScoreTemp=0;
								j2.actif=false;
								pj2.classList.remove("actif");
								pj1.classList.add("actif");
							}

				}
				else{
							if(j1.actif==true){
								j1.ScoreTemp+=random;
								bScoreTempJ1.innerHTML=j1.ScoreTemp;
								
								
							}

							else{
								j2.ScoreTemp+=random;
								bScoreTempJ2.innerHTML=j2.ScoreTemp;
								
								
							}

				}


})