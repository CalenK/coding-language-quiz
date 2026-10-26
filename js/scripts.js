function hiddenResults() {
  document.getElementById("java-script").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");
  let resetBtn = document.querySelector("button#reset");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    hiddenResults();
    const oop = document.querySelector('input[name="oop"]:checked').Value;
    const dynamic = document.querySelector('input[name="dynamic"]:checked').value;
    const execution = document.querySelector('input[name="execution"]:checked').value;
    const syntax = document.querySelector('input[name="syntax"]:checked').value;
    const concurrency = document.querySelector('input[name="concurrency"]:checked').value;
  })
})