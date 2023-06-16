'use strict';

const navbar = document.getElementById("sidebar");
navbar.addEventListener('click',function(){
    this.classList.toggle("active");
});

const data = {
    id:'1',
    name: 'Lion',
    age: 3,
    type: 'Cat',
    weight: 5,
    length: 50,
    color: '#000',
    breed: 'Tabby',
    vaccinated : true,
    dewormed : true,
    sterilized : true,
    date : new Date()
};

const breed = {
    breed : 'Mèo tam thể',
    type: 'Cat'
};

if(!getFromStorage('petArr')){
    saveToStorage('petArr',[data])
}

const petArr = getFromStorage('petArr');

if(!getFromStorage('breedArr')){
    saveToStorage('breedArr',[breed])

  

};

const breedArr = getFromStorage('breedArr');

// Lấy dữ liệu 
function getFromStorage(key){
    return JSON.parse(localStorage.getItem(key));
}

// Hàm lưu dữ liệu
function saveToStorage(key,value){
    localStorage.setItem(key, JSON.stringify(value));
}
