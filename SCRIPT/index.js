var content = true;
function showContent () {
    if (content == true) {
        document.getElementById("content").style.height = "0";
        content = false;
    }
    else {
        document.getElementById("content").style.height = "1350px";
        content = true;
    }
}

function normal() {
    document.getElementById("body").style.background = "#edeadb";
    document.getElementById("content").style.color = "black";
}

function night() {
    document.getElementById("body").style.background = "#1b262c";
    document.getElementById("content").style.color = "#b8d7ec";
}

function sakura() {
    document.getElementById("body").style.background = "pink";
    document.getElementById("content").style.color = "white";
}
