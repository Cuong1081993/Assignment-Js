"use strict";

const submitBtn = document.getElementById("submit-btn");
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
const healthyBtn = document.getElementById("healthy-btn");
const BMIBtn = document.getElementById("bmi-btn");

const petArr = [];

const data1 = {
  id: "1",
  name: "Jane",
  age: 2,
  type: "Cat",
  weight: 5,
  length: 20,
  color: "Red",
  breed: "Englang",
  vaccinated: true,
  dewormed: true,
  sterilized: true,
  date: new Date(2023, 6, 3),
  bmi: "?",
};
const data2 = {
  id: "2",
  name: "Kane",
  age: 4,
  type: "Dog",
  weight: 51,
  length: 2,
  color: "Blue",
  breed: "Viet Nam",
  vaccinated: false,
  dewormed: false,
  sterilized: true,
  date: new Date(2023, 8, 3),
  bmi: "5",
};
petArr.push(data1);
petArr.push(data2);

console.log(petArr);

// sự kiện cho nút Submit
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
    date: new Date(),
    bmi: "?",
  };
  const validate = validateData(data);

  // Validate dữ liệu input
  if (validate) {
    //thêm pet vào danh sách
    petArr.push(data);
    //Hiển thị danh sách Pet
    renderTableData(petArr);

    //Xóa các dữ liệu nhập trên form
    clearInput();
  }
});
renderTableData(petArr);

function clearInput() {
  // đưa dữ liệu input trở về khi chưa nhập gì
  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";
  weightInput.value = "";
  lengthInput.value = "";
  colorInput.value = "#000000";
  breedInput.value = "Select Breed";
  typeInput.value = "Select Type";
  vaccinatedInput.checked = false;
  dewormedInput.checked = false;
  sterilizedInput.checked = false;
}

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
              <td>${pet.bmi}</td>
							<td>${pet.date.getDate()}/${
      pet.date.getMonth() + 1
    }/${pet.date.getFullYear()}</td>
							<td><button class="btn btn-danger" onclick="deletePet('${
                pet.id
              }')">Delete</button>
							</td>`;
    tableBodyEl.appendChild(row);
  });
}

// Xóa thú cưng khỏi danh sách
function deletePet(petId) {
  // Xác nhận với người dùng chắc chắn xóa ?
  const isDeleted = confirm("Are you sure ?");
  if (isDeleted) {
    for (let i = 0; i < petArr.length; i++) {
      if (petId === petArr[i].id) {
        // Xóa 1 phần tử thứ i trong mảng petArr
        petArr.splice(i, 1);
        // gọi hàm render để vẽ lại sau khi xóa
        renderTableData(petArr);
      }
    }
  }
}

// Validate dữ liệu nhập vào
function validateData(data) {
  let isValidate = true;
  if (data.id.trim() === "") {
    alert("Vui lòng điền ID !");
    isValidate = false;
  }
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
    if (data.id == petArr[i].id) {
      alert("ID must be unique!");
      isValidate = false;
      break;
    }
    if (data.age < 1 || data.age > 15) {
      alert("Age must be between 1 and 15 !");
      isValidate = false;
    }
    if (data.weight < 1 || data.weight > 15) {
      alert("Weight must be between 1 and 15 !");
      isValidate = false;
    }
    if (data.length < 1 || data.lenght > 100) {
      alert("Age must be between 1 and 100 !");
      isValidate = false;
    }
    if (data.type === "Select Type") {
      alert("Please select Type !");
      isValidate = false;
    }
    if (data.breed === "Select Breed") {
      alert("Please select Breed !");
      isValidate = false;
      break;
    }
  }
  return isValidate;
}
// Hiển thị thú cưng khỏe mạnh

//Tạo flag để check
let healthyCheck = true;

// Gán sự kiện cho nút "Show Healthy Check"
healthyBtn.addEventListener("click", function () {
  // Nếu  flag = true thì hiện ra danh sách thú cưng khỏe mạnh
  if (healthyCheck === true) {
    const healthyPet = [];

    // Vòng for để xác định những thú cưng nào khỏe mạnh
    for (let i = 0; i < petArr.length; i++) {
      // Nếu thú cưng thỏa mãn điều kiện if thì là khỏe mạnh
      if (petArr[i].vaccinated && petArr[i].dewormed && petArr[i].sterilized) {
        // add phần tử i trong mảng petArr vào mảng healthyPet
        healthyPet.push(petArr[i]);
      }
    }
    // Render lại với đối số là mảng healthyPet
    renderTableData(healthyPet);
    // Đổi nút thành Show All Pet
    healthyBtn.textContent = "Show All Pet";

    // cho flag = false để hiện ra Show All Pet
    healthyCheck = false;

    // Nếu flag = false thì hiện về Show All Pet
  } else {
    renderTableData(petArr);

    // Đổi tên nút thành "Show Healthy Pet"
    healthyBtn.textContent = "Show Healthy Pet";
    healthyCheck = true;
  }
});

//Tính chỉ số BMI
BMIBtn.onclick = function () {
  // Duyệt vòng lặp for 
  for (let i = 0; i < petArr.length; i++) {
    // Toán tử 3 ngôi nếu là Dog thì theo công thức 1 và Cat thì công thức 2
    petArr[i].bmi =
      petArr[i].type == "Dog"
      // toFixed để làm tròn 2 chữ số thập phân
        ? ((petArr[i].weight * 703) / petArr[i].length ** 2).toFixed(2)
        : ((petArr[i].weight * 886) / petArr[i].length ** 2).toFixed(2);
  }
  renderTableData(petArr);
};
