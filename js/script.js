window.addEventListener('load', function() {
    const about = document.getElementById("about");
    const element_p = about.querySelectorAll('p');
    about.style.transition = "height 1s ease, margin 1s ease";
    let totalHeight = 0;
    let gigaheig = 0;
    element_p.forEach(function(paragraph, index) {
        gigaheig += paragraph.clientHeight;
    });
    console.log(gigaheig);
    about.style.height = gigaheig + 200 + "px";  
    element_p.forEach(function(paragraph, index) {
        setTimeout(function() {
            totalHeight += paragraph.clientHeight; 
            gigaheig -= paragraph.clientHeight; 
            about.style.height = totalHeight + 200 + "px"; 
            about.style.marginBottom = gigaheig+ 20 + "px"; 
            paragraph.style.opacity = "1";
            paragraph.style.transform = "translateX(0)";
        }, index * 500);
    });
});
