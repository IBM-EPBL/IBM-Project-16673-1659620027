"use strict";
const listUl = document.querySelector(".lists");
const addBtn = document.querySelector(".submitBtn");
const prodName = document.getElementById("prodName");
const prodCount = document.getElementById("number");
let count=0;

if(count===0){
  document.querySelector('.emptyData').classList.add('add');
}

const addElement = (event) => {
  event.preventDefault();
  count++;
  console.log(count);
  if(count>10){
   document.querySelector('.indicator').classList.add('remove');
  }
  if(count!==0){
    document.querySelector('.emptyData').classList.remove('add');
  }
 
  const liEle = document.createElement("li");
  const liTitle = document.createElement("h1");
  liTitle.textContent = prodName.value;
  const liCount = document.createElement("p");
  liCount.textContent = `Rs.${prodCount.value}`;
  liEle.append(liTitle, liCount);
  listUl.append(liEle);
};

const clearInput = () => {
    prodName.value='';
    prodCount.value='';
}
addBtn.addEventListener("click", (e) => {
  addElement(e);
  clearInput();
});
