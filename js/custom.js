document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("scroll", function scrollPage() {
    const myHeader = document.getElementById("myHeader").offsetHeight;
    var screenHeight = window.innerHeight;
    let scroll = document.documentElement.scrollTop;
    // console.log(myHeader);
    const res = myHeader + 100;
    const about = document.getElementById("about");
    const leaves = document.getElementById("leaves");
    const mySkills = document.getElementById("skills");
    if (scroll > 100) {
      about.style.opacity = 1;
      about.classList.add("myAbout");
      setTimeout(() => {
        leaves.style.visibility = visible;
      }, 1000);
    }
    console.log(myHeader);
    if (scroll > myHeader) {
      mySkills.style.opacity = 1;
      mySkills.classList.add("mySkills");
      console.log("success");
    }
  });
});
