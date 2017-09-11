(function(){
	
	var logo = document.getElementById("logo");
	var ctx = logo.getContext("2d");

	ctx.beginPath();
	ctx.fillStyle="#fff";
	ctx.rect(0, 0, 200, 75);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle="red";
	ctx.font="bold 38px Arial";
	ctx.fillText("Truzillator", 10, 32);
	ctx.fill();
	ctx.closePath();
	
})();
