function appendImg(keyword, index) {
  const imgElem = document.createElement("img");
  imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

  const galleryElem = document.querySelector(".gallery");
  galleryElem.appendChild(imgElem);
}

function removePhoto() {
    const galleryElem = document.querySelector('.gallery')
    galleryElem.innerHTML = '';
}

function searchPhoto(e) {
  const keyword = e.target.value;

  if (e.key === 'Enter' && keyword) {
    removePhoto();
    for (i = 1; i <= 9; i++) {
      appendImg(keyword, i);
    }
  }
}

function run() {
  const inputElem = document.querySelector("input");
  inputElem.addEventListener("keydown", searchPhoto);
}

run();
