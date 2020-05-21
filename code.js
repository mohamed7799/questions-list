"use strict"


//var
let op = [...document.getElementsByClassName("open")];

let ans = [...document.getElementsByClassName("q-card")];

let ans_js = [...document.getElementsByClassName("ans-js")];


//fun
let toggle = function (ele) {
    if (ele.parentElement.nextElementSibling.style.height) {
        ele.parentElement.nextElementSibling.style.height = null;

    } else {
        ele.parentElement.nextElementSibling.style.height = ele.parentElement.nextElementSibling.scrollHeight + "px";
    }
}


// event listeners
op.forEach((ele) => {
    ele.addEventListener("click", (e) => {

        ans_js.forEach((ele) => {
            if (ele !== e.target.parentElement.nextElementSibling) {
                ele.style.height = null;
            }
        })

        toggle(ele);

        e.stopPropagation();
    })
})


ans.forEach((ele) => {
    ele.addEventListener('click', (e) => {
        e.stopPropagation();
    })
})



document.addEventListener("click", (e) => {

    if (e.target.closest(".q-card") === null) {

        ans_js.forEach((ele) => {
            ele.style.height = null;
        })


    }
})