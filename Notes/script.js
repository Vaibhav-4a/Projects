const body = document.getElementById("body");

function deleted(){
    p.style.display = "none";
}

function showNotes(){
    body.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
    localStorage.setItem("notes",body.innerHTML);
}

function note(){
    const p = document.createElement("p");
    const img= document.createElement("img");
    img.src = "trash.png";
    p.contentEditable = "true";
    p.classList = "text-box";
    body.appendChild(p);
    p.appendChild(img);
    console.log("Working");
}
body.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        const notes = document.querySelectorAll(".text-box");
        notes.forEach(nt=>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})