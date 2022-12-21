let inputs = document.querySelectorAll(".field input");

inputs.forEach((inp) => inp.addEventListener("input", generateLineHeight));

function generateLineHeight() {
  let lHeight = document.getElementById("line-height").value;
  let fSize = document.getElementById("Font-Size").value + 'px';

  let lineheight = `${lHeight}px`;

  document.getElementById("element").style.lineHeight = lineheight;
  document.getElementById("element").style.fontSize = fSize;
  document.getElementById("copyCode").innerHTML = `line-height: ${lineheight};`;
};


generateLineHeight();
