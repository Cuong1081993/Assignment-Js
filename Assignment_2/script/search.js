"use strict";

const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");

const findBtn = document.getElementById("find-btn");
const tableBodyEl = document.getElementById("tbody");
const formE1 = document.getElementById("container-form");

findBtn.addEventListener("click", function () {
  let petFindArr = petArr;

  // duyệt qua mảng petFindArr, tìm kiếm từ khóa phù hợp với các mục được tìm kiếm (có thể tìm kiếm nhiều mục )
  //
  if (idInput.value) {
    petFindArr = petFindArr.filter((pet) => pet.id.includes(idInput.value));
  }
  if (nameInput.value) {
    petFindArr = petFindArr.filter((pet) => pet.name.includes(nameInput.value));
  }
  if (typeInput.value !== "Select Type") {
    petFindArr = petFindArr.filter((pet) => pet.type === typeInput.value);
  }
  if (breedInput.value !== "Select Breed") {
    petFindArr = petFindArr.filter((pet) => pet.breed === breedInput.value);
  }
  if (vaccinatedInput.checked == true) {
    petFindArr = petFindArr.filter((pet) => pet.vaccinated === true);
  }
  if (dewormedInput.checked == true) {
    petFindArr = petFindArr.filter((pet) => pet.dewormed === true);
  }
  if (sterilizedInput.checked == true) {
    petFindArr = petFindArr.filter((pet) => pet.sterilized === true);
  }

  renderTableData(petFindArr);
});

function formatDate(strdate) {

    const date = new Date(strdate);
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

function renderTableData(petArr) {
  // nếu không có đoạn code này thì dữ liệu vẽ ra bị double
  tableBodyEl.innerHTML = "";
  // sử dụng forEach để duyệt qua từng tr và vẽ lại những gì cần hiển thị
  petArr.forEach((pet) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <th scope="row">${pet.id}</th>
                              <td>${pet.name}</td>
                              <td>${pet.age}</td>
                              <td>${pet.type}</td>
                              <td>${pet.weight}kg</td>
                              <td>${pet.length} cm</td>
                              <td>${pet.breed}</td>
                              <td>
                                  <i class="bi bi-square-fill" style="color: ${
                                    pet.color
                                  }"></i>
                              </td>
                              <td><i class="bi ${
                                pet.vaccinated
                                  ? "bi-check-circle-fill"
                                  : "bi-x-circle-fill"
                              }"></i></td>
                              <td><i class="bi ${
                                pet.dewormed
                                  ? "bi-check-circle-fill"
                                  : "bi-x-circle-fill"
                              }"></i></td>
                              <td><i class="bi ${
                                pet.sterilized
                                  ? "bi-check-circle-fill"
                                  : "bi-x-circle-fill"
                              }"></i></td>
               
                <td>${formatDate(pet.date)}</td>
                    `;
    tableBodyEl.appendChild(row);
  });
}


// Hiển thị breed theo từng type
function renderBreed(){
    breedArr.forEach(function(breedItem){
        const option = document.createElement("option");
        option.innerHTML=`${breedItem.breed}`;
        breedInput.appendChild(option);
    });
}
