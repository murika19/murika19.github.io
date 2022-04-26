let mobileMenu = document.querySelector("#mobileMenu")
let mobileMenuButton = document.querySelector(".mobileMenuButton")



function menuFunction() {
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none"
    } else {
        mobileMenu.style.display = "block"
    }
}