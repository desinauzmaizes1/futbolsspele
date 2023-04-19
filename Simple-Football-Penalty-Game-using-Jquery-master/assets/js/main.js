    $(document).ready(function(){    
      $("#shemal,#yemeen,#nos") 
      .fadeOut(200)
      .fadeIn(200)
      .fadeOut(200)
      .fadeIn(200)
      .css("background-color","rgba(255,0,0,0.7)");  
   
	$("#shemal,#yemeen,#nos").css('cursor','pointer'); 
     });
     
     
     
     
//Functions of kicking the ball
var test=0,goals=1,goalkeeper=0,player =0;

function GoalOrNot(i){
	if(player != goalkeeper )
	{
		document.getElementById("goals").innerHTML = goals++;
	}
}
function dosyemeen(){ //Function when click right
    if(test==0){
        goalkeeper = btn_click(); //RANDOM FUNCTION of the goal keeper
        $("#kora").animate({top : "35.5%" , left: "+=280px"},100);
        test=1;
		$("#shoot").css("display","none"); 
		$("#again").css("display","block");
		player=0;
		GoalOrNot(player);
    }
}
     
function dosshemal(){ //Function when click left
    if(test==0){
        goalkeeper = btn_click();//RANDOM FUNCTION Bta3et el 7ares
        $("#kora").animate({top : "36%" , left: "30.5%"},100);
        test=1;
		$("#shoot").css("display","none"); 
		$("#again").css("display","block");
		player=2;
		GoalOrNot(player);
    }
}
       
function dosfelnos(){ //Function lama badoos felnos
    if(test==0){
        goalkeeper = btn_click();//RANDOM FUNCTION of the goal keeper
        $("#kora").animate({top : "35.5%" , left: "+=1.5%"},100);
        test=1;
		$("#shoot").css("display","none"); 
		$("#again").css("display","block");
		player=1;
		GoalOrNot(player);
    }
}
function playAgain(){
        $("#kora").animate({top : "80%" , left: "47%"},100);
        $("#ares").css({"transform":"rotate(0)"},100);
        $("#ares").animate({top : "48%", left: "43%"},100);
		$("#again").css("display","none"); 
		$("#shoot").css("display","block");
		test = 0;
}     


     
function mover() //The goal keeper goes right
{             
	$("#ares").css({"transform":"rotate(25deg)"},100);
    $("#ares").animate({top : "-=75px", left: "820px"},100);
}
function movel() //The goal keeper goes left
{
	$("#ares").css({"transform":"rotate(-25deg)"},100);
    $("#ares").animate({top : "-=75px", left: "-=215px"},100);
}
       
function movec(){ //The goal keeper goes center  
    $("#ares").animate({top : "-=75px"},100);
}
      
// Put the 3 functions of the goal keeper in array of function 
var array_o = [
    mover,
    movec,
    movel  
]
//Random Function
function btn_click() {
    var num = Math.floor((Math.random() * 3));
    array_o[num]('a string');
	return num;
}
     
var x=array_o[0];
var y=array_o[1];
var z=array_o[2];
