// query select the img element
var $img = document.querySelector('img');
// cCI1= currentCarouselIndex
var currentCarouselItem = 0;
// query select previous icon
var $previousIcon = document.querySelector('.fa-thin.fa-angle-left');
// query select next icon
var $nextIcon = document.querySelector('.fa-thin.fa-angle-right');
// create and click event listener function to check the  previous icon click event fires
$previousIcon.addEventListener('click', $handlePreviousIcon);
// query parent container of all i elements
function $handlePreviousIcon(event) {
  $iContainerChildren[currentCarouselItem].setAttribute('class', 'fa-regular fa-circle margin-right');
  if (currentCarouselItem === 0) {
    currentCarouselItem = pokemonImages.length - 1;
  } else {
    currentCarouselItem -= 1;
  }
  $img.setAttribute('src', pokemonImages[currentCarouselItem]);
  $iContainerChildren[currentCarouselItem].setAttribute('class', 'fa-solid fa-circle margin-right');
}
// create and click event listener function to check the next icon click event fires
$nextIcon.addEventListener('click', $handleNextIcon);

function $handleNextIcon(event) {
  // console.log('clicking $nextIcon works');
  // for (var i = 0; i < pokemonImages.length; i++) {
  //   if ($img.getAttribute('src') === pokemonImages[i]) {
  //     $img.setAttribute('src', pokemonImages[i += 1]);
  //   } else if ($img.getAttribute('src') === pokemonImages[pokemonImages.length - 1]) {
  //     $img.setAttribute('src', pokemonImages[0]);
  //   }
  // }
  $iContainerChildren[currentCarouselItem].setAttribute('class', 'fa-regular fa-circle margin-right');
  currentCarouselItem += 1;
  if (currentCarouselItem === pokemonImages.length) {
    currentCarouselItem = 0;
  }
  $img.setAttribute('src', pokemonImages[currentCarouselItem]);
  $iContainerChildren[currentCarouselItem].setAttribute('class', 'fa-solid fa-circle margin-right');
}

// create an array consisting of the image file paths

var pokemonImages = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png'
];

var $iContainer = document.getElementById('progress-container');
var $iContainerChildren = $iContainer.children;

$iContainer.addEventListener('click', $nextProgressIcon);

function $nextProgressIcon(event) {
  $handleNextIcon();
}
