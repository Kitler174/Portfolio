var infolist = {};
window.addEventListener('load', function() {
    const about = document.getElementById("about");
    const element_p = about.querySelectorAll('p');
    about.style.transition = "height 1s ease, margin 1s ease";
    let totalHeight = 0;
    let gigaheig = 0;
    element_p.forEach(function(paragraph, index) {
        gigaheig += paragraph.clientHeight+15;
    });
    gigaheig+=30
    console.log(gigaheig);
    about.style.height = gigaheig + "px";  
    element_p.forEach(function(paragraph, index) {
        setTimeout(function() {
            totalHeight += paragraph.clientHeight+15; 
            gigaheig -= paragraph.clientHeight+15; 
            about.style.height = totalHeight + 150 + "px"; 
            about.style.marginBottom = gigaheig + "px"; 
            paragraph.style.opacity = "1";
            paragraph.style.transform = "translateX(0)";
        }, index * 1000);
    });
});

function suw(act,pp,inform,th){
        var infs = infolist[inform];
        var index = infs[2];
        var el1 = document.getElementById(pp+index);
        if (act == 2){
            if (index < infs[0]){
                index++;
                document.getElementById("in_"+infs[1]).textContent = index+"/"+infs[0];
                infolist[inform] = [infs[0], infs[1], index];
            }
            else {
                th.style.backgroundColor = "red";
                th.style.transform = "rotate(5deg)";
            
                setTimeout(() => {
                    th.style.transform = "rotate(-5deg)";
                }, 100);
            
                setTimeout(() => {
                    th.style.backgroundColor = "#3b5998";
                    th.style.transform = "rotate(5deg)";
                }, 200);
            
                setTimeout(() => {
                    th.style.transform = "rotate(-5deg)";
                }, 300);
                setTimeout(() => {
                    th.style.transform = "rotate(0)";
                }, 300);
            }
            var el2 = document.getElementById(pp+index)
            el1.style.transform = "translateX(-120%)"
            el1.className = "additionals_inact"
            el2.className = "additionals_"
            el2.style.transform = "translateX(0)"
        }     
        else{
            if (index > 1){
                index--;
                infolist[inform] = [infs[0], infs[1], index];
                document.getElementById("in_"+infs[1]).textContent = index+"/"+infs[0];
            }
            else {
                th.style.backgroundColor = "red";
                th.style.transform = "rotate(5deg)";
            
                setTimeout(() => {
                    th.style.transform = "rotate(-5deg)";
                }, 100);
            
                setTimeout(() => {
                    th.style.backgroundColor = "#3b5998";
                    th.style.transform = "rotate(5deg)";
                }, 200);
            
                setTimeout(() => {
                    th.style.transform = "rotate(-5deg)";
                }, 300);
                setTimeout(() => {
                    th.style.transform = "rotate(0)";
                }, 300);
            }
            
            var el2 = document.getElementById(pp+index)
            el1.style.transform = "translateX(120%)"
            el1.className = "additionals_inact"
            el2.className = "additionals_"
            el2.style.transform = "translateX(0)"
        }
}

const lis = ['projectsai','projectsfulls']
document.addEventListener('DOMContentLoaded', function() {
    lis.forEach(function(param, index) {
        var element = document.getElementById(param).querySelectorAll(".additionals_inact").length+1;
        infolist[param] = [element, index, 1];
        document.getElementById("in_"+index).textContent = "1/"+element;
    })
});