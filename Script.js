// Donation form submission
document.getElementById('donation-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var amount = document.getElementById('amount').value;
  var paymentMethod = document.getElementById('payment-method').value;
  alert('Thank you for your donation of $' + amount + ' via ' + paymentMethod + '!');
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  alert('Thank you for your message, ' + name + '! We will get back to you at ' + email + ' as soon as possible.');
});

// Search form submission
document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var searchTerm = document.getElementById('search-term').value;
  alert('Searching for ' + searchTerm + '...');
});

// Video play/pause
document.getElementById('video-play-pause').addEventListener('click', function() {
  var video = document.getElementById('video');
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

// Audio play/pause
document.getElementById('audio-play-pause').addEventListener('click', function() {
  var audio = document.getElementById('audio');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

// Login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  if (username === 'admin' && password === 'password') {
    alert('Login successful!');
  } else {
    alert('Invalid username or password.');
  }
});

// User registration form submission
document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var firstName = document.getElementById('first-name').value;
  var lastName = document.getElementById('last-name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  alert('Thank you for registering, ' + firstName + ' ' + lastName + '! Your email is ' + email + ' and your password is ' + password + '.');
});

// Complaints/feedback form submission
document.getElementById('feedback-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var feedback = document.getElementById('feedback').value;
  alert('Thank you for your feedback, ' + name + '! We will get back to you at ' + email + ' as soon as possible.');
});