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
    about.style.height = gigaheig + 220 + "px";  
    element_p.forEach(function(paragraph, index) {
        setTimeout(function() {
            totalHeight += paragraph.clientHeight; 
            gigaheig -= paragraph.clientHeight; 
            about.style.height = totalHeight + 220 + "px"; 
            about.style.marginBottom = gigaheig+ 20 + "px"; 
            paragraph.style.opacity = "1";
            paragraph.style.transform = "translateX(0)";
        }, index * 1000);
    });
});

var index = 1;
const b1 = document.getElementById("button1");
const b2 = document.getElementById("button2");
function suw(act){
        var el1 = document.getElementById("projekt"+index)
        
        if (act == 2){
            if (index < 5){
                index++;
            }
            else {
                b2.style.backgroundColor = "red";
                b2.style.transform = "rotate(5deg)";
            
                setTimeout(() => {
                    b2.style.transform = "rotate(-5deg)";
                }, 100);
            
                setTimeout(() => {
                    b2.style.backgroundColor = "#3b5998";
                    b2.style.transform = "rotate(5deg)";
                }, 200);
            
                setTimeout(() => {
                    b2.style.transform = "rotate(-5deg)";
                }, 300);
                setTimeout(() => {
                    b2.style.transform = "rotate(0)";
                }, 300);
            }
            var el2 = document.getElementById("projekt"+index)
            el1.style.transform = "translateX(-120%)"
            el1.className = "additionals_inact"
            el2.className = "additionals_"
            el2.style.transform = "translateX(0)"
        }     
        else{
            if (index > 1){
                index--;
            }
            else {
                b1.style.backgroundColor = "red";
                b1.style.transform = "rotate(5deg)";
            
                setTimeout(() => {
                    b1.style.transform = "rotate(-5deg)";
                }, 100);
            
                setTimeout(() => {
                    b1.style.backgroundColor = "#3b5998";
                    b1.style.transform = "rotate(5deg)";
                }, 200);
            
                setTimeout(() => {
                    b1.style.transform = "rotate(-5deg)";
                }, 300);
                setTimeout(() => {
                    b1.style.transform = "rotate(0)";
                }, 300);
            }
            
            var el2 = document.getElementById("projekt"+index)
            el1.style.transform = "translateX(120%)"
            el1.className = "additionals_inact"
            el2.className = "additionals_"
            el2.style.transform = "translateX(0)"
        }
}