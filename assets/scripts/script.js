// toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// active links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // remove toggle
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

//scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});
ScrollReveal().reveal('.home-content', {origin: 'top'});
ScrollReveal().reveal('.home-img', {origin: 'bottom'});
ScrollReveal().reveal('.about,.portfolio', {origin: 'left'});
ScrollReveal().reveal('.skills, .contact', {origin: 'right'});

//typed js
const typed = new Typed('.multiText',{
    strings: ['Front-end Developer','Back-end Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// send email
const sendEmail = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('number').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    let body = "Name:" + name + "<br/> Email:" + email +"<br/> Contact Number:" + number +"<br/> Subject:"+ subject + "<br/> Message:" + message; 
    Email.send({
        SecureToken : "1595d964-a185-438f-8fe4-a0950f388297",
        To : 'tabingomc@gmail.com',
        From :'tabingomc@gmail.com',
        Subject : "Message From Contact Form",
        Body : body
    }).then(
       swal("Thank you!", "Kindly wait for reply.", "success")
    );
}