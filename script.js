//Zakaria Charra - Azzouzi Anas B-10

//const scoreMax=20;
//Q6
document.body.innerHTML+='<label> Score max </label> <input type="text" id="scoreMax"/><button id="ok">ok</button> <span id="sm"> Votre score Max est :</span> '; 
var btnok = document.getElementById("ok");
var scoreMax=0;
btnok.addEventListener("click",function(){
scoreMax=Number.parseInt(document.getElementById("scoreMax").value);
document.getElementById("sm").innerHTML+=scoreMax;

});

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
 bScoreJ1.innerHTML=0;
 bScoreJ2.innerHTML=0;
 bScoreTempJ1.innerHTML=0;
 bScoreTempJ2.innerHTML=0;
// Q1 b
pj2.classList.remove("actif");
pj1.classList.add("actif");


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
								j2.actif=true;
								pj1.classList.remove("actif");
								pj2.classList.add("actif");
							}

							else{
								bScoreTempJ2.innerHTML=0;
								j2.ScoreTemp=0;
								j2.actif=false;
								j1.actif=true;
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


});
//Q3
var btnPasse=document.querySelector(".btn-passe");
btnPasse.addEventListener("click",function joueurSuivant(){

							de.style.display="none";

							if(j1.actif==true){
								j1.ScoreTot+=j1.ScoreTemp;
								j1.ScoreTemp=0;
								j1.actif=false;
								j2.actif=true;
								bScoreJ1.innerHTML=j1.ScoreTot;
								bScoreTempJ1.innerHTML=0;
								pj2.classList.add("actif");
								pj1.classList.remove("actif");


							}

							else{
								j2.ScoreTot+=j2.ScoreTemp;
								j2.ScoreTemp=0;
								j2.actif=false;
								j1.actif=true;
								bScoreJ2.innerHTML=j2.ScoreTot;
								bScoreTempJ2.innerHTML=0;
								pj1.classList.add("actif");
								pj2.classList.remove("actif");

							}

							 Q4();
});
//Q4
			function Q4(){
						if(j1.ScoreTot>=scoreMax){

							document.querySelector("#nom-0").innerHTML="Vainqueur !";
							document.querySelector("#nom-0").classList.add("vainqueur");
						}
						if(j2.ScoreTot>=scoreMax){	document.querySelector("#nom-1").innerHTML="Vainqueur !";
							document.querySelector("#nom-1").classList.add("vainqueur");
						}


			}
//Q5
document.querySelector(".btn-new").addEventListener("click",function(){
 
								 bScoreJ1.innerHTML=0;
								 bScoreJ2.innerHTML=0;
								 bScoreTempJ1.innerHTML=0;
								 bScoreTempJ2.innerHTML=0;

								pj2.classList.remove("actif");
								pj1.classList.add("actif");

								de.style.display="none";

								j1.actif=true;
								j2.actif=false;

					});


