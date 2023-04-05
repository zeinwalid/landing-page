let navbarToggle = document.getElementById("navbarToggle");
let menuList = document.getElementById("menuList");


function toggleNavbar (menuList){
    menuList.classList.toggle("toggle-navbar");
}


navbarToggle.addEventListener("click",()=>{
    toggleNavbar(menuList)
})