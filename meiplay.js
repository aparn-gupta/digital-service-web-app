

document.addEventListener('DOMContentLoaded', () => {
   
    

    const menuScreen = document.getElementById("menubar-options")
    const background1 = document.getElementById("background-img-1")
    const background2 = document.getElementById("background-img-2")
    const backButton = document.getElementById("slide-1")
    const forwardButton = document.getElementById("slide-2")

    menuScreen.style.display = "none"
    background2.style.display = "none"


    forwardButton.addEventListener('click', () => {
        background1.style.display = "none"
         background2.style.display = "block"
    })


    
    backButton.addEventListener('click', () => {
        background1.style.display = "block"
         background2.style.display = "none"
    })


    document.getElementById("menuu").addEventListener("click", () => {
    console.log("berries")
    
    menuScreen.style.display = "block"



})

    document.getElementById('cross-mark').addEventListener("click", () => {
    menuScreen.style.display = "none"



} )






    
    
} )



































let videoContainer = document.getElementById("video-container")
let imgContainer = document.getElementById("img3-container")
let closeButton = document.getElementById("close-btn")

videoContainer.style.display = "none"


document.getElementById("watch").addEventListener("click", () => {
    console.log("apple")
    videoContainer.style.display = "block"
    imgContainer.style.display = "none"
 
        

    })


    closeButton.addEventListener('click', () => {
        videoContainer.style.display = "none"
        imgContainer.style.display = "flex"
    
    })
    

    




























let menuScreen = document.getElementById("menubar-options")


document.getElementById("menu-button").addEventListener("click", () => {
    console.log("berries")
    
    menuScreen.style.display = "block"
})

document.getElementById("cross-mark").addEventListener("click", () =>  {
    menuScreen.style.display = "none"

})
