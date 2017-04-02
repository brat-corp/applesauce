let dictionary = new Dictionary();
let httpRequest = new HttpRequest();
//(Math.random() * (max - min) + min)
let interval = (Math.random() * (10000 - 5000)) + 5000;

window.setInterval(function() {
    let url = dictionary.randomUrl;

    httpRequest.get(url);
}, interval);