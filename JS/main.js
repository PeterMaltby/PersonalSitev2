function isTouchDevice() {
    return 'ontouchstart' in document.documentElement;
}

$(document).ready(function(){

});

function copyEmail() {
    var copyText = document.createElement("textarea");
    copyText.value = "MY EMAIL!";
    copyText.setAttribute("readonly",'');
    copyText.style.position = "absolute";
    copyText.style.position = "-9999px";
    document.body.appendChild(copyText);
    copyText.select();
    copyText.setSelectionRange(0,99999);

    document.execCommand("copy");

    alert("email saved to clipboard.");

    document.body.removeChild(copyText);
}