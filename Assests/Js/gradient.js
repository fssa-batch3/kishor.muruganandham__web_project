let inputs = document.querySelectorAll(".field input");
let selector = document.querySelectorAll(".field select");

inputs.forEach((inp) => inp.addEventListener("input", generateGradient));
selector.forEach((selc) => selc.addEventListener("change", generateGradient));

function generateGradient() {
  let showHide = document.getElementById("gradient-type").value;

  if (showHide === "radial") {
    document.querySelector(".linear").style.display = "none";
    // document.querySelectorAll(".linear").forEach(function (el) {
    //   el.style.display = "none";});
    let color1 = document.getElementById("Color-1").value;
    let color2 = document.getElementById("Color-2").value;

    let gradientColorValue = `radial-gradient(${color1}, ${color2})`;

    document.getElementById("element").style.background = gradientColorValue;
    document.getElementById("copyCode").innerHTML = `background: ${gradientColorValue};`;
  } else if (showHide === "linear") {
    document.querySelector(".linear").style.display = "block";
    // document.querySelectorAll(".linear").forEach(function (el) {
    //   el.style.display = "block";});

    let direction = document.querySelectorAll('input[name="direction"]');
    let color1 = document.getElementById("Color-1").value;
    let color2 = document.getElementById("Color-2").value;

    for (let i = 0; i < direction.length; i++) {
      if (direction[i].checked) {
        direction[i].previousElementSibling.firstChild.style.setProperty("--pure-black","#5551ff");
        let directionValue = direction[i].value;

        let gradientColorValue = `linear-gradient(${directionValue}, ${color1}, ${color2})`;

        document.getElementById("element").style.background =
          gradientColorValue;
        document.getElementById("copyCode").innerHTML = `background: ${gradientColorValue};`;
      } else {
        direction[i].previousElementSibling.firstChild.style.setProperty("--pure-black","inherit");
      }
    }
  }
}

generateGradient();
