let inputs = document.querySelectorAll(".field input");
let selector = document.querySelectorAll(".field select");

inputs.forEach((inp) => inp.addEventListener("input", generateBorderRadius));
selector.forEach((selc) => selc.addEventListener("change", generateBorderRadius));

function generateBorderRadius() {
  let bRadius = document.getElementById("border-radius").value;
  let topLeftRadius = document.getElementById("to-le-ra").value;
  let topRightRadius = document.getElementById("to-ri-ra").value;
  let bottomLeftRadius = document.getElementById("bo-le-ra").value;
  let bottomRightRadius = document.getElementById("bo-ri-ra").value;
  let showHide = document.getElementById("radius-type").value;


  

  if (showHide === 'same') {
          document.querySelector(".same-radius").style.display = "block";
      document.querySelectorAll(".diff-radius").forEach(function (el) {
        el.style.display = "none";});
        let bStyle = `${bRadius}px`;
        document.getElementById("element").style.borderRadius = bStyle;
  document.getElementById("copyCode").innerHTML = `box-shadow: ${bStyle};`;
}
  else if (showHide === 'different'){
      document.querySelector(".same-radius").style.display = "none";
      document.querySelectorAll(".diff-radius").forEach(function (el) {
        el.style.display = "block";});
  let bStyle = `${topLeftRadius}px ${topRightRadius}px ${bottomLeftRadius}px ${bottomRightRadius}px`;
  document.getElementById("element").style.borderRadius = bStyle;
  document.getElementById("copyCode").innerHTML = `box-shadow: ${bStyle};`;
  
}




};


generateBorderRadius();

