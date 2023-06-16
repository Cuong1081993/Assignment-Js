"use strict";

const breedInput = document.getElementById("input-breed");
const typeInput = document.getElementById("input-type");
const btnSubmit = document.getElementById("submit-btn");
const tableBodyE1 = document.getElementById("tbody");

// Hien thi danh sach breed
renderTableBreed(breedArr);

btnSubmit.addEventListener("click", function () {
  // lay du lieu tu form input

  const data = {
    breed: breedInput.value,
    type: typeInput.value,
  };
  const isValidate = validate(data);

  if (isValidate) {
    // them du lieu vao mang breedArr
    breedArr.push(data);
    // luu du lieu vao localStorage
    saveToStorage("breedArr", breedArr);

    // render breed

    renderTableBreed(breedArr);
    // xoa input
    deleteForm();
  }
});

function validate(data) {
  let isValidate = true;

  if (breedInput.value.trim().length === 0) {
    alert("Please input Breed !");
    isValidate = false;
  }
  if (data.type === "Select Type") {
    alert("Please select Type !");
    isValidate = false;
  }
  return isValidate;
}

// xoa input form

function deleteForm() {
  (breedInput.value = ""), (typeInput.value = "Select Type");
}

function renderTableBreed() {
  tableBodyE1.innerHTML = "";

  // thêm row cho mỗi loại breed được vẽ ra

  breedArr.forEach(function (breedItem, index) {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td scope="col">${index + 1}</td>
    <td scope="col">${breedItem.breed}</td>
    <td scope="col">${breedItem.type}</td>
    <td><button type ="button" onclick = "deleteBreed('${
      breedItem.breed
    }')" class = "btn btn-danger">Delete</button></td>   
`;
    tableBodyE1.appendChild(row);
  });
}

//Xoa breed

function deleteBreed(breed) {
  const isDelete = confirm("Are you sure ?");

  if (isDelete) {
    for (let i = 0; i < breedArr.length; i++) {
      if (breed === breedArr[i].breed) {
        breedArr.splice(i, 1);

        saveToStorage("breedArr", breedArr);

        renderTableBreed(breedArr);
        break;
      }
    }
  }
}
