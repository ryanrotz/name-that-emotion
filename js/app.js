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
// var storedLevelOneArray = [];


var levelOneArray = [];

var levelOneNewArray = [];
var correctSelection;

var levelTwoArray = [
{name: "shy", link: "https://atrts.files.wordpress.com/2010/06/shy.jpeg"},
{name: "afraid", link: "http://vaxtruth.org/wordpress/wp-content/uploads/2012/05/child-200x300.jpg"},
{name: "excited", link: "https://melissakircher.files.wordpress.com/2013/12/excited.jpeg"},
{name: "bored", link: "http://i.huffpost.com/gen/1867389/thumbs/h-KID-BORED-960x540.jpg"},
{name: "surprised", link: "https://s3.amazonaws.com/lifesite/shocked_face_child.jpg"},
]

var counter;

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



// Call the reset function when the page loads.
// levelOneArray is mixed up and the top 4 objects are pushed to levelOneNewArray.
// The game is ready to play.
initialize();
reset();

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

// resets for next play
function reset () {

  levelOneArray.sort(function() { return 0.5 - Math.random() });
  levelOneNewArray = [];
  for(i = 0; i < 4; i++) {
    levelOneNewArray.push(levelOneArray[i]);
  }

  $('#imagebox').html('');
  $('#button1').html('');
  $('#button2').html('');
  $('#button3').html('');
  $('#button4').html('');
};

$('#resetbutton').click(function() {
  // $('#imagebox').html('');
  // $('#button1').html('');
  // $('#button2').html('');
  // $('#button3').html('');
  // $('#button4').html('');
  initialize();
  reset();

});


function play() {
  // if(levelOneArray.length < 5) {
  //   console.log('level one complete');
  //   $('#levelOneComplete').modal();
  // };

  // The first element is selected. The image appears and the name is stored in a variable "correctSelection"
  $('#imagebox').html("<img class='img-responsive' src="+levelOneNewArray[0].link+">");
    correctSelection = levelOneNewArray[0].name;

  // Mixes up the objects in the NEW array but puts them in a new order
  // so that the first button isn't always the correct answer.
  levelOneNewArray.sort(function() { return 0.5 - Math.random() });

// Since the array is already mixed up we can plug the objects into the buttons in any order
  $('#button1').html("<button type='button'>"+levelOneNewArray[0].name+"</button>");
  $('#button2').html("<button type='button'>"+levelOneNewArray[1].name+"</button>");
  $('#button3').html("<button type='button'>"+levelOneNewArray[2].name+"</button>");
  $('#button4').html("<button type='button'>"+levelOneNewArray[3].name+"</button>");



};

$('#start').click(function() {
  play();
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
    reset();
    play();
  }
});

$('#keepTryingButton').click(function(){
  reset();
  play();
})








// loop 4 times
//   $(div to attach img).append("<img src="+levelOne[random math].link+">")
//   $(div to attach button).append("<button>"+levelOne[random math].name+"</button>")

// DONE Function that pulls emotions from an array and puts them in button1, 2, 3, 4


// DONE Function that determines if the correct answer/button is pushed


// Function that displays "Correct" popup or "Keep Trying" popup

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
