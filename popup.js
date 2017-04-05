let bgPage = chrome.extension.getBackgroundPage();
let logRequests = localStorage.getItem("logRequests");

if(logRequests === "true" || bgPage.getLogRequests() == "true"){
    document.getElementById("checkbox").checked = true;
}else{
    document.getElementById("checkbox").checked = false;
}

function toggle(){
    bgPage.toggleLogRequests();
    localStorage.setItem("logRequests", bgPage.getLogRequests());
}

document.getElementById("checkbox").onclick = toggle;