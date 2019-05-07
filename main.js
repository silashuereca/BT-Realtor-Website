
//Main welcome page automated slider 
let index = 0;
let images = [];
let time = 4000;


// Image List 
images[0] = '../Photos/1833 W. Park Place Photos/03_1833_W_Park_Place_003_mls.jpg';
images[1] = '../Photos/1833 W. Park Place Photos/04_1833_W_Park_Place_004_mls.jpg';
images[2] = '../Photos/1833 W. Park Place Photos/05_1833_W_Park_Place_005_mls.jpg';

// Change Image
function changeImg() {
  document.slide.className += 'fadeOut';
  document.slide.src = images[index]
  setTimeout(function(){
    document.slide.src = images[index];
    document.slide.className = "";
  }, 1000)
  index++;
  if (index == images.length){index = 0;} 

  setTimeout(changeImg, time)
  
}
changeImg();








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
