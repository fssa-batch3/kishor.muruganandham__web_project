let inputs = document.querySelectorAll(".field input");
let selector = document.querySelectorAll(".field select");

inputs.forEach((inp) => inp.addEventListener("input", generateBorder));
selector.forEach((selc) => selc.addEventListener("change", generateBorder));

function generateBorder() {
  let bgColor = document.getElementById("bg-color").value;
  let bStyle = document.getElementById("bor-style").value;
  let bWidth = document.getElementById("bor-wid").value;

  let borderStyle = `${bWidth}px ${bStyle} ${bgColor}`;

  document.getElementById("element").style.border = borderStyle;
  document.getElementById("copyCode").innerHTML = `border: ${borderStyle};`;
};

generateBorder();
