(function main(){
	$('#error').hide();
	$('.submitWeather').on('click',function(){
		getJqAjax();
	})
	var map = L.map('map').setView([46.318392, 2.975921], 8);
	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'}).addTo(map);
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
				console.log(data);
				setmap(data.coord.lon,data.coord.lat);
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
		return '<div class="info">Coordonées : Lat '+data.coord.lat+', Lon '+data.coord.lon+'</div>'+
			   '<div class="info">Ciel : '+data.weather[0].description+'</div>' +
			   '<div class="info">Vent : '+data.wind.speed+' Km/h</div>'+
			   '<div class="info">Humiditée : '+data.main.humidity+'</div>' +
			   '<div class="info">Température. :'+data.main.temp+'</div>' +
			   '<div class="info">Température min. : '+data.main.temp_min+'</div>' +
			   '<div class="info">Température max. : '+data.main.temp_max+'</div>' 

	};

	function setmap(x,y){
		map.setView([y, x],14)
	}


})();