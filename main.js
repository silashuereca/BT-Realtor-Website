//Selecting the closebtn for the overlay menu
let navObj = {
  overlayNavContainer: document.getElementById('myNav'),
  menuBars: document.getElementById('icon')
}

//This button opens the navigation to 100% width
function openNav() {
  navObj.overlayNavContainer.style.width = '100%';
  navObj.menuBars.style.display = 'none';
}

//This button closes the navigation menu to 0% width
function closeNav() {
  navObj.overlayNavContainer.style.width = '0';
  navObj.menuBars.style.display = 'block';
}


//JQUERY
$(document).ready(function(){
  // This selects the images in the index.html file to sift through each image automatically
  $('.fadein img:gt(0)').hide();
	setInterval(function(){
    $('.fadein :first-child')
    .fadeOut()
    .next('img')
    .fadeIn()
    .end()
    .appendTo('.fadein');}, 5000);


    //This selects the middle image on the second home page to show the instagram icon
    $('#instaContainer').mouseover(function(){
     
      $('.underConstruction').css('display', 'none');
      $('#instaIcon').css('display', 'block');
    })

    // this function makes the under construction title visible again and making the instagram icon's display 'none'
    $('#instaContainer').mouseout(function(){
      

      $('.underConstruction').css('display', 'block');
      $('#instaIcon').css('display', 'none');
    })

});





//Selecting second slideshow images tag 
const propTwoImages = document.getElementById('propTwoImages');

//Array of second slideshow of images
let propTwoImagesArray = 
['../Photos/3211 N McKinley Photos/01_3211_n_mckinley_ave_001_mls.jpg', 
'../Photos/3211 N McKinley Photos/02_3211_n_mckinley_ave_002_mls.jpg', 
'../Photos/3211 N McKinley Photos/03_3211_n_mckinley_ave_003_mls.jpg', 
'../Photos/3211 N McKinley Photos/04_3211_n_mckinley_ave_004_mls.jpg'];

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
