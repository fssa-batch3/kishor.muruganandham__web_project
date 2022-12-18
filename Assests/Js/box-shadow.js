let inputs = document.querySelectorAll(".field input");

inputs.forEach((inp) => inp.addEventListener("input", generateBoxShadow));

function generateBoxShadow() {
  let hShadow = document.getElementById("hshadow").value;
  let vShadow = document.getElementById("vshadow").value;
  let bShadow = document.getElementById("bshadow").value;
  let sShadow = document.getElementById("sshadow").value;
  let oShadow = document.getElementById("oshadow").value;
  let iShadow = document.getElementById("ishadow").checked;
  let cShadow = document.getElementById("cshadow").value;

  let boxShadow = iShadow
    ? `inset ${hShadow}px ${vShadow}px ${bShadow}px ${sShadow}px ${hexToRgba(cShadow,oShadow)}`
    : `${hShadow}px ${vShadow}px ${bShadow}px ${sShadow}px ${hexToRgba(cShadow,oShadow)}`;

  document.getElementById("element").style.boxShadow = boxShadow;
  document.getElementById("copyCode").innerHTML = `box-shadow: ${boxShadow};`;
};
function hexToRgba(cShadow, oShadow) {
  let r = parseInt(cShadow.substr(1, 2), 16);
  let g = parseInt(cShadow.substr(3, 2), 16);
  let b = parseInt(cShadow.substr(5, 2), 16);
  return `rgba(${r},${g},${b},${oShadow})`;
};

generateBoxShadow();