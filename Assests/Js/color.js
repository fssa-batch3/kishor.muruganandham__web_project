let inputs = document.querySelectorAll(".field input");

inputs.forEach((inp) => inp.addEventListener("input", generateRotate));

function generateRotate() {
  let txtColor = document.getElementById("text-color").value;
  let bgColor = document.getElementById("bg-color").value;



  document.getElementById("element").style.backgroundColor = bgColor;
  document.getElementById("element").style.color = txtColor;
  document.getElementById("copyCode").innerHTML = `color: ${txtColor}; <br> background-color: ${bgColor}; `;
};


generateRotate();