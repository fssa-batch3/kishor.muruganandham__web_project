let inputs = document.querySelectorAll(".field input");

inputs.forEach((inp) => inp.addEventListener("input", generateLetterSpacing));

function generateLetterSpacing() {
  let lSpacing = document.getElementById("letter-spacing").value;

  let letterSpace = `${lSpacing}px`;

  document.getElementById("element").style.letterSpacing = letterSpace;
  document.getElementById("copyCode").innerHTML = `letter-spacing: ${letterSpace};`;
};


generateLetterSpacing();
