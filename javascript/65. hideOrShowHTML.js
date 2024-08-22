const hsButton = document.getElementById("hs");
const hbImg = document.getElementById("HBimg");

hsButton.addEventListener("click", event => {
    if(hbImg.style.visibility === "hidden") {
        hbImg.style.visibility = "visible";
        hsButton.textContent = "Hide";
    }
    else {
        hbImg.style.visibility = "hidden"; //hides the image, but still reserves its space, whereas "display: none" removes the image and its space too
        hsButton.textContent = "Show";
    }
});