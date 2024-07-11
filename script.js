let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

//about section function
var tablinks =document.getElementsByClassName("tab-links");
var tabcontents =document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}



menuIcon.onclick =() => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll =() =>{
    sections.forEach( sec =>{
        let top=window.scrollY;
        let offset= sec.offsetTop - 150;
        let heigth =sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top >= offset && top < offset + heigth){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[herf*=' + id + ']').classList.add('active');

            });


        };
    });

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrolly >100);



    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content,heading',{origin:'top'});

ScrollReveal().reveal('.home-img,.mywork-box',{origin:'buttom'});

ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});

ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});


