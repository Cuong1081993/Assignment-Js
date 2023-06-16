'use strict';


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

const tableBodyEl = document.getElementById("tbody");
const formE1 = document.getElementById("container-form");
const submitBtn = document.getElementById("submit-btn");



renderTableData(petArr);
// In ra ở phần tbody của table
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
                                  <i class="bi bi-square-fill" style="color: ${pet.color}"></i>
                              </td>
                              <td><i class="bi ${
                  pet.vaccinated ? "bi-check-circle-fill" : "bi-x-circle-fill"
                }"></i></td>
                              <td><i class="bi ${
                  pet.dewormed ? "bi-check-circle-fill" : "bi-x-circle-fill"
                }"></i></td>
                              <td><i class="bi ${
                  pet.sterilized ? "bi-check-circle-fill" : "bi-x-circle-fill"
                }"></i></td>
               
                <td>${pet.date}</td>
                              <td><button class="btn btn-danger" onclick="editPet('${
                  pet.id
                }')">Edit</button>
                              </td>`;
      tableBodyEl.appendChild(row);
    });
  }

  // hàm chỉnh sửa dữ liệu thông tin pet

  function editPet(id){
    // hiện lại form input thông tin
    formE1.classList.remove("hide");

    // tìm tới id của Pet muốn chỉnh sửa

    const pet = petArr.find((petItem)=> petItem.id === id);

    // lấy lại thông tin của thú cưng
    idInput.value = id;
    nameInput.value = pet.name;
    ageInput.value = pet.age;
    typeInput.value = pet.type;
    weightInput.value = pet.weight;
    lengthInput.value = pet.length;
    colorInput.value = pet.color;
    vaccinatedInput.value = pet.vaccinated;
    dewormedInput.value = pet.dewormed;
    sterilizedInput.value = pet.sterilized;

    renderBreed();

    breedInput.value = `${pet.breed}`;
  }

  // Sự kiện khi bấm vào typeInput để hiện thông tin các breed trong type
  typeInput.addEventListener('click',renderBreed);

  // Hiển thị giống theo loại thú cưng
  function renderBreed() {
    breedInput.innerHTML = "<option>Select Breed</option>";
  
    // Kiểm tra giá trị type để in ra đúng với giống
    if (typeInput.value === "Dog") {
        //filter ra giống có type là Dog
        const breedDogs = breedArr.filter((breedItem) => breedItem.type === "Dog");
        breedDogs.forEach(function (breedItem) {
            const option = document.createElement('option');
            option.innerHTML= `${breedItem.breed}`;
            breedInput.appendChild(option);
          });
      } else if (typeInput.value === "Cat") {
        // filter ra giống có type là Cat
          const breedCat = breedArr.filter((breedItem) => breedItem.type === "Cat");
          breedCat.forEach(function (breedItem) {
          const option = document.createElement('option');
          option.innerHTML= `${breedItem.breed}`;
          breedInput.appendChild(option);
      });
    }
  }

  // Sự kiện cho nút submit edit


submitBtn.addEventListener("click", function () {
    const data = {
      id: idInput.value,
      name: nameInput.value,
      age: parseInt(ageInput.value),
      type: typeInput.value,
      weight: parseInt(weightInput.value),
      length: parseInt(lengthInput.value),
      color: colorInput.value,
      breed: breedInput.value,
      vaccinated: vaccinatedInput.checked,  
    };
    const validate = validateData(data);
  
    // Validate dữ liệu input
    if (validate) {
  const index = petArr.findIndex((pet)=> pet.id=== data.id);

  //Giữ lại ngày tháng năm
  data.date = petArr[index].date;

  // Cập nhập lại thông tin pet
  petArr[index] = data;
  saveToStorage("petArr", petArr);

  // ẩn form đi và hiện lại bảng dữ liệu pet
  formE1.classList.add('hide');
  renderTableData(petArr);
    }
  });
  
  // Validate dữ liệu

  function validateData(data) {
    let isValidate = true;
    
    if (data.name.trim() === "") {
      alert("Vui lòng điền tên Pet !");
      isValidate = false;
    }
    if (isNaN(data.age)) {
      alert("Vui lòng điền tuổi !");
      isValidate = false;
    }
    if (isNaN(data.weight)) {
      alert("Vui lòng điền cân nặng !");
      isValidate = false;
    }
    if (isNaN(data.length)) {
      alert("Vui lòng điền độ dài !");
      isValidate = false;
    }
    for (let i = 0; i < petArr.length; i++) {
     
       if (data.age < 1 || data.age > 15) {
        alert("Age must be between 1 and 15 !");
        isValidate = false;
      }
      else if (data.weight < 1 || data.weight > 15) {
        alert("Weight must be between 1 and 15 !");
        isValidate = false;
      }
      else if (data.length < 1 || data.lenght > 100) {
        alert("Age must be between 1 and 100 !");
        isValidate = false;
      }
      else if (data.type === "Select Type") {
        alert("Please select Type !");
        isValidate = false;
      }
      else if (data.breed === "Select Breed") {
        alert("Please select Breed !");
        isValidate = false;
        break;
      }
    }
    return isValidate;
  }

  


