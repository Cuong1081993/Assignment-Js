"use strict";

if (userActive) {
  const newsContainer = document.getElementById("news-container");
  const btnPrev = document.getElementById("btn-prev");
  const pageNum = document.getElementById("page-num");
  const btnNext = document.getElementById("btn-next");

  // tinh so news tra ve tu API

  let totalResults = 0;

  getDataNews("us", 5);

  async function getDataNews(country, page) {
    try {
      // lay du lieu tu API
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${userActive.category}&pageSize=${userActive.pageSize}&page=${page}&apiKey=1fc3637b7414448fbf924a7b75473735`
      );
      const data = await res.json();

      displayNewList(data);
      // gọi hàm ở trng này để fecth đata
    } catch (error) {
      alert("Error" + error.message);
      // đoạn này trả ra lỗi
    }
  }

  function checkBtnPrev() {
    // page num = 1 thi an prev
    if (pageNum.textContent == 1) {
      btnPrev.style.display = "none";
    } else {
      btnPrev.style.display = "block";
    }
  }
  function checkBtnNext() {
    if (pageNum.textContent == Math.ceil(totalResults / userActive.pageSize)) {
      btnNext.style.display = "none";
    } else {
      btnNext.style.display = "block";
    }
  }
  btnPrev.addEventListener("click", function () {
    // lay du lieu va hien thi danh sach news truoc do
    getDataNews("us", --pageNum.textContent);
  });
  btnNext.addEventListener("click", function () {
    // lay du lieu va hien thi danh sach news tiep do
    getDataNews("us", ++pageNum.textContent);
  });

  // hien thi New len trang web

  function displayNewList(data) {
    // lay total page
    totalResults = data.totalResults;

    checkBtnPrev();
    checkBtnNext();

    let html = "";

    data.articles.forEach(function (article) {
      html += `
        <div class="new-content">
        <div class="card flex-row flex-wrap">
					<div class="card mb-3">
						<div class="row no-gutters">
							<div class="col-md-4">
								<img src="${article.urlToImage ? article.urlToImage : "no_image_available.jpg"}"
									class="card-img"
									alt="img"/>
							</div>
							<div class="col-md-8">
								<div class="card-body">
									<h5 class="card-title">${article.title}</h5>
									<p class="card-text">${article.description}</p>
									<a href="${article.url}"
										class="btn btn-primary">View</a>
								</div>
							</div>
						</div>
					</div>
        `;
    });
    newsContainer.innerHTML = html;
  }
} else {
  alert("Please Login or Register for view page !");
  window.location.assign("../index.html");
}
