var x = document.getElementById("demo");
var curdate = new Intl.DateTimeFormat().resolvedOptions().timeZone;

function load1() {
    console.log("load1");
}

function showPosition() {
    x.innerHTML = curdate;
}

showPosition();
