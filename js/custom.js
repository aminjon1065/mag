document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("scroll", function scrollPage() {
        let mybutton = document.getElementById("myBtn");
        const myHeader = document.getElementById("myHeader").offsetHeight;
        var screenHeight = window.innerHeight;
        let scroll = document.documentElement.scrollTop;
        // console.log(myHeader);
        const res = myHeader + 100;
        const about = document.getElementById("about");
        const leaves = document.getElementById("leaves");
        const mySkills = document.getElementById("skills");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
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

        function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
    });
});

