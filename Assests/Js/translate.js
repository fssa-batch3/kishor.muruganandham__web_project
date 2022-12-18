let inputs = document.querySelectorAll(".field input");

inputs.forEach((inp) => inp.addEventListener("input", generateTranslate));

function generateTranslate() {
  let xTranslate = document.getElementById("xTranslate").value;
  let yTranslate = document.getElementById("yTranslate").value;

  let xyTranslate = `translate(${xTranslate}px, ${yTranslate}px)`;

  document.getElementById("element").style.transform = xyTranslate;
  document.getElementById("copyCode").innerHTML = `transform: ${xyTranslate};`;
};


generateTranslate();