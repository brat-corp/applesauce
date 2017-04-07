let dictionary = new Dictionary();
let httpRequest = new HttpRequest();
//(Math.random() * (max - min) + min)
let interval = (Math.random() * (10000 - 5000)) + 5000;
let logRequests = localStorage.getItem("logRequests");
let isOffline = false;

function toggleLogRequests() {
    logRequests = !logRequests;
    console.log("Logging " + (logRequests ? "Enabled" : "Disabled"));
}

function getLogRequests() {
    return logRequests;
}

window.setInterval(function () {
    if (navigator.onLine) {
        isOffline = false;
        let url = dictionary.randomUrl;
        httpRequest.get(url);
        if (logRequests) {
            console.log(url);
        }
    }else{
        if(!isOffline){
            console.log("No Internet Connection");
        }
        isOffline = true;
    }
}, interval);