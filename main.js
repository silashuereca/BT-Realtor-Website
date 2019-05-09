// //Selecting the closebtn for the overlay menu
// let navObj = {
//   overlayNavContainer: document.getElementById('myNav'),
//   menuBars: document.getElementById('icon')
// }


// function openNav() {
//   navObj.overlayNavContainer.style.width = '100%';
//   navObj.menuBars.style.display = 'none';
// }

// function closeNav() {
//   navObj.overlayNavContainer.style.width = '0';
//   navObj.menuBars.style.display = 'block';
// }




//Main welcome page automated slider with Jquery
$(document).ready(function(){

  $('#autoSlideShow > div:gt(0)').hide();

  setInterval(function(){
    $('#autoSlideShow > div:first')
    .fadeOut(300)
    .next()
    .fadeIn(300)
    .end()
    .appendTo('#autoSlideShow');
  }, 3000);

});





// //Selecting second slideshow images tag 
// const propTwoImages = document.getElementById('propTwoImages');

// //Array of second slideshow of images
// let propTwoImagesArray = 
// ['../Home Page/3211 N McKinley Photos/01_3211_n_mckinley_ave_001_mls.jpg', 
// '../Home Page/3211 N McKinley Photos/02_3211_n_mckinley_ave_002_mls.jpg', 
// '../Home Page/3211 N McKinley Photos/03_3211_n_mckinley_ave_003_mls.jpg', 
// '../Home Page/3211 N McKinley Photos/04_3211_n_mckinley_ave_004_mls.jpg'];

// // Second property index number 
// let propTwoIndex = 0;

// // Loads second property image 
// function loadSecondPropImg (img) {
//   propTwoImages.src = img;
// }

// // Changes index number when clicked
// function propTwoChangeImg(direction){
//   propTwoIndex += (direction === 'next' ? 1 : -1);

//   if (propTwoIndex === propTwoImagesArray.length) {propTwoIndex = 0}
//   else if (propTwoIndex < 0) {propTwoIndex = propTwoImagesArray.length - 1}

//   loadSecondPropImg(propTwoImagesArray[propTwoIndex])
// }

// //this calls to load the first image in second slide show
// loadSecondPropImg(propTwoImagesArray[propTwoIndex]);
