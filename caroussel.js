window.onload = function(){
	var myIndex = 4;
	
	caroussel();
	
	function caroussel(){
		var slides = document.getElementsByClassName("marqueeSlide");
			for (var i = 0; i < slides.length; i++){
				slides[myIndex-1].style.display="none";  	 	
			}
			myIndex++;
			if (myIndex > slides.length){
				myIndex = 1;
			}
			slides[myIndex-1].style.display="block";  
		setTimeout(caroussel, 3500); 	
	}   	
};	
