console.log("javascript is linked up");

(function(){
	"use strict";
	console.log("fired")

	const button = document.querySelector("#button");
	const burgerCon = document.querySelector("#burgerCon")

	function hambergerMenu(){
		button.classList.toggle("expanded");
		// This checks to see if there is a class of expanded. If class is not there it will add. if class is there then it will remove.
	
		burgerCon.classList.toggle("slideToggle");
		// Checks to see if there is a class of slideToggle. If class is not there it will add it, if class is there it will remove it.
	}


	button.addEventListener("click", hambergerMenu);
		
})();