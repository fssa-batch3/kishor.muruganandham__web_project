let inputs = document.querySelectorAll(".field input");

inputs.forEach((inp) => inp.addEventListener("input", generateDropShadow));

function generateDropShadow() {
  let hShadow = document.getElementById("hdShadow").value;
  let vShadow = document.getElementById("vdShadow").value;
  let bShadow = document.getElementById("bdShadow").value;
  let cShadow = document.getElementById("bg-color").value;
  let ImgPathValue = document.getElementById("image-url").value;

  let dropShadow =  `drop-shadow(${hShadow}px ${vShadow}px ${bShadow}px ${cShadow})`;


  document.querySelector("#element img").style.filter = dropShadow;
  document.querySelector("#element img").src = ImgPathValue;
  document.getElementById("copyCode").innerHTML = `filter: ${dropShadow};`;
};


generateDropShadow();