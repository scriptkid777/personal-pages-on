$(document).ready(function(){

	var slideIndex = 0;
	showPhotos();

	function showPhotos(){
		var i;
		var slides = $('.instafeed a');

		for ( i = 0; i < slides.length; i++) {
		
			$(slides[i]).hide();
		}


		slideIndex++;

	

		if (slideIndex > slides.length) {
			slideIndex = 1;
		}

		$(slides[slideIndex-1]).show();

		setTimeout(showPhotos, 800);

		
	}
	
});		