function helloWorld(){
    alert("Hello, world!");
}

function makeBig(){
    document.getElementById("inputText").style.fontSize = "24";
}

function style(){
    document.getElementById("inputText").style.fontWeight = "bold";
    document.getElementById("inputText").style.color = "blue";
    document.getElementById("inputText").style.textDecoration = "underline";
}

function rest(){
    document.getElementById("inputText").style = "";
}

function MOOStyling(){
    document.getElementById("inputText").value.toUpperCase();
}
