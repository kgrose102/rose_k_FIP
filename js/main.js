(()=>{
	"use strict";
	console.log("fired")

	const button = document.querySelector("#button"),
		burgerCon = document.querySelector("#burgerCon"),
		beerName = document.querySelector("#beerName"),
		beerPic = document.querySelector('#beerPic'),
		beerTag = document.querySelector('#beerTag'),
		beerPara = document.querySelector('#beerPara'),
		beerSelector = document.querySelector('#beerSelector'),
		beerInfo = [['Baby-Dry','images/baby-dry.jpg', 'The Original','Our classic beer, The Baby-Dry Lager. Featuring a crisp light taste, and mild hoppy flavour, it pairs perfectly with any thing.'],
				['Baby-Pale','images/pale.jpg','Bright Ale','Our New medium bodied Baby-Pale was crafted for the Pale Ale lovers out there. Featuring notes of the hops, but also a delicate sweetness making for Baby-Pale one of the smoothest drink you can ever have.'],
				['Baby Imperial','images/imperial.jpg','Big and Bold','Our New Baby Imperial features a strong bold flavour which even the kings and queens of old would enjoy.']
			];

	function hambergerMenu(){
		button.classList.toggle("expanded");
		// This checks to see if there is a class of expanded. If class is not there it will add. if class is there then it will remove.
	
		burgerCon.classList.toggle("slideToggle");
		// Checks to see if there is a class of slideToggle. If class is not there it will add it, if class is there it will remove it.
	};

	function setInfo(name, image, tag, desc){
		beerName.textContent = name;
		let targeSource = image;
		beerPic.src = targeSource;
		beerTag.textContent = tag;
		beerPara.textContent = desc;
	};

	function changeBeer(event){
		setInfo(beerInfo[event.target.dataset.offset][0],beerInfo[event.target.dataset.offset][1],beerInfo[event.target.dataset.offset][2],beerInfo[event.target.dataset.offset][3])
	};


	button.addEventListener("click", hambergerMenu);
	beerSelector.addEventListener('click', changeBeer);

		
})();