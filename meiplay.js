let videoContainer = document.getElementById("img3-container")

document.getElementById("watch").addEventListener("click", () => {
    console.log("apple")
    videoContainer.innerHTML = '<iframe width="1200" height="700" src="https://www.youtube.com/embed/c-I5S_zTwAc?si=BRmPf9y7WUN0zILV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'


}) 


let menuScreen = document.getElementById("menubar-options")

let crossButton = document.getElementById("cross-mark")




document.getElementById("menu-button").addEventListener("click", () => {
    console.log("berries")
    
    menuScreen.style.display = "block"



})

crossButton.addEventListener("click", () =>  {
    menuScreen.style.display = "none"

})
