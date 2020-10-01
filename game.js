console.log("connected");

var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var start=document.querySelector("#start");
var re=document.querySelector("#reset");

var c1=document.querySelector(".c1");
var c2=document.querySelector(".c2");
var c3=document.querySelector(".c3");
var c4=document.querySelector(".c4");
var c5=document.querySelector(".c5");
var c6=document.querySelector(".c6");
var c7=document.querySelector(".c7");
var c8=document.querySelector(".c8");
var c9=document.querySelector(".c9");

var c=document.querySelectorAll(".c");
setDisable(c);
var cell_parent=document.querySelector(".cell");


var s1=document.querySelector("#s1");
var s2=document.querySelector("#s2");
var s3=document.querySelector("#s3");
var s4=document.querySelector("#s4");
var s5=document.querySelector("#s5");
var s6=document.querySelector("#s6");
var s7=document.querySelector("#s7");
var s8=document.querySelector("#s8");
var s9=document.querySelector("#s9");


var o=document.querySelector("#o");
var arr=["nil","nil","nil","nil","nil","nil","nil","nil","nil"];

var stat;
var player1;
var player2;
var toss;

var p1choice;
var p2choice;
var choice;

var cell;
var res;
var used_cell=new Array(9);
var last_used=null;

p1.disabled=true;
p2.disabled=true;
re.disabled=true;  //inital stage;

function nilCheck(a){
	for(var i=0;i<a.length;i++)
	{
		if(a[i]==="nil"){return true;}
	}
return false;
} 



function winCheck(a){
			
		if(a[0]===a[1]&&a[1]===a[2]&&a[0]!=="nil"){
			if(a[0]===p1choice){
			return "Player1";}
			else{ return "Player2";}
		}
		else if(a[3]===a[4]&&a[4]===a[5]&&a[3]!=="nil")
		{
			if(a[3]===p1choice){
			return "Player1";}
			else{ return "Player2";}
		}
	else if(a[6]===a[7]&&a[7]===a[8]&&a[6]!=="nil")
	{
		if(a[6]===p1choice){
			return "Player1";}
			else{ return "Player2";}
	}
	
	else if(a[0]===a[3]&&a[3]===a[6]&&a[0]!=="nil")
	{
		
		if(a[6]===p1choice){
			return "Player1";}
			else{ return "Player2";}
		
	}
	else if(a[1]===a[4]&&a[4]===a[7]&&a[1]!=="nil")
	{
		if(a[1]===p1choice){
			return "Player1";}
			else{ return "Player2";}
	}
	else if(a[2]===a[5]&&a[5]===a[8]&&a[2]!=="nil")
	{
		if(a[6]===p1choice){
			return "Player1";}
			else{ return "Player2";}
	}
	
	else if(a[0]===a[4]&&a[4]===a[8]&&a[0]!=="nil")
	{
		if(a[0]===p1choice){
			return "Player1";}
			else{ return "Player2";}
	}
	
	else if(a[2]===a[4]&&a[4]===a[6]&&a[2]!=="nil")
	{
		if(a[6]===p1choice){
			return "Player1";}
			else{ return "Player2";}
	}
	

else if (nilCheck(arr)===false)
{
	   return "Match Tied";	
}
else{
	
return "no";
}
}




function setMark(name,choice)
{
	choice=prompt(name+" enter your choice (X or O): ");
	
    choice=choice.toUpperCase();
	return choice;
}



function restart(){
	var wish=confirm("Do you wish to restart the game?");
	if(wish){
		document.location.reload(true);
	}
}

start.addEventListener("click",function(){
	
player1=prompt("Hey! Player one name please:");
player2=prompt("Hey! Player two name please:");

document.querySelector("#p1m").textContent=player1;
document.querySelector("#p2m").textContent=player2;	

toss=Math.floor(Math.random() * 2) + 1;	

if(toss===1){ stat="p1";
console.log(stat);
alert(player1+" will begain.");
p1choice= setMark(player1);
		
if(p1choice==='X'){
			p2choice='O';
			
		}
		else{
			p2choice='X';
		}
alert(player1+" choosed: "+p1choice+" " +player2+" : "+p2choice);
	
document.querySelector("#p1c").textContent=p1choice;
document.querySelector("#p2c").textContent=p2choice;
	
p1.disabled=false;
}
	
else{stat="p2";
console.log(stat);
alert(player2+" will begain");
p2choice=setMark(player2);
		
if(p2choice==='X'){
			p1choice='O';
		}
		else{
			p1choice='X';
		}
alert(player2+" choosed: "+p2choice+" "+player1+" : "+p1choice);
		
document.querySelector("#p1c").textContent=p1choice;
document.querySelector("#p2c").textContent=p2choice;
p2.disabled=false;
}
		
start.disabled=true;
re.disabled=false;
});

function setEnableAll(c)
{
	
	for(var i=0;i<c.length;i++)
	{
		c[i].disabled=false;
	}
}





function setDisable(array){
	if(array.length===0){
		return;
	}
	for(var i=0;i<array.length;i++)
	{
		array[i].disabled=true;
	}
}



function setCell(choice){
	

c1.addEventListener("click",function()
{   
	
	cell=1;
	o.textContent=cell;
	s1.textContent=choice
	arr[0]=choice;
	
	setDisable(c);
	return c1;
});

c2.addEventListener("click",function(){
    
	
	cell=2;
	arr[1]=choice;
	o.textContent=cell;
	s2.textContent=choice;
	used_cell.push(c2);
	setDisable(c);
	return c2;
});

c3.addEventListener("click",function(){
	
	
	cell=3;
	arr[2]=choice;
o.textContent=cell;
s3.textContent=choice;

setDisable(c);
return c3;

});	


c4.addEventListener("click",function(){
 

cell=4;
arr[3]=choice;
o.textContent=cell;
s4.textContent=choice;

setDisable(c);
return c4;

});

c5.addEventListener("click",function()
{ 
	
	cell=5;
	o.textContent=cell;
    arr[4]=choice;
	s5.textContent=choice;
	
	setDisable(c);
	return c5;
});

c6.addEventListener("click",function(){
 

cell=6;
o.textContent=cell;
arr[5]=choice;
s6.textContent=choice;

setDisable(c);
return c6;
	
	});

c7.addEventListener("click",function(){ 


cell=7;
o.textContent=cell;
arr[6]=choice;
s7.textContent=choice;

setDisable(c);
return c7;	});

c8.addEventListener("click",function(){


cell=8;
o.textContent=cell;
s8.textContent=choice;
arr[7]=choice;

setDisable(c);
return c8;
	});

c9.addEventListener("click",function(){


cell=9;
o.textContent=cell;
arr[8]=choice;
s9.textContent=choice;

setDisable(c);
return c9;

	});
}

function printwin(s){
	if(s==="Player1"){alert("Congratulations "+player1+" you have won");restart();}
	else if(s==="Player2")
	{alert("Congratulations "+player2+" you have won");
restart();}
else if(s==="Match Tied"){
	alert("Oops! Match Tied");
	restart();
}
else{
	alert("Game Crashed!!");
}
}

p1.addEventListener("click",function(){
	
	
	setEnableAll(c);
	
	res=winCheck(arr);
	if(res==="no"){
	last_used=setCell(p1choice);
	used_cell.push(last_used);
	p1.disabled=true;
	p2.disabled=false;
	}
else{
	printwin(res);
	}});

p2.addEventListener("click",function(){
	setEnableAll(c);
	
	res=winCheck(arr);
	if(res==="no"){
	last_used=setCell(p2choice);
	used_cell.push(last_used);
	p2.disabled=true;
	p1.disabled=false;
	}
else{
	printwin(res);
	}});
	
	
re.addEventListener("click",function(){
	
restart();	});
