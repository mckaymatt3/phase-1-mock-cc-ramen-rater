// write your code here

// Define variables
let menuRamen = document.querySelector("#ramen-menu")
let detailsRamen = document.querySelector("#ramen-details")
let ramenName = document.querySelector("#ramen-name")
let resName = document.querySelector("#res-name")
let ratingRamen = document.querySelector("#rating-display")
let commentRamen = document.querySelector("#comment-display")
let picRamen = document.querySelector("#ramen-imguh")
let formRamen = document.querySelector("#new-ramen")
let newName = document.querySelector("#new-name")
let newRes = document.querySelector("#new-restaurant")
let newImg = document.querySelector("#new-image")
let newRtg = document.querySelector("#new-rating")
let newCmt = document.querySelector("#new-comment")
let newRamen = []
let newRamenUser;


// Add DOMContent Loaded
document.addEventListener("DOMContentLoaded", function () {
    init();
    addRamen();
})


// Add init
function init () {
    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then( function (ramenData) {
        console.log(ramenData)
        ramenData.map(function (ramen) {
            retreiveRamen(ramen)
        })
    })
}

// Add any other functions

function retreiveRamen (ramen) {
    // Add or modify elements
    let imgRamen = document.createElement("img")
    // let detailsRamen = document.createElement("li")


    // Add style or content to elements
    imgRamen.src = ramen.image
    imgRamen.addEventListener("click", function () {
        console.log("image clicked")
        picRamen.src = ramen.image
        ramenName.textContent = ramen.name
        resName.textContent = ramen.restaurant
        ratingRamen.textContent = ramen.rating
        commentRamen.textContent = ramen.comment
    })
    
    // detailsRamen.textContent = ramen.img


    // Append if necessary
    menuRamen.append(imgRamen)

}

function addRamen () {
    formRamen.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("PREVENT DEFAULT STOPPED")
    newRamenUser = {
        newName: newName.value,
        newRes: newRes.value,
        newImg: newImg.value,
        newRtg: newRtg.value,
        newCmt: newCmt.value,
    }
    
    

    retreiveRamen(newRamenUser)

    menuRamen.append(newRamenUser.newImg)

    newRamen.push(newRamenUser)

    formRamen.reset()

})
}


// function createNewRamen (ramen) {
//     // Add or modify elements



//     // Add style or content to elements



//     // Append if necessary
// }
