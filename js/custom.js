document.addEventListener("DOMContentLoaded", function () {
  const myHeader = document.getElementById("myHeader").clientHeight;
  var screenHeight = window.innerHeight;

  console.log(scroll);
  function opacityZero() {
    let scroll = document.documentElement.scrollTop;
    console.log(scroll);
    if (scroll > myHeader) {
      const about = document.getElementById("about");
      about.classList.remove('opacity-0')
    }
  }
  opacityZero();
});
