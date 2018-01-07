var downloadButton = document.getElementById("btn_download");
downloadButton.removeAttribute("disabled");
var timerToRemove = document.getElementById("timeLeft");
var timerToRemoveParent = timerToRemove.parentElement;
timerToRemoveParent.removeChild(timerToRemove);