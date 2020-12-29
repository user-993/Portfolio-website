const header = document.getElementById('header');






window.onscroll = function () {
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 4 ) {
      header.classList.add("black_header");
    } 
    else {
      header.classList.remove("black_header");
    }
};

