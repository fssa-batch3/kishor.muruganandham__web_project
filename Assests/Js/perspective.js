let inputs = document.querySelectorAll(".field input");

inputs.forEach((inp) => inp.addEventListener("input", generateShadow));

function generateShadow() {
  let Length = document.getElementById("length").value;
  let xRotate = document.getElementById("rotatex").value;
  let yRotate = document.getElementById("rotatey").value;


  let Lengths = `${Length}px`;
  let xyRotate = `rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;

  document.getElementById("element").style.perspective = Lengths;
  document.getElementById("element-text").style.transform = xyRotate;
  document.getElementById("copyCodeChild").innerHTML = `transform: ${xyRotate}; \n transform-style: preserve-3d;`;
  document.getElementById("copyCode").innerHTML = `perspective: ${Lengths};`;
};
console.log(document.getElementById("rotatex").value)

generateShadow();