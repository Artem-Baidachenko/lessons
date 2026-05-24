"use strict"

const menu = document.querySelector(".menu")

menu.addEventListener("click", () => {
	menu.toggleAttribute("menu-open")
})