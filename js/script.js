"use strict";

let modalForm = document.getElementById("modalForm");
let modalBtn = document.getElementById("modalButton");
let closeModalSuc = document.getElementById("modalCloseSuc");
let closeModalForm = document.getElementById("modalCloseFm");
let modalSuc = document.getElementById("modalSuc");
let formBtn = document.getElementById("formBtn");
let checkBtn = document.getElementById("checkBtn");
let modalSt = document.getElementsByClassName("modal")[0]; 
let modalNd = document.getElementsByClassName("modal")[1];

modalBtn.onclick = function () {
    modalForm.style.display = "block";
}

function move () {
    modalForm.style.display = "";
   modalSuc.style.display = "block";
}

closeModalForm.onclick = function () {
    modalForm.style.display = "";
}

closeModalSuc.onclick = function () {
    modalSuc.style.display = "";
}

checkBtn.onclick = function () {
    modalSuc.style.display = "";
}

window.onclick = function (event) {
    if (event.target == modalSt){
         modalForm.style.display = "";
    }
    if (event.target == modalNd){
        modalSuc.style.display = "";
    }
}