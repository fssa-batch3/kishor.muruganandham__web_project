let selector = document.querySelectorAll(".field select");
let inputs = document.querySelectorAll(".field input");

selector.forEach((selc) => selc.addEventListener("change", generateBackgroundImage));
inputs.forEach((inp) => inp.addEventListener("input", generateBackgroundImage));

function generateBackgroundImage() {
  let PositionValue = document.getElementById("position").value;
  let SizeValue = document.getElementById("size").value;
  let RepeatValue = document.getElementById("repeat").value;
  let ClipValue = document.getElementById("clip").value;
  let AttachmentValue = document.getElementById("attachment").value;
  let BgColorValue = document.getElementById("bg-color").value;
  let ImgPathValue = document.getElementById("image-url").value;


  let BackgroundImageValue = `${BgColorValue} url("${ImgPathValue}") ${PositionValue}/${SizeValue} ${RepeatValue} ${ClipValue} ${AttachmentValue}`;


    console.log(document.getElementById("bg-color").value)
    console.log(document.getElementById("image-url").value)
    console.log(document.getElementById("repeat").value)
    console.log(document.getElementById("clip").value)
    console.log(document.getElementById("attachment").value)

  document.getElementById("element").style.background = BackgroundImageValue;
  document.getElementById("copyCode").innerHTML = `background: ${BackgroundImageValue};`;

};


generateBackgroundImage();
