// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!
document.querySelectorAll('.like-glyph').forEach(function (likeGlyph) {
  likeGlyph.addEventListener('click', function (event) {
    if (event.target.classList.contains('activated-heart')) {
      event.target.classList.remove('activated-heart');
      event.target.innerHTML = EMPTY_HEART;
    } else {
      mimicServerCall().then((result) => {
        console.log(result);
        let heart = event.target;
        heart.classList.add('activated-heart');
        heart.innerHTML = FULL_HEART;
      }).catch((error) => {
        console.log(error);
        document.querySelector('#modal').classList.remove('hidden');
        document.querySelector('#modal-message').innerHTML = error;
        setTimeout(function () {
          document.querySelector('#modal').classList.add('hidden');
        }, 3000);
      });
    }
  });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
