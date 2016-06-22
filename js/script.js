$(document).ready(function(){
	$("#saveData")
			.click(function(e) {
				localStorage.setItem("flag", "set");
				
				// serializeArray is awesome and powerful
				var data = $("form").serializeArray();
				
				// iterate over results
				$.each(data, function(i, obj) {
					// HTML5 magic!!
					localStorage.setItem(obj.name, obj.value);
				});				
				
			});
	if (localStorage.getItem("flag") == "set") {
			
		$("form").before("<p id='message'>This form has saved data!</p>");
			var data = $("form").serializeArray();
			$.each(data, function(i, obj) {
				$("[name='" + obj.name +"']").val(localStorage.getItem(obj.name));
			});
		}
	if (window.location.pathname == "/Users/PaulCrosby/Desktop/git%20repos/multipart-form-localstorage/multipart-form-localstorage/serialized-data.html" && localStorage.getItem("flag") == "set") {
		
			for (var i = 0; i <= localStorage.length; i++) {
				$("#showLocalstorage").append("<h1>" + window.localStorage.key(i) + ": " + window.localStorage.getItem(localStorage.key(i)) + "</h1>");
			}
		
	};
});