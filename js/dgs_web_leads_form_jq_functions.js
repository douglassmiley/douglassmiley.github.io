/*
Author: Douglas G Smiley
*/
$(document).ready(
	function () {
		$("#accordion").accordion({
		event: 'mouseover',
				autoHeight: false, 
			});
		$(".draggable").draggable();
		
	});