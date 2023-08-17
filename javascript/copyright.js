var storedText;

fetch('https://cdn.jsdelivr.net/gh/kreatornusa/wikichord/license/license.txt')
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
