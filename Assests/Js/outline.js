let inputs = document.querySelectorAll(".field input");
let selector = document.querySelectorAll(".field select");

inputs.forEach((inp) => inp.addEventListener("input", generateBorder));
selector.forEach((selc) => selc.addEventListener("change", generateBorder));

function generateBorder() {
  let bgColor = document.getElementById("bg-color").value;
  let oStyle = document.getElementById("out-style").value;
  let oWidth = document.getElementById("out-wid").value;
  let oOffset = document.getElementById("out-off").value + 'px';

  let outlineStyle = `${oWidth}px ${oStyle} ${bgColor}`;

  document.getElementById("element").style.outline = outlineStyle;
  document.getElementById("element").style.outlineOffset = oOffset;
  document.getElementById("copyCode").innerHTML = `outline: ${outlineStyle}; <br>  outline-offset: ${oOffset};`;
};

generateBorder();
