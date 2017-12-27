(function main(){
	$('#submitWeather').on('click',function(){
	//getJson();
	getJqAjax();
})
function getJqAjax(){
	var city = $('#city').val();
	if(city != ''){
		$.ajax({
			url: 'http://api.openweathermap.org/data/2.5/weather?q='+city+"&units=metric"+"&appid=5fe735476d87c79b7f242f8f480d72a0",
			datatype:'json',
			success: function(data){
				var widget = show(data);
				$("#show").html(widget);
				$('#city').val('');
			}
		});
	}else{
		$("#error").html('Field cannot be empty');
	}
}	
	function show(data){
		return "<div>Ciel : "+data.weather[0].description+"</div>" +
			   "<div>Humiditée : "+data.main.humidity+"</div>" +
			   "<div>Température min. : "+data.main.temp_min+"</div>" +
			   "<div>Température max. : "+data.main.temp_max+"</div>"
	};


})();