// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function liker(event) {
  const heart = event.target;
    mimicServerCall()
    .then(function (success) {
      alert(success)
      if(heart.innerText === EMPTY_HEART) { 
      heart.innerText = FULL_HEART
      heart.className = "activated-heart"
      } else { 
      heart.innerText = EMPTY_HEART
      heart.className = ""
      }
    })
    .catch(function(error) {
      const hidden = document.getElementById("modal")
      hidden.className = ""
      hidden.innerText = "Random server error. Try again.";
      setTimeout(() => hidden.className = "hidden", 3000);
    })
}


const allOfTheHearts = document.querySelectorAll(".like-glyph")
for (const heart of allOfTheHearts) {
   heart.addEventListener("click", liker);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
