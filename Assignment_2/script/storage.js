'use strict';

const navbar = document.getElementById("sidebar");
navbar.addEventListener('click',function(){
    this.classList.toggle("active");
});

const data = {
    id:'',
    name: '',
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
    breed : 'Cat viet',
    type: 'Cat'
};

if(!getFromStorage('petArr')){
    saveToStorage('petArr',[data])
}

const petArrr = getFromStorage('petArrr');

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