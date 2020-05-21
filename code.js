"use strict"


let op = [...document.getElementsByClassName("open")];

let ans = [...document.getElementsByClassName("q-card")];



let currentOp;

op.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        currentOp = e.target;
        if (ele.parentElement.nextElementSibling.style.height) {
            ele.parentElement.nextElementSibling.style.height = null;

        } else {
            ele.parentElement.nextElementSibling.style.height = ele.parentElement.nextElementSibling.scrollHeight + "px";
        }
        e.stopPropagation();
    })
})


ans.forEach((ele) => {
    ele.addEventListener('click', () => {
        e.stopPropagation();
    })
})



document.addEventListener("click", (e) => {

    if (e.target.closest(".q-card") === null) {

        currentOp.parentElement.nextElementSibling.style.height = null;

    }
})