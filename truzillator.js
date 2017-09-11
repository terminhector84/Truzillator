(function(){	
	
	//price dropbox elements
	var priceOne = document.getElementsByClassName("priceLeft");//for price input
	var priceTwo = document.getElementsByClassName("priceRight");//for price input
	var inputOne = document.getElementById("inputOne");//for price input
	var inputTwo = document.getElementById("inputTwo");//for price input
	
	//property, room, bathroom list elements
	var selectProperty = document.getElementsByClassName("selectProp");
	var roomNum = document.getElementsByClassName("roomNum");
	var bathroomNum = document.getElementsByClassName("bathroomNum");
	
	var filterText = document.getElementsByClassName("filterText");
	var numberOfRooms = document.getElementById("numOfRooms");
	var filterContainer = document.getElementById("filterT");
	var priceLength = priceOne.length;
	
	//close the add Bannner
	var closeMe = document.getElementById("closeMe");
	closeMe.addEventListener("click", function(){
		document.getElementById("canvas").style.display = "none";
		closeMe.style.display="none";
	});

//create flashing animation container	
function steps(stepNum, id, display){
	var stepDiv = document.createElement("div");
	var step = document.createElement("p");
	var stepText = document.createTextNode("Step " + stepNum);
	step.appendChild(stepText);
	stepDiv.appendChild(step);
	stepDiv.className = "button";
	document.getElementById(id).appendChild(stepDiv);	
}
steps(1, "liOne");

//Real Estate Object
function RealEstate(type, price, rooms, bathrooms){
	this.listSize = 0;
    this.dataStore = [];
    this.add = add;
	this.length = length;
    this.type = type;
    this.price = price; 
    this.rooms = rooms;
    this.bathrooms = bathrooms;
    this.draw = draw;
    this.findIndex = findIndex;
	this.lengthUpdate = lengthUpdate;
	this.filter = filter;
}
	
function add(type, price, rooms, bathrooms){
	this.dataStore[this.listSize++] = [type, price, rooms, bathrooms];
}
	
function length(){
	return this.dataStore.length;
}

function draw(){
	var divie = document.createElement("div");
	var image = new Image(320, 215);
	
	if(this.dataStore[this.dataStore.length-1][0] === "House"){
		image.src = "images/house.jpg";
	}if(this.dataStore[this.dataStore.length-1][0] === "Condo"){
		image.src = "images/condo.jpg";
	}if(this.dataStore[this.dataStore.length-1][0] === "Town House"){
		image.src = "images/townHouse.jpg";
	}if(this.dataStore[this.dataStore.length-1][0] === "Co-op"){
		image.src = "images/co-op.jpg";
	}
		
	var p1 = document.createElement("p");
	var p2 = document.createElement("p");
	var p3 = document.createElement("p");
	var p4 = document.createElement("p");
		
	var text1 = document.createTextNode("Type " + this.dataStore[this.dataStore.length-1][0]);
	var text2 = document.createTextNode("Price $" + this.dataStore[this.dataStore.length-1][1] + "K");
	var text3 = document.createTextNode("Rooms " + this.dataStore[this.dataStore.length-1][2]);
	var text4 = document.createTextNode("Baths " + this.dataStore[this.dataStore.length-1][3]);
		
	p1.appendChild(text1);
	p2.appendChild(text2);
	p3.appendChild(text3);
	p4.appendChild(text4);
		
	var overlay = document.createElement("div");
	overlay.className = "overlay";
	overlay.appendChild(p1);
	overlay.appendChild(p2);
	overlay.appendChild(p3);
	overlay.appendChild(p4);
		
	divie.appendChild(image);
	divie.appendChild(overlay);
	
	divie.className= "divie";

	document.getElementById("main").appendChild(divie);
}
	
function findIndex(index, type){
	var temp = [];
		
	for(var i = 0; i < this.dataStore.length; i++){
		if(this.dataStore[i][index] === type) {
			temp.push(i);
		}	
	}
	return temp;
}	
	
function lengthUpdate(){
	var test = document.getElementsByClassName("divie");
	var nodes = Array.prototype.slice.call(test);

	var results = document.getElementById("results");
		
	var nodeLength = nodes.filter(function(node){
		return node.style.display !== "none";
	});
		
	if(nodeLength.length > 0){
		var stylish = document.getElementById("sectionOne").style;
		stylish.opacity = 1.0;
		stylish.visibility = "visible";
		results.textContent = nodeLength.length;	
	}
}
	
function filter(element){	
	var divie = document.getElementsByClassName("divie");
	if(this.cliked === true &&  divie[element].style.display === "block"){
		divie[element].style.display = "block"; 
		this.lengthUpdate();
	}else{
		divie[element].style.display = "none";
		this.lengthUpdate();
	}		
}
		
var property = new RealEstate();
	property.add("House", 350, 4, 3.5);
	property.draw("images/house.jpg");
	property.add("Condo", 250, 3, 3);
	property.draw("images/condo.jpg");
	property.add("Town House",250, 3, 3);
	property.draw("images/townHouse.jpg");
	property.add("Co-op",180, 2, 2 );
	property.draw("images/co-op.jpg");
	property.add("House", 320, 4, 3.5);
	property.draw("images/house.jpg");
	property.add("Condo", 200, 3, 3);
	property.draw("images/condo.jpg");
	property.add("Town House", 190, 2, 2);
	property.draw("images/townHouse.jpg");
	property.add("Co-op", 200, 2, 2);
	property.draw("images/co-op.jpg");
	property.add("House", 300, 4, 3.5);
	property.draw("images/house.jpg");
	property.add("Condo",180, 1, 1);
	property.draw("images/condo.jpg");
	property.add("Town House",150, 1, 1);
	property.draw("images/townHouse.jpg");
	property.add("Co-op",110, 1, 1);
	property.draw("images/co-op.jpg");
	
	
function displayToggle(index, element){	
	var divie = document.getElementsByClassName("divie");
	var house = 0;
	if(selectProperty[index].checked || selectProperty[0].checked){
		if(selectProperty[0].checked){
			filterText[0].textContent = "Type: Multiple";
		}else{
			filterText[0].textContent = "Type: " + property.dataStore[index-1][0];
				//count how many checkboxes have been checked
				//this value will be used to display multiple if more than one
				//property has been checked
			   for(var i = 0; i < selectProperty.length; i++) {       
					if(selectProperty[i].type == "checkbox" &&
					selectProperty[i].checked == true){
						house++;
					}
				}
		if(house > 1){
			filterText[0].textContent = "Type: Multiple";
		}	
		}
		
		divie[element].style.display = "block"; 
		property.lengthUpdate();
	}else{
		divie[element].style.display = "none"; 
		property.lengthUpdate();
	}		
}

//Properties filter starts here
function propertyFilter(){
	
	var house = property.findIndex(0, "House");
	var condo = property.findIndex(0, "Condo");
	var townHouse = property.findIndex(0, "Town House");
	var co_op = property.findIndex(0, "Co-op");
	
	var divie = document.getElementsByClassName("divie");
	
	for(var i = 0; i < selectProperty.length; i++){
		selectProperty[i].addEventListener("change", function(e){
			steps(2, "liTwo");	
			
		house.forEach(function (element){
			displayToggle(1,element);
		});
		condo.forEach(function (element){
			displayToggle(2, element);
		});
		townHouse.forEach(function (element){
			displayToggle(3, element);
		});
		co_op.forEach(function (element){
			displayToggle(4, element);
		});
		
	});	
	}	
}
//property function ends here

propertyFilter();

//set number input focus function starts here
function rowFocus(){

	//place the focus on the clicked item
	inputOne.addEventListener("focus", function(){
		if(document.activeElement === inputOne){	
			if(!(priceLeftie.classList.contains("priceShow"))){
				priceLeftie.classList.add("priceShow");
				priceRightie.classList.remove("priceShow");
			}
		}			
	});
					
	inputTwo.addEventListener("focus", function(){
		if(document.activeElement === inputTwo){
			if(!(priceRightie.classList.contains("priceShow"))){
				priceRightie.classList.add("priceShow");
				priceLeftie.classList.remove("priceShow");
			}
		}
	});
		
	
}
//input focus function ends here

rowFocus();

//first price filter starts here
function priceFirst(){
	
	var oneTen = property.findIndex(1, 110);
	var oneFifty = property.findIndex(1, 150);
	var oneEighty = property.findIndex(1, 180);
	var oneNinety = property.findIndex(1, 190);
	var twoHundred = property.findIndex(1, 200);
	var twoFifty = property.findIndex(1, 250);
	
	//loop through prices ranges and hide containers that are
	//lower than the range clicked
	for ( var x = 0; x < 5; x++){
		priceOne[x].addEventListener("click", function(e){
		
		//show step 3 animation
		steps(3, "liThree");
		
		var precio = e.target.innerHTML;
		var precioArr = precio.split("");
		var finPrice;
		
		//remove dollar sign and letter "K" from each list value
		if(precio[0] =="$"){
			var processedPrice;
			precioArr.shift();
			precioArr.pop();
			processedPrice = precioArr.join("");
			finPrice = parseInt(processedPrice);
		}
		if(finPrice == 50){
			inputOne.value = 50000;
			filterText[1].textContent = "From: $50K";
		}
		if(finPrice == 100){
			inputOne.value = 100000;
			filterText[1].textContent = "From: $100K";
		}

		oneTen.forEach(function(element){
			if(finPrice == 150 || finPrice == 180 || finPrice == 190 || finPrice == 200 || finPrice == 250){
				inputOne.value = 150000;
				property.filter(element);
				filterText[1].textContent = "From: $150K";
			}
		});
		oneFifty.forEach(function(element){
			if(finPrice == 180 || finPrice == 190 || finPrice == 200 || finPrice == 250){
				inputOne.value = 200000;
				property.filter(element);
				filterText[1].textContent = "From: $150K";
			}
		});
		oneEighty.forEach(function(element){
			if(finPrice == 190 || finPrice == 200 || finPrice == 250){
				inputOne.value = 200000;
				property.filter(element);
				filterText[1].textContent = "From: $180K";
			}
		});
		oneNinety.forEach(function(element){
			if(finPrice == 200 || finPrice == 250){
				property.filter(element);
				filterText[1].textContent = "From: $200K";
			}
		});
		twoHundred.forEach(function(element){
			if(finPrice == 250){
				property.filter(element);
				filterText[1].textContent = "From: $250K";
			}
		});
	});
	}		
}
//first price filter function ends here		

priceFirst();

//second price filter starts here
function priceSecond(){
	
	var threeHundred = property.findIndex(1, 300);
	var threeTwenty = property.findIndex(1, 320);
	var threeFifty = property.findIndex(1, 350);
			
	//loop through prices ranges and hide containers that are
	//lower than the range clicked 
	for ( var x = 0; x < 5; x++){
		priceTwo[x].addEventListener("click", function(e){
		//show step 3 animation
		steps(3, "liThree");
		
		var precio = e.target.innerHTML;
		var precioArr = precio.split("");
		var finPrice;
		
		//remove dollar sign and letter "K" from each list value
		if(precio[0] =="$"){	
		
			precioArr.shift();
			precioArr.pop();
			var processedPrice = precioArr.join("");
			finPrice = parseInt(processedPrice);
			
		}else if(precio[0] != "$"){
			var processo = precioArr.join("");
			finPrice = processo;
		}
		
		threeTwenty.forEach(function(element){
			if(finPrice == 300){
				filterText[2].textContent = "To: $300K";
				property.filter(element);
			}
		});	
		threeFifty.forEach(function(element){
			if(finPrice == 300 || finPrice == 320){
				inputTwo.value = 300000;
				filterText[2].textContent = "To: $300K";
				property.filter(element);
			}
		});
		if(finPrice == 350){
			inputTwo.value = 350000;
			filterText[2].textContent = "To: $350K";
		}
		if(finPrice == 400){
			inputTwo.value = 400000;
			filterText[2].textContent = "To: $400K";
		}if(finPrice == 450){
			inputTwo.value = 450000;
			filterText[2].textContent = "To: $450K";
		}if(finPrice == "Any Price"){
			inputTwo.value = 10000000;
			filterText[2].textContent = "To: $1MM";
			//don't do anything
		}	
	});
	}
}
//second price filter ends here

priceSecond();

//filter rooms function starts here
function filterRooms(){
	
	unoBed = property.findIndex(2, 1);
	dosBed = property.findIndex(2, 2);
	tresBed = property.findIndex(2, 3);
	cuatroBed = property.findIndex(2, 4);
		
	//loop through the list of rooms and 
	//determine which one was clicked
	for( var w = 0; w < roomNum.length; w++){
		roomNum[w].addEventListener("click", function(e){
			
		steps(4, "liFour");
			
		var room = e.currentTarget;
			
		if(room == roomNum[0]){
			filterText[3].textContent = "1+ Bedrooms";
		}if(room == roomNum[1]){
			unoBed.forEach(function(element){
				property.filter(element);	
			});
			filterText[3].textContent = "2+ Bedrooms";
		}if(room == roomNum[2]){
			unoBed.forEach(function(element){
				property.filter(element);	
			});
			dosBed.forEach(function(element){
				property.filter(element);	
			});
			filterText[3].textContent =  "3+ Bedrooms";
		}if(room == roomNum[3]){
			unoBed.forEach(function(element){
				property.filter(element);	
			});
			dosBed.forEach(function(element){
				property.filter(element);	
			});
			tresBed.forEach(function(element){
				property.filter(element);	
			});	
			filterText[3].textContent = "4+ Bedrooms";
		}
	});
}
}			
//filter rooms function ends here

filterRooms();

//filter baths fnction starts here
function filterBaths(){
	
	unoBath = property.findIndex(2, 1);
	dosBath = property.findIndex(2, 2);
	tresBath = property.findIndex(2, 3);
	tresAndHalf = property.findIndex(2, 4);
		
	//loop through the list of bathrooms and 
	//determine which one was clicked
	for(var j = 0; j< bathroomNum.length; j++){
	bathroomNum[j].addEventListener("click", function(e){
		
	var bath = e.currentTarget;
	
		if(e.currentTarget == bathroomNum[0]){
		filterText[4].textContent = "1+ bathrooms";
		}if( bath == bathroomNum[1]){
			unoBath.forEach(function(element){
				property.filter(element);		
			});
		filterText[4].textContent = "2+ bathrooms";	
		}if(bath == bathroomNum[2]){
			unoBath.forEach(function(element){
				property.filter(element);	
			});
			dosBath.forEach(function(element){
				property.filter(element);	
			});
		filterText[4].textContent = "3+ Bathrooms";
		}if(bath == bathroomNum[3]){
			unoBath.forEach(function(element){
				property.filter(element);	
			});
			dosBath.forEach(function(element){
				property.filter(element);	
			});
			tresBath.forEach(function(element){
				property.filter(element);	
			});
		filterText[4].textContent = "3.5+ Bathrooms";
		}	
	});
	}
}			
//filter bathrooms function ends here

filterBaths();

//clear filter function starts here
function clear(){
	
	var clearFilter = document.getElementById("clearFilter");
	
	clearFilter.addEventListener("click", function(){
	
	//display all of the property containers
		
		var divie = document.getElementsByClassName("divie");
		
			for (var i = 0; i < divie.length; i++){
				divie[i].style.display = "block";
			}
		//hide results buttons
		var sectionOne = document.getElementById("sectionOne");
		sectionOne.style.opacity="0";
		sectionOne.style.visibility ="hidden";
	
		//reset the checkbox
		for(var i = 0; i < selectProperty.length; i++){
			if(selectProperty[i].checked){
				selectProperty[i].checked = false;
			}
		}
		//empty the list text content
		for(var i = 0; i < filterText.length-1; i++){
			filterText[i].textContent = "";
		}
	//set price to zero
		finPrice = "";
		inputOne.value = "";
		inputTwo.value="";
		bath="";
		room="";	
});
}
clear();
//clear filter function ends

})();