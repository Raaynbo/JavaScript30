function handleToggle(e){
    this.classList.toggle("open");
}

function toggleActive(e){
    console.log(e.propertyName);
    if (e.propertyName != "flex-grow"){
        this.classList.toggle("open-active")
    }
}
const panels = document.querySelectorAll(".panel");
console.log(panels)
panels.forEach(panel => panel.addEventListener("click", handleToggle));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));

