var storedText;

fetch('https://cdn.jsdelivr.net/gh/kreatornusa/wikichord/license/copyright.txt')
  .then(function(response) {
    response.text().then(function(text) {
      storedText = text;
      done();
    });
  });

function done() {
  document.getElementById('copyright').textContent =
    storedText;
}
