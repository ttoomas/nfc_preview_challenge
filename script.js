document.addEventListener("DOMContentLoaded", function(){
	var item__create = document.querySelector(".item__create")
	var text__name = document.querySelector(".create__text__name");

	text__name.addEventListener("mouseenter", function (e){
		item__create.classList.add("active");
	})
	text__name.addEventListener("mouseleave", function(){
		item__create.classList.remove("active");
	})
})