$(".Submenu").click(function() {
	$(this).children("ul").slideToggle();
})

$("ul").click(function(P) {
	P.stopProgration();
})