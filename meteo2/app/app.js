// $(document).ready(function(){

// 	$("#submitWeather").click(function(){
// 		var city = $("#city").val();
// 		console.log(city);
// 		// if(city != ''){
// 			$.ajax({
// 				url: "http://api.openweathermap.org/data/2.5/weather?lat=44.5&units=metric&lon=2.58&APPID=6b0093ca3ed371f163ae90b3957b8b98", dataType: 'json',
// 				succes: function(data){
// 					console.log(data);
// 				},
// 				error: function(){
// 					console.log("error");
// 				}
// 			});
// 		// }else{
// 			//$("#error").html('Field cannot be empty')
// 		// }
// 	});

// });



(function main(){
	var xhr=createXHR();	
	$('#submitWeather').on('click',function(){
	//getJson();
	getJqAjax();
})
function getJqAjax(){
	var city = $('#city').val();
	if(city != ''){
		$.ajax({
			url: 'http://api.openweathermap.org/data/2.5/weather?q='+city+"&units=metric"+"&lang=fr"+"&APPID=fa23699725f4880f535416fdefe45b42",
			datatype:'json',
			success: function(data){
				$("#error").html('');
				console.log("success");
				console.log(data)
			}, error : function(){
				$("#error").html('City not listed');
			}
		});
	}else{
		$("#error").html('Field cannot be empty');
	}
}

function createXHR(){

    var request = false;
        try{
            request = new ActiveXObject('Msxml2.XMLHTTP');
        }catch(err2){
            
            try{
                request = new ActiveXObject('Microsoft.XMLHTTP');
            }catch(err3){
				
				try{
					request = new XMLHttpRequest();
				}catch(err1){
					request = false;
				}
            }
        }
    return request;
}
})();