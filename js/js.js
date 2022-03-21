function home() {
  var mymenu = document.getElementById("menu");

  var displaySetting = mymenu.style.display;

  if (displaySetting == "block") {
    mymenu.style.display = "none";
  } else {
    mymenu.style.display = "block";
  }
}

window.addEventListener("resize", function (event) {
  const pageWidth = document.documentElement.scrollWidth;
  var mymenu = document.getElementById("menu");
  if (pageWidth > 750) {
    mymenu.style.display = "block";
  }

  if (pageWidth < 750) {
    mymenu.style.display = "none";
  }
});
