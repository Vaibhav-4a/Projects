const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");
const label = document.getElementsByClassName(".label");

function addTask(){
    if (inputBox.value === ""){
        alert("Enter some value");
    }
    else{
        let item = document.createElement("li");
        listContainer.appendChild(item);
        item.innerText = inputBox.value;
        inputBox.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        item.appendChild(span);
    }
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

inputBox.addEventListener("keypress",function(e){
    if(e.key === "Enter"){
        addTask();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();