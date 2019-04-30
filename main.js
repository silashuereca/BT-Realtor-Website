
//Slide in full screen navigation menu overlay
function openNav() {
  document.getElementById('myNav').style.width = "100%";
}
function closeNav() {
  document.getElementById('myNav').style.width = "0%";
}


//Select first property slide show img tag
const propOneContainer = document.getElementById('imagesContainer');

//Array for all first properties images
let propOneImages = ['../Home Page/1833 W. Park Place Photos/01_1833_W_Park_Place_001_mls.jpg', '../Home Page/1833 W. Park Place Photos/02_1833_W_Park_Place_002_mls.jpg', '../Home Page/1833 W. Park Place Photos/03_1833_W_Park_Place_003_mls.jpg'];

// First array property index variable
let propOneindex = 0;


//This loads the first image in property one slideshow
function loadFirstImage (img) {
  propOneContainer.src = img;
}

//Changes the index number in images container
function propOneChangeImg(direction) {
  propOneindex += (direction === 'next' ? 1 : -1)
  if (propOneindex === propOneImages.length) {propOneindex = 0}
  else if (propOneindex < 0) {propOneindex = propOneImages.length - 1}

  loadFirstImage(propOneImages[propOneindex])
}
// Calls function to load first image in first property slideshow
loadFirstImage(propOneImages[propOneindex]);






//Selecting second slideshow images tag 
const propTwoImages = document.getElementById('propTwoImages');

//Array of second slideshow of images
let propTwoImagesArray = 
['../Home Page/3211 N McKinley Photos/01_3211_n_mckinley_ave_001_mls.jpg', 
'../Home Page/3211 N McKinley Photos/02_3211_n_mckinley_ave_002_mls.jpg', 
'../Home Page/3211 N McKinley Photos/03_3211_n_mckinley_ave_003_mls.jpg', 
'../Home Page/3211 N McKinley Photos/04_3211_n_mckinley_ave_004_mls.jpg'];

// Second property index number 
let propTwoIndex = 0;

// Loads second property image 
function loadSecondPropImg (img) {
  propTwoImages.src = img;
}

// Changes index number when clicked
function propTwoChangeImg(direction){
  propTwoIndex += (direction === 'next' ? 1 : -1);

  if (propTwoIndex === propTwoImagesArray.length) {propTwoIndex = 0}
  else if (propTwoIndex < 0) {propTwoIndex = propTwoImagesArray.length - 1}

  loadSecondPropImg(propTwoImagesArray[propTwoIndex])
}

//this calls to load the first image in second slide show
loadSecondPropImg(propTwoImagesArray[propTwoIndex]);
