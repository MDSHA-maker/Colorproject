var colors=generateRandomColors(6)
var pickedcolor=pickcolor()
var resetbutton=document.querySelector("#reset")
var squares=document.querySelectorAll(".square")
var colordisplay=document.getElementById("colorDisplay")
var messagedisplay=document.querySelector("#message")
var head=document.querySelector("h1");
colordisplay.textContent=pickedcolor;
for (var i=0;i<squares.length;i++)
{

	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function()
	{     
        colordisplay.textContent=this.style.background;
     if(this.style.background===pickedcolor)
		  {messagedisplay.textContent="your right";
		  head.style.background=pickedcolor;
		changecolors(pickedcolor);}
		  else{
			  this.style.background="black";
			  messagedisplay.textContent="Try again";

		  }
	})
}
function changecolors(color){

	for(var i=0;i<squares.length;i++)
		{
     squares[i].style.background=color;
		}
}
function pickcolor()
{
 var random=Math.floor((Math.random()*colors.length))
return colors[random];

}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}
function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
resetbutton.addEventListener("click",function()
{colors=generateRandomColors(6);
	pickedcolor=pickcolor();
colordisplay.textContent=pickedcolor;
for (var i=0;i<squares.length;i++)
{

	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function()
	{     
        colordisplay.textContent=this.style.background;
     if(this.style.background===pickedcolor)
		  {messagedisplay.textContent="your right";
		  head.style.background=pickedcolor;
		changecolors(pickedcolor);}
		  else{
			  this.style.background="black";
			  messagedisplay.textContent="Try again";

		  }
	})
}
})