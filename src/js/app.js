$(document).ready(function() {

  // $.get('data.json', function(data) {
  //   console.log();
  // })

// Create an object that includes the images and their associated feeling:

// var levelOne {
//   hurt:
//   guilty:
//   tired:
//   jealous:
//   hopeful:
//   bored:
//   proud:
//   sorry:
//   embarrassed:
// };

// var levelTwoArray = [
// {name: "shy", link: "https://atrts.files.wordpress.com/2010/06/shy.jpeg"},
// {name: "afraid", link: "http://vaxtruth.org/wordpress/wp-content/uploads/2012/05/child-200x300.jpg"},
// {name: "excited", link: "https://melissakircher.files.wordpress.com/2013/12/excited.jpeg"},
// {name: "bored", link: "http://i.huffpost.com/gen/1867389/thumbs/h-KID-BORED-960x540.jpg"},
// {name: "surprised", link: "https://s3.amazonaws.com/lifesite/shocked_face_child.jpg"},
// ]


var levelOneArray = [];
var levelOneNewArray = [];
var levelTwoArray = [];
var levelTwoNewArray = [];
var correctSelection;
var counter;
var level;


// When the page is loaded the start button should be big and in the middle
// of the screen. The header should be hidden.

$('#startGame').click(function() {
  // e.preventDefault();
  console.log('game started');
  $('.intro').hide();
  $('.board').show();
  initialize();

  levelOneNewArray = reset(levelOneArray, levelOneNewArray);
  play(levelOneNewArray);
});



// Calls the initialize and reset functions when the page loads.
// The reset button does the same thing.
// The game is ready to play. The play must then click the start button


function initialize () {
  levelOneArray = [
  {name: "shy", link: "https://atrts.files.wordpress.com/2010/06/shy.jpeg"},
  {name: "afraid", link: "http://vaxtruth.org/wordpress/wp-content/uploads/2012/05/child-200x300.jpg"},
  {name: "excited", link: "https://melissakircher.files.wordpress.com/2013/12/excited.jpeg"},
  {name: "bored", link: "http://i.huffpost.com/gen/1867389/thumbs/h-KID-BORED-960x540.jpg"},
  {name: "surprised", link: "https://s3.amazonaws.com/lifesite/shocked_face_child.jpg"},
  {name: "happy", link: "http://www.dennyzen.com/wp-content/uploads/2014/04/child-happy-face.jpg"},
  {name: "sad", link: "https://s-media-cache-ak0.pinimg.com/736x/44/4c/2b/444c2b1160898a5ecaa3b925cbb4d3df.jpg"},
  {name: "nervous", link: "http://previews.123rf.com/images/zurijeta/zurijeta0908/zurijeta090801040/5444732-Stress-expression-on-little-blond-kid-s-face-Stock-Photo-child-nervous-anxious.jpg"},
  {name: "confused", link: "http://www.livescience.com/images/i/000/057/745/original/confused-kid.jpg"}
];
  counter = 0;
  $('#points').text('Points: '+counter);
}

function initializeLevelTwo () {
  levelTwoArray = [
  {name: "shy", link: "https://atrts.files.wordpress.com/2010/06/shy.jpeg"},
  {name: "afraid", link: "http://vaxtruth.org/wordpress/wp-content/uploads/2012/05/child-200x300.jpg"},
  {name: "excited", link: "https://melissakircher.files.wordpress.com/2013/12/excited.jpeg"},
  {name: "bored", link: "http://i.huffpost.com/gen/1867389/thumbs/h-KID-BORED-960x540.jpg"},
  {name: "surprised", link: "https://s3.amazonaws.com/lifesite/shocked_face_child.jpg"},
  {name: "happy", link: "http://www.dennyzen.com/wp-content/uploads/2014/04/child-happy-face.jpg"},
  {name: "sad", link: "https://s-media-cache-ak0.pinimg.com/736x/44/4c/2b/444c2b1160898a5ecaa3b925cbb4d3df.jpg"},
  {name: "nervous", link: "http://previews.123rf.com/images/zurijeta/zurijeta0908/zurijeta090801040/5444732-Stress-expression-on-little-blond-kid-s-face-Stock-Photo-child-nervous-anxious.jpg"},
  {name: "confused", link: "http://www.livescience.com/images/i/000/057/745/original/confused-kid.jpg"}
];
  // counter = 0;
  $('#points').text('Points: '+counter);
}



// resets for next play
// levelOneArray is mixed up and the top 4 objects are pushed to levelOneNewArray.
function reset (array, newArray) {

  array.sort(function() { return 0.5 - Math.random() });
  newArray = [];
  for(i = 0; i < 4; i++) {
    newArray.push(array[i]);
  }

  $('#imagebox').html('');
  $('#button1').html('');
  $('#button2').html('');
  $('#button3').html('');
  $('#button4').html('');
  return newArray;
};


function play(newArray) {
  // if(levelOneArray.length < 5) {
  //   console.log('level one complete');
  //   $('#levelOneComplete').modal();
  // };

  // The first element is selected. The image appears and the name is stored in a variable "correctSelection"
  $('#imagebox').html("<img class='img-responsive' src="+newArray[0].link+">");
    correctSelection = newArray[0].name;

  // Mixes up the objects in the NEW array but puts them in a new order
  // so that the first button isn't always the correct answer.
  newArray.sort(function() { return 0.5 - Math.random() });

// Since the array is already mixed up we can plug the objects into the buttons in any order
  $('#button1').html("<button type='button'>"+newArray[0].name+"</button>");
  $('#button2').html("<button type='button'>"+newArray[1].name+"</button>");
  $('#button3').html("<button type='button'>"+newArray[2].name+"</button>");
  $('#button4').html("<button type='button'>"+newArray[3].name+"</button>");
};


$('#resetbutton').click(function() {
  // $('#imagebox').html('');
  // $('#button1').html('');
  // $('#button2').html('');
  // $('#button3').html('');
  // $('#button4').html('');
  initialize();
  reset(levelOneArray, levelOneNewArray);
});


$('#start').click(function() {
  play(levelOneNewArray);
});


// Tells us if the correct button is pushed
$('#button1, #button2, #button3, #button4').click(function(){
  if($(this).text() === correctSelection) {
    console.log('correct!');
    //e.preventDefault();
    $('#correctModal').modal();
    // add points here???
  } else {
      // pop up "keepTryingModal" modal
      console.log('incorrect');
      $('#keepTryingModal').modal();
        // reset(); // reset button --> might just want to put this in the modal instead
  }
});

// FOR LEVEL ONE
// The "Next" button in the "Correct" modal.
// When pressed the modal hides, game is reset, and points are stored
$('#correctNextButton').click(function(){
  levelOneArray.splice(0,1);
  counter++;
  $('#points').text('Points: '+counter);

  if(levelOneArray.length < 5) {
    console.log('level one complete');
    $('#levelOneComplete').modal();
  }else {
    reset(levelOneArray, levelOneNewArray);
    play(levelOneArray);
  }
});
// The "Next" button in the "Keep Trying" modal
$('#keepTryingButton').click(function(){
  reset(levelOneArray, levelOneNewArray);
  play(levelOneArray);
})

$('#startLevelTwoButton').click(function(){
  reset(levelTwoArray, levelTwoNewArray);
  play(levelTwoArray);
});


// FOR LEVEL TWO
$('#correctNextButtonLevelTwo').click(function(){
  levelTwoArray.splice(0,1);
  counter++;
  $('#points').text('Points: '+counter);

  if(levelTwoArray.length < 5) {
    console.log('level two complete');
    $('#levelTwoComplete').modal();
  }else {
    reset(levelTwoArray, levelTwoNewArray);
    play(levelOneArray);
  }
});
// The "Next" button in the "Keep Trying" modal
$('#keepTryingButtonLevelTwo').click(function(){
  reset(levelTwoArray, levelTwoNewArray);
  play(levelOneArray);
})

$('#startLevelThreeButton').click(function(){
  reset(levelThreeArray);
  playLevelTwo(levelThreeArray);
});








// $('button').on('click', function() {
//     $(this).animate({backgroundColor: 'green'});
//   });







// loop 4 times
//   $(div to attach img).append("<img src="+levelOne[random math].link+">")
//   $(div to attach button).append("<button>"+levelOne[random math].name+"</button>")

// DONE Function that pulls emotions from an array and puts them in button1, 2, 3, 4


// DONE Function that determines if the correct answer/button is pushed


// DONE Function that displays "Correct" popup or "Keep Trying" popup

// Function that displays the completed emotion in the "Correct" popup

// Function that determines whether to (from the popup window) go back to
// the game board or to the "You completed Level X" page

// Function that displays list of completed emotions in the "You completed Level X" page

// Funtion that determines whether to display "Start" level" 2" "Start level 3" or "Get Trophy"





// Javascript/html/css for two popups.
// Javascript/html/css for "you completed level X" page
// Javascript/html/css for Trophy page
// Javascript/html/css for home page



});  // end of document.ready function. Don't put any code after this.






//var levelOneObj = [];
// var numberOfButtons = 4;



// var levelTwo = [
//   {name:frightened, link: ""},
//   {name: suspicious, link: ""},
//   disappointed:
//   curious:
//   horrified:
//   relieved:
//   arrogant:
// ]

// var leveThree = [
//   disgusted:
//   anxious:
//   cautious:
//   indifferent:
//   innocent:
//   interested:
//   mischevious:
//   perplexed:
//   satisfied:
//   shocked:
// ]


// Function that pulls a random image from an array and displays it in the "image box"
// var randomN;

// function randomNumber (array) {
//   randomN = Math.floor(Math.random()*array.length);
// };

// randomNumber(levelOneArray);

// for(i = 0; i < numberOfButtons; i++) {
//   randomNumber(levelOneArray);
//   levelOneObj[i] = levelOneArray[randomN];
//   // storedLevelOneArray.push(levelOneArray.splice(randomN, 1)[0]);
// };

// randomNumber();
// var levelOneObj2 = levelOneArray[randomN];
// storedLevelOne.push(levelOne.splice(randomN, 1)[0]);

// randomNumber();
// var levelOneObj3 = levelOneArray[randomN];
// storedLevelOne.push(levelOne.splice(randomN, 1)[0]);

// randomNumber();
// var levelOneObj4 = levelOneArray[randomN];
// storedLevelOne.push(levelOne.splice(randomN, 1)[0]);

// var levelOneImage = levelOne[Math.floor(Math.random()*levelOne.length)];
// var levelOneImage2 = levelOne[Math.floor(Math.random()*levelOne.length)];
// var levelOneImage3 = levelOne[Math.floor(Math.random()*levelOne.length)];
// var levelOneImage4 = levelOne[Math.floor(Math.random()*levelOne.length)];


//console.log(levelOneObj);

// // mixes up the objects in the array into a new order
// levelOneArray.sort(function() { return 0.5 - Math.random() });

// // Push the first four objects of the mixed up array into a new array
// for(i = 0; i < 4; i++) {
//   levelOneNewArray.push(levelOneArray[i]);
// }
