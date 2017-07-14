	

function move(value,militime){
	//data elements
	var id ;
	var initialPosition;
	var finalPosition;
	var delta ;
	var element= document.getElementById(value);
	//end of data elements
	window.addEventListener('wheel',stop);
	initialPosition = window.scrollY;
	finalPosition = element.offsetTop;
	console.log(finalPosition);
	delta = (finalPosition - initialPosition)/50;
	if(delta>0)
		id = setInterval(moveTop,militime)
	if(delta<0)
		id = setInterval(moveBottom,militime);


		// function to move
		function moveTop(){	
			initialPosition = initialPosition + delta;
			if(initialPosition<finalPosition){
				window.scrollTo(0,initialPosition);	
			}	
			else{
			clearInterval(id);
			}
		}

		function moveBottom(){
			initialPosition = initialPosition + delta;
			if(initialPosition>finalPosition){
				window.scrollTo(0,initialPosition);
			}
			else{
				clearInterval(id);
			}
		}

		function stop(){
			if(id!=null){
				clearInterval(id);
			}
		}
}


