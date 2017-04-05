let dictionary = new Dictionary();
let httpRequest = new HttpRequest();
//(Math.random() * (max - min) + min)
let interval = (Math.random() * (10000 - 5000)) + 5000;

let logRequests = false;

function toggleLogRequests() {
    logRequests = !logRequests;
    console.log("Logging " + (logRequests ? "Enabled" : "Disabled"));
}

function getLogRequests() {
    return logRequests;
}

window.setInterval(function () {
    let url = dictionary.randomUrl;
    httpRequest.get(url);
    if (logRequests) {
        console.log(url);
    }
}, interval);