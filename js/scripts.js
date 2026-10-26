function hiddenResults() {
  document.getElementById("java-script").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    hiddenResults();
    const oop = document.querySelector('input[name="oop"]:checked').value;
    const dynamic = document.querySelector('input[name="dynamic"]:checked').value;
    const execution = document.querySelector('input[name="execution"]:checked').value;
    const syntax = document.querySelector('input[name="syntax"]:checked').value;
    const concurrency = document.querySelector('input[name="concurrency"]:checked').value;

    if (oop === "prototype" && (dynamic === "weak") && (execution === "compiled") && (syntax === "c-style") && (concurrency === "event-loop")) {
      document.getElementById("java-script").removeAttribute("class");
    } else if (oop === "class" && (dynamic === "strong") && (execution === "interpreted") && (syntax === "significant-whitespace") && (concurrency === "gll")) {
      document.getElementById("python").removeAttribute("class");
    } else if (oop ==="class" && (dynamic === "strong") && (execution === "interpreted") && (syntax === "keyword-based") && (concurrency === "gll")) {
      document.getElementById("ruby").removeAttribute("class");
    }
  });
});