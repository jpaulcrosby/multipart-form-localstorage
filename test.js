if (localStorage) {
    localStorage.setItem("support", "yes");
    document.getElementById("appendHere").innerHTML = localStorage.getItem("support");
} else {
    errorMessage = '<span class="notify">Your browser does not support localStorage. Please switch to a browser that does.</span>';
    document.getElementById("appendHere").innerHTML = errorMessage;
}
