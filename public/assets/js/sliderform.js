var range_data;
$( document ).ready(function() {
	$("#rent").ionRangeSlider({
		hide_min_max: true,
		keyboard: true,
		min: 600,
		max: 2000,
		from: 600,
		to: 2000,
		type: 'double',
		step: 1,
		prefix: "$",
		grid: true
	});

	$("#homevalue").ionRangeSlider({
		hide_min_max: true,
		keyboard: true,
		min: 60000,
		max: 620000,
		from: 60000,
		to: 620000,
		type: 'double',
		step: 1,
		prefix: "$",
		grid: true
	});

	$("#family").ionRangeSlider({
		hide_min_max: true,
		keyboard: true,
		min: 0,
		max: 40,
		from: 0,
		to: 40,
		type: 'double',
		step: 1,
		postfix: "%",
		grid: true
	});

	$("#bus").ionRangeSlider({
		hide_min_max: true,
		keyboard: true,
		min: 0,
		max: 100,
		from: 0,
		to: 100,
		type: 'double',
		step: 1,
		postfix: "%",
		grid: true
	});

	$("#walk").ionRangeSlider({
		hide_min_max: true,
		keyboard: true,
		min: 0,
		max: 100,
		from: 0,
		to: 100,
		type: 'double',
		step: 1,
		grid: true
	});

	$("#hip").ionRangeSlider({
		hide_min_max: true,
		keyboard: true,
		min: 0,
		max: 100,
		from: 0,
		to: 100,
		type: 'double',
		step: 1,
		grid: true
	});
	$("#send").on('click', function(ev) {
		ev.preventDefault();
		var range_data = {
			rent: {
				min: $("#rent").data().from,
				max: $("#rent").data().to
			},
			homevalue: {
				min: $("#homevalue").data().from,
				max: $("#homevalue").data().to
			},
			family: {
				min: $("#family").data().from,
				max: $("#family").data().to
			},
			bus: {
				min: $("#bus").data().from,
				max: $("#bus").data().to
			},
			walk: {
				min: $("#walk").data().from,
				max: $("#walk").data().to
			},
			hip: {
				min: $("#hip").data().from,
				max: $("#hip").data().to
			}
		};
		$.ajax({
			method: "GET",
			url: "/getzips",
			data: range_data,
			contentType: "application/json"
		})
		.done(function( msg ) {
			$("#zipresult").html("");	
			msg.zips.forEach(function(z){
				$("#zipresult").append( "<p>"+z+"</p>" );
			});
			$('#myModal').modal('show');
		});
	});
});