const draggables = document.querySelectorAll(".draggable");
const dropBoxes = document.querySelectorAll(".dropbox")


dropBoxes.forEach(dropbox =>{
    dropbox.addEventListener("dragover", (e)=>{
        e.preventDefault();
    })
})

draggables.forEach(draggable =>{
    draggable.addEventListener("dragstart", ()=>{
        draggable.classList.add("dragging");
    })

    draggable.addEventListener("dragend",()=>{
        draggable.classList.remove("dragging");
    })
})

dropBoxes.forEach(dropbox =>{
    dropbox.addEventListener("dragover", ()=>{
        const draggable = document.querySelector(".dragging")
        dropbox.appendChild(draggable);
    })
})