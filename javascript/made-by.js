var storedText;

fetch('https://cdn.jsdelivr.net/gh/kreatornusa/wikichord/license/made-by.txt')
  .then(function(response) {
    response.text().then(function(text) {
      storedText = text;
      done();
    });
  });

function done() {
  document.getElementById('made-by').textContent =
    storedText;
}
