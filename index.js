let previouslyClearedText = "";

function clearText() {
  console.log(previouslyClearedText);
  previouslyClearedText = document.querySelector("#quick-notes").value;
  document.querySelector("#quick-notes").value = "";
  console.log(previouslyClearedText);
}

function returnText() {
  console.log(previouslyClearedText);
  document.querySelector("#quick-notes").value = previouslyClearedText;
  previouslyClearedText = "";
}

function copyText() {
  text = document.querySelector("#quick-notes").value;
  var input = document.createElement('textarea');
  input.innerHTML = text;
  document.body.appendChild(input);
  input.select();
  var result = document.execCommand('copy');
  document.body.removeChild(input);
  return result;

}

function downloadText() {
  
}