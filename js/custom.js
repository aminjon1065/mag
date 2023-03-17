document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("scroll", function scrollPage() {
    const myHeader = document.getElementById("myHeader").offsetHeight;
    var screenHeight = window.innerHeight;
    let scroll = document.documentElement.scrollIntoView;
    console.log(screenHeight);
    // console.log(myHeader);
    const res = myHeader+100
    if ( myHeader > 150 ) {
      const about = document
        .getElementById("about")
        .classList.remove("opacity-0");
    }
    opacityZero();
  });
  console.log(scroll);
});
