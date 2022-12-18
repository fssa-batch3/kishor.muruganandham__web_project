let inputs = document.querySelectorAll(".field input");

inputs.forEach((inp) => inp.addEventListener("input", generateSkew));

function generateSkew() {
  let xSkew = document.getElementById("xSkew").value;
  let ySkew = document.getElementById("ySkew").value;

  let xySkew = `skew(${xSkew}deg, ${ySkew}deg)`;

  document.getElementById("element").style.transform = xySkew;
  document.getElementById("copyCode").innerHTML = `transform: ${xySkew};`;
};


generateSkew();