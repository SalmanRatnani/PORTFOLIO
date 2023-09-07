let sections = document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
            sec.classList.add();
        }
        else{
            sec.classList.remove();
        }
    })
}
const typed = new Typed('.multiple-text', {
    strings: ['WEB DEVELOPER', 'MACHINE LEARNING', 'PROGRAMMING', 'DESIGNER', 'EDITOR', 'BUSINESS MANAGEMENT'],
    stringsElement : null,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
