let inputs = document.querySelectorAll(".field input");

inputs.forEach((inp) => inp.addEventListener("input", generateShadow));

function generateShadow() {
  let hShadow = document.getElementById("hshadow").value;
  let vShadow = document.getElementById("vshadow").value;
  let bShadow = document.getElementById("bshadow").value;
  let oShadow = document.getElementById("oshadow").value;
  let cShadow = document.getElementById("cshadow").value;

  let boxShadow = `${hShadow}px ${vShadow}px ${bShadow}px ${hexToRgba(cShadow,oShadow)}`;

  document.getElementById("element-text").style.textShadow = boxShadow;
  document.getElementById("copyCode").innerHTML = `text-shadow: ${boxShadow};`;
};
function hexToRgba(cShadow, oShadow) {
  let r = parseInt(cShadow.substr(1, 2), 16);
  let g = parseInt(cShadow.substr(3, 2), 16);
  let b = parseInt(cShadow.substr(5, 2), 16);
  return `rgba(${r},${g},${b},${oShadow})`;
};

generateShadow();