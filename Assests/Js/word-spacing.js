let inputs = document.querySelectorAll(".field input");

inputs.forEach((inp) => inp.addEventListener("input", generateShadow));

function generateShadow() {
  let wSpacing = document.getElementById("word-spacing").value;

  let wordSpace = `${wSpacing}px`;

  document.getElementById("element").style.wordSpacing = wordSpace;
  document.getElementById("copyCode").innerHTML = `word-spacing: ${wordSpace};`;
};


generateShadow();
