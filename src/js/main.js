let dictionary = new Dictionary();
let httpRequest = new HttpRequest();

httpRequest.get(dictionary.randomUrl, function(o) {
    console.log(o)
});