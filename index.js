const draggables = document.querySelectorAll(".draggable");
const dropBoxes = document.querySelectorAll(".dropbox")

draggables.forEach(draggable =>{
    draggable.addEventListener("dragstart", ()=>{
        draggable.classList.add("dragging");
    })

    draggable.addEventListener("dragend",()=>{
        draggable.classList.remove("dragging");
    })
})

dropBoxes.forEach(dropbox =>{
    dropbox.addEventListener("dragover", (e)=>{
        e.preventDefault();
        const afterElememt = dropAfterDraggable(dropbox,e.clientY)
        const draggable = document.querySelector(".dragging")
        if (afterElememt == null) {
            dropbox.appendChild(draggable);
        }else{
            dropbox.insertBefore(draggable,afterElememt)
        }
    })
})

function dropAfterDraggable(dropbox, y){
    const elements = [...dropbox.querySelectorAll(".draggable:not(.dragging)")]

    return elements.reduce((nearest,child)=>{
        const box = child.getBoundingClientRect(); 
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > nearest.offset) {
            return {offset: offset, element: child}
        }
        else{
            return nearest;
        }

    }, {offset: Number.NEGATIVE_INFINITY } ).element
}