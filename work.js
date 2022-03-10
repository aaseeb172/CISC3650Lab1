// creates close button for previous elements
var myNodelist = document.getElementsByTagName("LI");  
for(var i=0; i <myNodelist.length; i++) { 
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
// var input=document.getElementsById("add_Btn");
span.className = "close";
span.appendChild(txt);
myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    }
        }
// function to add new elements into our list with date and checkbox included
function newItem() {
    var li= document.createElement("li");
    var input=document.getElementById("Myinput").value;
    var include = document.createTextNode(input);
    li.innerHTML += "<input type = 'checkbox' id = 'checkbox' class='check'>";
    li.innerHTML += "<input type = 'date' id = 'date'>";
    li.appendChild(include);
   
    if(input == '') {
        alert("try again");
    
    }
    else {
        document.getElementById("list").appendChild(li);

    
    }
    // adds our close button as well to our new elements
    document.getElementById("Myinput").value="";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    } 
   
    }
    
}

