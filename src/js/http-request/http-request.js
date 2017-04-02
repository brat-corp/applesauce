class HttpRequest {
	
	constructor() {}

	// url: URL to use for GET request
	// callback: accepts the response text as a parameter
	get(url, callback) {
		let xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.onreadystatechange = function() {
		  if (xhr.readyState == 4) {
		    if (!!callback) {
		    	callback(xhr.responseText);
		    } 
		  }
		}
		xhr.send();
	}

}