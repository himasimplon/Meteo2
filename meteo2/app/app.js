(function main(){
	$('#error').hide();
	$('.submitWeather').on('click',function(){
		getJqAjax();
	})
function getJqAjax(){
	var city = $('#city').val();


	if(city != ''){
		$.ajax({
			url: 'http://api.openweathermap.org/data/2.5/weather?q='+city+"&lang=fr"+"&units=metric"+"&appid=5fe735476d87c79b7f242f8f480d72a0",
			datatype:'json',
			success: function(data){
				var widget = show(data);
				$("#show").html(widget);
				$('#city').val('');
				$('#error').hide();
			},
			error: function(){
				return '<div>Cette ville n\'existe pas!</div>'
			},
		});
	}else{
		$("#error").show();
	}
}	
	function show(data){
		return '<div class="info">Ciel: <img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png"> ' + data.weather[0].description + "</div>" +
			   '<div class="info">Température min. : '+data.main.temp_min+'</div>' +
			   '<div class="info">Température max. : '+data.main.temp_max+'</div>'
	};

	// function placeholder(){
	// 	$(document).ready(function(){
	// 	console.log("hello")
 //   			$(this).attr("placeholder",'')
	// 	});

	// };

	// $('#city').on('click', function(){
	// 	placeholder();
	// });

})();