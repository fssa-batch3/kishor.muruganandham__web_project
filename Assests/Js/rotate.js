let inputs = document.querySelectorAll(".field input");

inputs.forEach((inp) => inp.addEventListener("input", generateRotate));

function generateRotate() {
  let xRotate = document.getElementById("xRotate").value;
  let yRotate = document.getElementById("yRotate").value;
  let zRotate = document.getElementById("zRotate").value;

  let xyzRotate = `rotateX(${xRotate}deg) rotateY(${yRotate}deg) rotateZ(${zRotate}deg)`;

  document.getElementById("element").style.transform = xyzRotate;
  document.getElementById("copyCode").innerHTML = `transform: ${xyzRotate};`;
};


generateRotate();