
//Slide in full screen navigation menu
function openNav() {
  document.getElementById('myNav').style.width = "100%";
}
function closeNav() {
  document.getElementById('myNav').style.width = "0%";
}

const propOneContainer = document.getElementById('imagesContainer');

let propOneImages = ['../Home Page/1833 W. Park Place Photos/01_1833_W_Park_Place_001_mls.jpg', '../Home Page/1833 W. Park Place Photos/02_1833_W_Park_Place_002_mls.jpg', '../Home Page/1833 W. Park Place Photos/03_1833_W_Park_Place_003_mls.jpg'];

let propOneindex = 0;



function loadFirstImage (img) {
  propOneContainer.src = img;
}

function propOneChangeImg(direction) {
  propOneindex += (direction === 'next' ? 1 : -1)
  if (propOneindex === propOneImages.length) {propOneindex = 0}
  else if (propOneindex < 0) {propOneindex = propOneImages.length - 1}

  loadFirstImage(propOneImages[propOneindex])
}

loadFirstImage(propOneImages[propOneindex]);


