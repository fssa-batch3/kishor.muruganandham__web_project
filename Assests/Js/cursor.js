let inputs = document.querySelectorAll(".field select");

inputs.forEach((inp) => inp.addEventListener("change", generateCursor));

function generateCursor() {
  let cursorType = document.getElementById("cur-style").value;


  document.getElementById("element").style.cursor = cursorType;
  document.getElementById("copyCode").innerHTML = `cursor: ${cursorType};`;

};


generateCursor();
