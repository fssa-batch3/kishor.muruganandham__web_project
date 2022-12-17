let selector = document.getElementById("radius-type");

let inputs = document.querySelectorAll(".field input");

inputs.forEach((inp) => inp.addEventListener("input", generateShadow));

function generateShadow() {
  selector.addEventListener("change", function () {
    if (selector.value == "same") {
      document.querySelector(".same-radius").style.display = "block";
      document.querySelectorAll(".diff-radius").forEach(function (el) {
        el.style.display = "none";
        
      });
    } else {
      document.querySelector(".same-radius").style.display = "none";
      document.querySelectorAll(".diff-radius").forEach(function (el) {
        el.style.display = "block";
        
      });
    }
  });
  

  let bRadius = document.getElementById("border-radius").value;

  let bStyle = `${bRadius}px`;

  document.getElementById("element").style.borderRadius = bStyle;
  document.getElementById("copyCode").innerHTML = `border-radius: ${bStyle};`;

  let topLeft = document.getElementById("to-le-ra").value;
  let topRight = document.getElementById("to-ri-ra").value;
  let bottomLeft = document.getElementById("bo-le-ra").value;
  let bottomRight = document.getElementById("bo-ri-ra").value;

  let bdStyle = `${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px`;

  document.getElementById("element").style.borderRadius = bdStyle;
  document.getElementById("copyCode").innerHTML = `border-radius: ${bdStyle};`;


  
}

generateShadow();
