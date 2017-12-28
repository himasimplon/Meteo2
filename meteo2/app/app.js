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
				$('#error').show();
			},
		});
	}else{
		$("#error").show();
	}
}	
	function show(data){
		return '<div class="info">Ciel : '+data.weather[0].description+'</div>' +
			   '<div class="info">Humiditée : '+data.main.humidity+'</div>' +
			   '<div class="info">Température min. : '+data.main.temp_min+'</div>' +
			   '<div class="info">Température max. : '+data.main.temp_max+'</div>'
	};


})();