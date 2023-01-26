
///// slider//////////////
const modal = document.querySelector(".modal");

const sliderInfoContainer = document.getElementById("sliderInfoContainer");
const slider = document.getElementById("slider");
const left = document.getElementById("left");
const right = document.getElementById("right");
let carentIndex = [0];

const sliderData = (user) => {
  let dataApi = user.data.results;
  setInterval(() => {
    sliderRight(dataApi);
  }, 7000);

  right.addEventListener("click", () => {
    sliderRight(dataApi);
  });
  slideLeft(dataApi);
  imgSliderCreate(dataApi[0]);
};

function imgSliderCreate(imgSrc) {
  let elements = document.createElement("img");
  elements.className = "sliderImg";
  slider.innerHTML = "";
  elements.src = imgImg + imgSrc.poster_path;
  slider.appendChild(elements);

  let sliderOpenVideo = document.createElement("div");
  sliderOpenVideo.setAttribute("id", imgSrc.id + "img");
  sliderOpenVideo.setAttribute("class", "sliderOpenVideo");
  sliderOpenVideo.textContent = "ნახეთ თერილერი";

  sliderOpenVideo.addEventListener("click", () => {
    modal.style.display = "block";
    modalBox(imgSrc);
  });

  slider.appendChild(sliderOpenVideo);

  let sliderInfo = document.createElement("div");
  sliderInfoContainer.innerHTML = "";
  sliderInfo.setAttribute("class", "sliderInfo");

  let sliderInfoTitleRate = document.createElement("div");
  sliderInfoTitleRate.setAttribute("class", "sliderInfoTitleRate");

  let pTitile = document.createElement("p");
  pTitile.innerHTML = ` <p class ="title-rate"> TITLE</p>  ${imgSrc.title}  `;
  sliderInfoTitleRate.appendChild(pTitile);

  let pRate = document.createElement("p");
  pRate.innerHTML = `<p class ="title-rate">RATE</p> ${imgSrc.vote_average}`;
  sliderInfoTitleRate.appendChild(pRate);
  sliderInfo.appendChild(sliderInfoTitleRate);

  let slideInfoDate = document.createElement("div");
  slideInfoDate.setAttribute("class", "slideInfoDate");

  let pDate = document.createElement("p");
  pDate.innerHTML = `<p class = "title-rate">DATE</p>  ${imgSrc.release_date}`;

  slideInfoDate.appendChild(pDate);

  sliderInfo.appendChild(slideInfoDate);

  let overview = document.createElement("div");
  overview.setAttribute("class", "descriptionContainer");
  overview.innerHTML = `<p class = "descriptionSlider">Description</P> ${imgSrc.overview}`;
  sliderInfo.appendChild(overview);

  sliderInfoContainer.appendChild(sliderInfo);
}

function sliderRight(index) {
  if (carentIndex == index.length - 1) {
    carentIndex = -1;
  }
  if (carentIndex < index.length - 1) {
    carentIndex++;
    imgSliderCreate(index[carentIndex]);
  }
}

function slideLeft(index) {
  left.addEventListener("click", () => {
    if (carentIndex !== 0) {
      carentIndex--;
      imgSliderCreate(index[carentIndex]);
    }
  });
}
//  search-bar

const searchBar = document.getElementById("searchBar");
let responseData = [];
let imgImg = "https://image.tmdb.org/t/p/original";

const search = () => {
  searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value;
    let filterCarect = responseData.filter((element) => {
      return element.original_title
        .toLowerCase()
        .includes(searchString.toLowerCase());
    });
    let dataTitle = filterCarect;

    const boxes = document.querySelectorAll(".remove");

    boxes.forEach((box) => {
      box.remove();
    });

    dataTitle.forEach((element) => {
      searchFunction(element);
    });
  });
};

search();

const searchFunction = (index) => {
  const navList = document.getElementById("search-bar");

  const div = document.createElement("div");
  div.className = "remove";
  const serchBarRemoveInfo = document.createElement("div");
  serchBarRemoveInfo.setAttribute("class", "search-container");

  if (!searchBar.value == "") {
    navList.style.display = "block";
    serchBarRemoveInfo.innerHTML = `
   <img  src = "${imgImg + index.poster_path}" class = "search-img">
   <div class = " sear-img-title">
   <h3 >${index.title}</h3>
   <p> ${index.release_date}</p>
   </div>
   `;
    div.appendChild(serchBarRemoveInfo);

    navList.appendChild(div);

    serchBarRemoveInfo.addEventListener("click", () => {
      modal.style.display = "block";
      modalBox(index);
      navList.style.display = "none";
      searchBar.value = "";
    });
  } else {
    navList.style.display = "none";
  }
};

//  get-api

const moveGet = (
  url = "https://api.themoviedb.org/3/movie/popular?api_key=78828dca7949b70ca50313e4d49660d1&language=en-US&page=1&fbclid=IwAR0PuIxpwmBg_C7v1cSacQe37ekmHfTxzk9jpSqed1b1g-Zh_dRkKuJF0Vs"
) => {
  axios
    .get(url)
    .then((response) => {
      moveImg(response);
      sliderData(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
moveGet();

// card-info

const containerCard = document.getElementById("card");
const imgUrl = "https://image.tmdb.org/t/p/original";

const moveImg = (response) => {
  responseData = response.data.results;

  responseData.forEach((element) => {
    const containerCardSecond = document.createElement("div");
    containerCardSecond.setAttribute("class", "containerCardSecond");

    const cartHeaderTitle = document.createElement("div");
    cartHeaderTitle.setAttribute("class", " cartHeaderTitle");
    containerCardSecond.appendChild(cartHeaderTitle);

    const opacity = document.createElement("div");
    opacity.setAttribute("id", element.id + "img");
    let imgPlayIcon = document.createElement("div");
    imgPlayIcon.className = "imgPlayIcon ";
    imgPlayIcon.innerHTML = '<i class="fa-regular fa-circle-play"></i>';
    opacity.appendChild(imgPlayIcon);
    opacity.className = "opacity";
    cartHeaderTitle.appendChild(opacity);

    const rateContainer = document.createElement("div");
    rateContainer.setAttribute("class", "rateContainer");

    let cardRate = document.createElement("p");
    cardRate.innerHTML = element.vote_average;
    rateContainer.appendChild(cardRate);

    let cardDate = document.createElement("p");
    cardDate.innerHTML = element.release_date;
    rateContainer.appendChild(cardDate);
    cartHeaderTitle.appendChild(rateContainer);

    let cardImg = document.createElement("div");

    cardImg.setAttribute("class", "cardImg ");
    let img = document.createElement("img");
    img.src = imgUrl + element.poster_path;
    cardImg.appendChild(img);
    cartHeaderTitle.appendChild(cardImg);

    opacity.addEventListener("click", () => {
      modal.style.display = "block";
      modalBox(element);
    });

    let cardTitleContainerd = document.createElement("div");
    cardTitleContainerd.setAttribute("class", "cardTitleContainerd");
    let cardTitle = document.createElement("p");
    cardTitle.innerHTML = element.title;
    cardTitleContainerd.appendChild(cardTitle);

    containerCardSecond.appendChild(cardTitleContainerd);
    containerCard.appendChild(containerCardSecond);
  });
};

function modalBox(element) {
  const modalContainerInfo = document.querySelector(".modal-container-info");

  const modalBckground = document.querySelector(".modal-background");
  modalBckground.innerHTML = ` <img src = "${imgUrl + element.backdrop_path}">`;

  const modalImg = document.querySelector(".modal-img");
  modalImg.innerHTML = `
      <img src = "${imgUrl + element.poster_path}">
      <div class = "modal-info-treiler">
      <p >ფილმის თრეილერი</P>
      </div>
    `;
  const infoRemove = document.querySelectorAll(".modal-info");
  infoRemove.forEach((item) => {
    item.remove();
  });

  const modalInfo = document.createElement("div");
  modalInfo.setAttribute("class", "modal-info");
  const modatInfoContainer = document.createElement("div");
  modatInfoContainer.setAttribute("class", "modal-info-container");

  modatInfoContainer.innerHTML = `
        <div class = "modal-title">
        <p>${element.title}</p>
        </div>
        <div class = "modat-info-rate info-color ">
        <p>rate</p>
        <div class = "color-modal-info"> ${element.vote_average}</div>
        </div>
        <div class = "modal-info-data info-color">
        <P > გამოშვების წელი:</p>
        <div class = "color-modal-info">${element.release_date}</div>
        </div>
        <div class = "modal-info-overview info-color">
        <P>ფილმის სიუჟეტი:</p>
        <div class = "color-modal-info">${element.overview}</div>
        </div>
            
  `;
  modalInfo.appendChild(modatInfoContainer);

  modalContainerInfo.appendChild(modalInfo);

  movieApi(element.id);
}

const api = "78828dca7949b70ca50313e4d49660d1";
const videoYoutube = document.querySelector(".video-youtube");



function movieApi(movie) {
  axios
    .get(`https://api.themoviedb.org/3/movie/${movie}/videos?api_key=${api}&language=en-US`
    )
    .then(function (response) {
      let responseMoves = response.data.results[0];

      const movieDiv = document.createElement("div");
      const movieRemove = document.querySelectorAll(".movieVideoRemove");
      movieDiv.setAttribute("class", "movieVideoRemove");
      movieRemove.forEach((item) => {
        item.remove();
      });

      movieDiv.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${responseMoves.key}"></iframe>  
                   `;
      videoYoutube.appendChild(movieDiv);
    })

    .catch(function (error) {
      console.log(error);
    });
}


