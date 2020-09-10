function runExample3() {
    $("#custom-places").mapsed({
		showOnLoad: 	
		[
			// Random made up CUSTOM place
			{
				// flag that this place should have the tooltip shown when the map is first loaded
				autoShow: true,
				lat: 77.5011,
				lng:27.2038 ,
				name: "aucivil",
				street: "Andhra university",
				userData: 99
			}

		]
		
	});									
}


$(document).ready(function() {
	runExample3();
});


