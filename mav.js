const one = document.querySelector(".one")
const two = document.querySelector(".two")
const btn = document.querySelector("#menu-bar")
const inputField = document.querySelector("#input-field")
const subBtn = document.querySelector("#sub-btn")
btn.addEventListener("click", function(){
    one.classList.toggle("reveal")
    two.classList.toggle("reveal")
})
subBtn.addEventListener("click", function(){
    inputField.value = " "
})

let secTwo = document.querySelector(".img-container")
const filterBtn = document.querySelector("#filter-btn")
let inputEl = document.querySelector("#input-el")
const menu = [
    {
        image: "image 1.jpg",
        product: "Shirts",
        link: "Shop now",
        price: 5000
    },
    {
        image: "image 2.png",
        product: "T-shirts",
        link: "Shop now",
        price: 10000
    },
    {
        image: "image 3.png",
        product: "Polos",
        link: "Shop now",
        price: 4000
    },
    {
        image: "image 7.png",
        product: "Sweatshirts",
        link: "Shop now",
        price: 3000
    },
    {
        image: "image 8.png",
        product: "Leather-Jackets",
        link: "Shop now",
        price: 7000
    },
    {
        image: "image 4.png",
        product: "Denim-Jackets",
        link: "Shop now",
        price: 6000
    }
]
window.addEventListener("DOMContentLoaded", e => {
    setUp()
})

function setUp(){
    let displayMenu = menu.map(function(item){
        return `
        <div class="sec-two-img">
            <img src="${item.image}" alt="">
            <div class="sec-two-img-text">
                <p>${item.product}</p>
                <p><a href="#">${item.link}</a></p>
            </div>
        </div>
        `
    })
    displayMenu = displayMenu.join("")
    secTwo.innerHTML = displayMenu
}
