
// In this Function the sidebar is toggled open and close
function closeMenu() {
// Get the Classlist of Hamburger Menu and toggle it
  document.querySelector(".closeMenu").classList.toggle("active-hamburger");
  // Get the Classlist of Sidebar and toggle it
  document.querySelector("aside").classList.toggle("active-aside");
  // Get the Classlist of empty div used to blur the background
  document.querySelector(".back-blur").classList.toggle("blur-active");
}

// In this Function the Customized Code is Copied by User with One Click
function copyCode() {
  var copyText = document.getElementById("copyCode").innerHTML;
// Copies the code to user clipboard
  navigator.clipboard.writeText(copyText);
// Changing the innerHtml of button when it is coppied
  document.getElementById("copyButton").innerHTML = "Copied 🎉";
// Setting Timeout function for the Copied InnerHtml
  function timeOut() {
    document.getElementById("copyButton").innerHTML = "Copy to Clipboard!";
  }
// Timeout is set for 5 seconds
  setTimeout(timeOut, 5000);
}

// Get the current value of the "dark-mode" key from local storage
let isDarkMode = localStorage.getItem("dark-mode");

// If the value is "true", set the "dark-mode" class on the <body> element
if (isDarkMode === "true") {
  document.querySelector(":root").classList.add("dark-mode");
}
// Add an event listener to the dark mode toggle button
function darkMode() {
  // If the "dark-mode" class is set on the <body> element
  if (document.querySelector(":root").classList.contains("dark-mode")) {
    // Remove the class and set the "dark-mode" key to "false" in local storage
    document.querySelector(":root").classList.remove("dark-mode");
    document.querySelector(".dark-light").classList.remove("dl-active");
    localStorage.setItem("dark-mode", "false");
  } else {
    // Add the class and set the "dark-mode" key to "true" in local storage
    document.querySelector(":root").classList.add("dark-mode");
    document.querySelector(".dark-light").classList.add("dl-active");
    localStorage.setItem("dark-mode", "true");
  }
}



