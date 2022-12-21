let inputs = document.querySelectorAll(".field select");

inputs.forEach((inp) => inp.addEventListener("change", generateTextTransform));

function generateTextTransform() {
  let textType = document.getElementById("text-transform").value;


  document.getElementById("element").style.textTransform = textType;
  document.getElementById("copyCode").innerHTML = `text-transform: ${textType};`;

};


generateTextTransform();
