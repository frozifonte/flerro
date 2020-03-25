"use strict";

let modalForm = document.getElementById("modalForm");
let modalBtn = document.querySelector(".modal-button");
let closeModalSuc = document.getElementById("modalCloseSuc");
let closeModalForm = document.getElementById("modalCloseFm");
let modalSuc = document.getElementById("modalSuc");
let formBtn = document.getElementById("formBtn");
let checkBtn = document.getElementById("checkBtn");
let modalSt = document.getElementsByClassName("modal")[0]; 
let modalNd = document.getElementsByClassName("modal")[1];
let linkModalMob = document.getElementById("modalButtonMob");
//let form = document.querySelector(".form");
//let name = form.querySelector(".name");
//let tel = form.querySelector(".tel");
//let fields = form.querySelectorAll('.field');
//let checkbox = document.getElementById('check');
//let paragraph = document.querySelector(".form__item--chech-descr");

modalBtn.onclick = function () {
    modalForm.style.display = "block";
}
linkModalMob.onclick = function () {
    modalForm.style.display = "block";
     event.preventDefault()
}
//
//     fields. focus = function () {
//        this.style.border = "2px solid orange";
//    
//    };
//    fields.onblur = function () {
//        this.style.border = "2px solid grey";
//  }; 
//
function move () {
    event.preventDefault()
//    let erName = document.forms["form"]["name"].value;
//    if (erName == " "){
//        let error = document.createElement('div')
//        error.className='error';
//        error.style.color = 'red';
//        error.style.textAlign = "left";
//        error.innerHTML = 'Ошибка: поле не может оставаться пустым';
//        erName.after(error);
//        
//    }
//     let erTel = document.forms["form"]["tel"].value;
//    if (erTel == ""){
//        let error = document.createElement('div')
//        error.className='error';
//        error.style.color = 'red';
//        error.style.textAlign = "left";
//        error.innerHTML = 'Ошибка: поле не может оставаться пустым';
//        erName.after(error);
        modalForm.style.display = "";
        modalSuc.style.display = "block";
    
    }
//   form.addEventListener('submit', function (event) {
//  event.preventDefault()
//       
//       //blank
//       
//    let errors = form.querySelectorAll(".error"); 
//for (let i = 0; i < errors.length; i++){
//    errors[i].remove();
//    fields.style.border = "";
//}
//  for (let i = 0; i < fields.length; i++) {
//  if (!fields[i].value) {
//    let error = document.createElement('div')
//    error.className='error';
//    error.style.color = 'red';
//    error.style.textAlign = "left";
//    error.innerHTML = 'Ошибка: поле не может оставаться пустым';
//    fields[i].style.border = "2px solid red";
//    fields[i].after(error); 
//  };
//      if (name.value.includes("0-9")){
//          let error = document.createElement('div')
//    error.className='error';
//    error.style.color = 'red';
//    error.style.textAlign = "left";
//    error.innerHTML = 'Ошибка: не могут быть использованы цифры';
//    fields[i].style.border = "2px solid red";
//    fields[i].after(error); 
//      }
//     if (!checkbox.checked) {
//         let error = document.createElement('div')
//    error.className='error';
//    error.style.color = 'red';
//    error.style.textAlign = "left";
//    error.innerHTML = 'Ошибка: ';
//    paragraph.after(error); 
//     }  
//      
//checkbox.style.backgroundColor = "orange";
//    if (checkbox.checked && fields[i].value) {
//        modalForm.style.display = "";
//        modalSuc.style.display = "block";
//    }
//};
//    
//    
//   });
//   
//       
//   
//};
//
//
//    
//    
//     
//
//
//
//
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
//
//(function($) {
//  $(function() {
//    $("ul.tabs__caption").on("click", "li:not(.active)", function() {
//      $(this)
//        .addClass("active")
//        .siblings()
//        .removeClass("active")
//        .closest("div.tabs")
//        .find("div.tabs__content")
//        .removeClass("active")
//        .eq($(this).index())
//        .addClass("active");
//    });
//  });
//});


