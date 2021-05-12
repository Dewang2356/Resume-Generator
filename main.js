const static = document.querySelector(".static");
const fat = document.querySelectorAll(".fat");
const next = document.querySelectorAll(".next");
const prev = document.querySelector(".prev");

const professional = document.querySelector(".professional");
const personal = document.querySelector(".personal");
const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const kol = document.querySelector(".kol");
const pol = document.querySelector(".pol");
const bol = document.querySelector(".bol");
const fhu = document.querySelector(".fhu");
const head = document.querySelector(".head");
const indicator = document.querySelector(".indicator");
const container = document.querySelector(".container");
const loader = document.querySelector(".loader");
const skip = document.querySelector(".skip");
const add = document.querySelector(".add");
const lav = document.querySelector(".lav");
const mar = document.getElementsByClassName("mar");
const car = document.getElementsByClassName("car");
let newNode = document.createElement("textarea");
const fuck = document.querySelector(".fuck");

let r = [];
var lew;
let k = [];
var kew;
let second;
let pode;
let kode;
var s;
const lk = document.querySelector(".lk");
const luck = document.getElementsByClassName("luck");
const tuka = document.querySelector(".tuka");
var fame = document.querySelectorAll(".fame");
var f = 0;
var d = 0;

let it = document.querySelector(".it");
const text = document.getElementsByClassName("text");
text[2].addEventListener("keyup", function () {
  s = text[2].value;
  luck.innerHTML = s;
});
const buka = document.querySelector(".buka");
const duck = document.getElementsByClassName("duck");
const dk = document.querySelector(".dk");
const nk = document.querySelector(".nk");
const cv = document.querySelector(".cv");
add.addEventListener("click", function () {
  f++;

  newNode = document.createElement("textarea");
  it = document.querySelector(".it");
  newNode.classList.add("text");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");
  newNode.classList.add("mar");
  newNode.setAttribute("onkeyup", "dew();");
  it.insertBefore(newNode, add);
  pode = document.createElement("li");
  pode.innerHTML = "fuck";
  pode.classList.add("luck");
  tuka.insertBefore(pode, lk);

  mar[f].addEventListener("keyup", function () {
    luck[f].innerHTML = mar[f].value;
  });
});

text[2].addEventListener("keyup", function () {
  luck[0].innerHTML = text[2].value;
});
nk.addEventListener("keyup", function () {
  duck[0].innerHTML = nk.value;
});
const dew = () => {
  // console.log(newNode.value);
  r.push(newNode.value);
  lew = r.length - 1;
};

lav.addEventListener("click", function () {
  d++;
  second = document.createElement("textarea");
  const at = document.querySelector(".at");
  second.classList.add("text");
  second.setAttribute("rows", 3);
  second.setAttribute("placeholder", "Enter Here");
  second.classList.add("car");
  second.setAttribute("onkeyup", "pew();");
  at.insertBefore(second, lav);
  kode = document.createElement("li");
  kode.innerHTML = "fuck";
  kode.classList.add("duck");
  buka.insertBefore(kode, dk);
  car[d].addEventListener("keyup", function () {
    duck[d].innerHTML = car[d].value;
  });
});

const pew = () => {
  // console.log(newNode.value);
  k.push(second.value);
  kew = k.length - 1;
};
fhu.addEventListener("click", function () {
  container.style.display = "none";
  head.style.display = "none";
  indicator.style.display = "none";
  loader.style.opacity = "1";
  cv.style.opacity = "0";
  cv.style.zIndex = "5";
  setTimeout(function () {
    loader.style.opacity = "0";
  }, 3000);
  setTimeout(function () {
    cv.style.opacity = "1";
  }, 3000);
});
skip.addEventListener("click", function () {
  container.style.display = "none";
  head.style.display = "none";
  indicator.style.display = "none";
  loader.style.opacity = "1";
  cv.style.opacity = "0";
  cv.style.zIndex = "5";
  setTimeout(function () {
    loader.style.opacity = "0";
  }, 3000);
  setTimeout(function () {
    cv.style.opacity = "1";
  }, 3000);
});
var lev;
var x = [];
const chu = document.querySelector(".chu");
var y = [];
let name;
let phone;
let facebook;
let instagram;
let linkdein;
const social = document.querySelectorAll(".social");
//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
  dragText = dropArea.querySelector("header"),
  button = dropArea.querySelector("button"),
  input = dropArea.querySelector("input");
const but = document.querySelector(".but");
let file;
let address;
const bhi = document.querySelector(".bhi");
const form__input = document.querySelectorAll(".form__input");
name = form__input[0];
phone = form__input[1];
facebook = form__input[3];
instagram = form__input[4];
linkdein = form__input[5];
address = text[0];
facebook.addEventListener("keyup", function () {
  social[0].setAttribute("href", facebook.value);
});
instagram.addEventListener("keyup", function () {
  social[1].setAttribute("href", instagram.value);
});
linkdein.addEventListener("keyup", function () {
  social[2].setAttribute("href", linkdein.value);
});
var email = form__input[2];
name.addEventListener("keyup", function () {
  fame[0].innerHTML = `<i class="fas fa-user"></i> ${name.value}`;
  fame[4].innerHTML = name.value;
});
phone.addEventListener("keyup", function () {
  fame[1].innerHTML = `<i class="fas fa-phone" style="transform: rotate(90deg);"></i> ${phone.value}`;
});
address.addEventListener("keyup", function () {
  fame[2].innerHTML = `<i class="fas fa-map-marker-alt"></i> ${address.value}`;
});
email.addEventListener("keyup", function () {
  fame[3].innerHTML = `<i class="fas fa-envelope"></i> ${email.value}`;
});
text[1].addEventListener("keyup", function () {
  bhi.innerHTML = text[1].value;
});
let we;
let work;
let quali;
next[0].addEventListener("click", function () {
  for (var i = 0; i <= 4; i++) {
    if (form__input[i].value == "") {
      personal.style.left = "0%";
      professional.style.left = "100%";
      x = [];
    } else {
      personal.style.left = "-100%";
      professional.style.left = "0%";
      a.style.transform = "scale(0)";
      pol.style.transform = "scale(1)";
    }
    x.push(form__input[i].value);
  }

  if (text[0].value == "") {
    personal.style.left = "0%";
    professional.style.left = "100%";
    a.style.transform = "scale(1)";
    pol.style.transform = "scale(0)";
  } else {
    personal.style.left = "-100%";
    professional.style.left = "0%";
  }
  for (var i = 0; i <= 1; i++) {
    y.push(text[i].value);
  }
});

next[1].addEventListener("click", function () {
  if (text[1].value == "") {
    dropArea.style.transform = "translateX(1000px)";
  }
  if (text[2].value == "") {
    dropArea.style.transform = "translateX(1000px)";
  }
  if (text[3].value == "") {
    dropArea.style.transform = "translateX(1000px)";
  } else {
    dropArea.style.transform = "translateX(0px)";
    professional.style.left = "-100%";
    b.style.transform = "scale(0)";
    kol.style.transform = "scale(1)";
    but.style.display = "block";
  }
  for (var i = 0; i <= 3; i++) {
    y.push(text[i].value);
  }
  y.splice(0, 2);
  we = text[1].value;
  work = text[2].value;
  quali = text[3].value;
});
chu.addEventListener("click", function () {
  professional.style.left = "0%";
  dropArea.style.transform = "translateX(1000px)";
  but.style.display = "none";
});
prev.addEventListener("click", function () {
  personal.style.left = "0";
  professional.style.left = "100%";
  x = [];
  y.slice(0);
});

let fileURL;
//this is a global variable and we'll use it inside multiple functions

button.onclick = () => {
  input.click(); //if user click on the button then the input also clicked
  c.style.transform = "scale(0)";
  bol.style.transform = "scale(1)";
};

input.addEventListener("change", function () {
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); //calling function
});

//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event) => {
  event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event) => {
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); //calling function
});

function showFile() {
  let fileType = file.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if (validExtensions.includes(fileType)) {
    //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader weect
    fileReader.onload = () => {
      fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
    };
    fileReader.readAsDataURL(file);
  } else {
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}
fhu.addEventListener("click", function () {
  const photo = document.querySelector(".photo");
  photo.src = fileURL;
});
skip.addEventListener("click", function () {
  const photo = document.querySelector(".photo");
  photo.src = "empty-profile.png";
});
// const a = 1;
// const b = 2;
