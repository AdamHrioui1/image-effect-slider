const handle = document.getElementById("handle");
const img2 = document.getElementById("img2");

handle.addEventListener("mousemove", e => {
    img2.style.left = e.clientX + "px";
    handle.style.left = e.clientX + "px";
    handle.style.top = e.clientY + "px";
})