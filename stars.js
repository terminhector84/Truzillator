(function(){
	
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	
	var stars = [];
	var speed = 1;
	var size = 1;
	var Cwidth = canvas.width;
	var centerX = Cwidth/2;
	var centerY = canvas.height/2;
	
	for( var i = 0; i < 110; i++){
		stars[i] = new Star();
	}
	
	function Star(){
		this.x = Math.random() * Cwidth;
		this.y = Math.random() * canvas.height;
		this.z = Math.random() * Cwidth;
		
		this.move = function(){
			this.z = this.z - speed;
			if( this.z <= 0){
				this.z = Cwidth;
			}
		}
		
		this.show = function(){
			var x, y, s;
	
		x = (this.x - centerX) * (Cwidth/this.z);
		x = x + centerX;
	
		y = (this.y - centerY) * (Cwidth/this.z);
		y = y + centerY;
	
		s = size * (Cwidth/this.z);
	
		ctx.beginPath();
		ctx.fillStyle = "#fff";
		ctx.arc(x, y, s, 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();

		}
	}
	
	function draw(){
		ctx.fillStyle= "rgb(0,0,0)";
		ctx.fillRect(0, 0, Cwidth, canvas.height);
		
	for( var i = 0; i < 110; i++){
		stars[i].show();
		stars[i].move()
		}
		ctx.fill();
	}
	
	function update(){
		draw();	
		
		ctx.beginPath();
		ctx.fillStyle="red";
		ctx.textAlign="left";
		ctx.font="bold 42px Arial";
		ctx.fillText("Truzillator",55, 42);
		ctx.fill();
		ctx.closePath();
		
		ctx.beginPath();
		ctx.fillStyle="rgba(255,255, 255, 0.75)";
		ctx.globalAlpha =1;
		ctx.fillRect(0,75, 340, 80);
		ctx.fill();
		ctx.closePath();
			
		ctx.beginPath();
		ctx.fillStyle="#000";
		ctx.textAlign="center";
		ctx.font= "bolder 16px Arial";
		ctx.fillText("You don't Have to Travel Far ",160, 90);
		ctx.fillText("to Find Your",160, 109);
		ctx.fill();
		ctx.closePath();
	
		ctx.beginPath();
		ctx.fillStyle="red";
		ctx.textAlign="left";
		ctx.font="bold 20px Arial";
		ctx.fillText("Ideal Home",110, 132);
		ctx.fill();
		ctx.closePath();
		
		window.requestAnimationFrame(update);
	}
	
	update();
	
})();