//-----------CARUSEL ____________________________

let caruselImge = document.querySelector('.carusel__imge')
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

let img = document.querySelectorAll('.carusel__imge img');

let indx = 0;

// console.log(img);   

function cecBtn1() {
    indx ++ ;
    if(indx > img.length-1){
        indx = 0;
    }else if(indx < 0){
        indx = img.length-1;
    }
    caruselImge.style.transform = `translateX(${-indx * 1240}px)`;
}

function cecBtn2() {
    indx -- ;
    if(indx > img.length-1){
        indx = 0;
    }else if(indx < 0){
        indx = img.length-1;
    }
    caruselImge.style.transform = `translateX(${-indx * 1240}px)`;
}

//------------------------------------DINAMIC CARDS _______________________

let cardWrapper = document.querySelector(".section3__cards");

let parduct = product.products;

console.log(parduct);

let {thumbnail, price, title, discountPercentage} = parduct ;

parduct.forEach((el)=>{
    let card = document.createElement("div");
    card.classList.add("section3__cards--card");
    card.innerHTML=`
    <div class="section3__cards--card--img">
       <img src="${el.thumbnail}" alt="img">
    </div>
    <div class="section3__cards--card--titil">
      <p class="section3__cards--card--titil--pi1">
        ${el.title.slice(0,24)}
      </p>
      <p class="section3__cards--card--titil--pi2">
        ₹${el.price}
        <span>₹${Math.floor(el.price * 1.4)}</span>
      </p>
      <p class="section3__cards--card--titil--pi3">
        Save - ₹${el.price}
      </p>
    </div>
    <p class="section3__cards--card-p">${Math.floor(el.discountPercentage)}% OFF</p>
  `

   cardWrapper.appendChild(card);
});

//----------------------DINAMIC CARD2_______________________________

let cardWrapper2 = document.querySelector(".section4__cards");


data1.forEach((el)=>{
  let card = document.createElement("div");
  card.classList.add("section4__cards--card");
  card.innerHTML=`
    <div class="section4__cards--card--img">
       <img src="${el.img}" alt="smartfon">
    </div>
    <p>${el.name}</p>
  
  `
  cardWrapper2.appendChild(card);
});


//----------------------DINAMIC CARD3_______________________________

let cardWrapper3 = document.querySelector(".section6__cards");

if(data2.length){

  data2.forEach((el)=>{
    let card = document.createElement("div");
    card.classList.add("section6__cards--card");
    card.innerHTML = `
      <div class="section6__cards--card--img">
        <img src="${el.img}" alt="image">
      </div>
      <div class="section6__cards--card--titil">
        <p>${el.name}</p>
        <h3>${el.discount}</h3>
      </div>
    `

    cardWrapper3.appendChild(card);
  })
}else {
  cardWrapper3.innerHTML =`<h2> Malumot topilmadi </h2>`
}
