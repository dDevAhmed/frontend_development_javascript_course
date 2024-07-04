// switching site night mode
document.addEventListener('DOMContentLoaded', () => {
    const modeSwitch = document.getElementById('light-mode');
    const icon = modeSwitch.querySelector('i');
    const navLinksIcons = document.querySelectorAll('a.nav-links > i');
    const navLinksSolidIcons = document.querySelectorAll('a.solid-white > i');
    const mainNavigationLinks = document.querySelectorAll('main.main-container span.navigation a');
    
    modeSwitch.addEventListener('click', (event) => {
        event.preventDefault();
        document.body.classList.toggle('night-mode');
        
        // Toggle the icon
        if (document.body.classList.contains('night-mode')) {
            modeSwitch.setAttribute('title', 'Light Mode');
            // fixme - change the icon
            icon.setAttribute('style', '--fa-primary-color: #000000; --fa-secondary-color: #e5e8ed;');

            for (let i = 0; i < navLinksIcons.length; i++) {
                navLinksIcons[i].setAttribute('style', '--fa-primary-color: #ffffff; --fa-secondary-color: #ffd600;  --fa-secondary-opacity: 1;');
            }

            for (let j = 0; j < navLinksSolidIcons.length; j++) {
                navLinksSolidIcons[j].setAttribute('style', 'color: #ffffff');
            }

            for (let k = 0; k < mainNavigationLinks.length; k++) {
                mainNavigationLinks[k].setAttribute('style', 'color: #ffffff');
            }
        } 
        else {
            modeSwitch.setAttribute('title', 'Night Mode');
            icon.setAttribute('style', '--fa-primary-color: #000000; --fa-secondary-color: #ffd600; --fa-secondary-opacity: 1;');
            for (let i = 0; i < navLinksIcons.length; i++) {
                navLinksIcons[i].setAttribute('style', '--fa-primary-color: #000000; --fa-secondary-color: #ffd600; --fa-secondary-opacity: 1;');
            }

            for (let j = 0; j < navLinksSolidIcons.length; j++) {
                navLinksSolidIcons[j].setAttribute('style', 'color: #000000');
            }

            for (let k = 0; k < mainNavigationLinks.length; k++) {
                mainNavigationLinks[k].setAttribute('style', 'color: #000000');
            }
        }
    });
});
  // switching site night mode
  

// alert('hello world!');

// const primaryColor = '#00004d';
// const secondaryColor = '#4d4d00';
// const secondaryColor = '#fff';

// document.querySelector('body').style.backgroundColor = primaryColor;
// document.querySelector('body').style.color = secondaryColor;
// document.getElementsByClassName('nav-links').style.color = secondaryColor;
// document.getElementsByClassName('nav-links').style.textdecoration = none;

// studName = 'max';
// console.log(studName);




/********************
    index
********************/ 
// document.getElementById('myname').innerText = 'Ahmed Mahmud';
// document.getElementById('name').style.textAlign = 'center';

// document.write('<h1 style="color: orange;">Welcome to Javascript</h1>');


/********************
    class activity 1
********************/ 
// document.getElementById('activity-1').innerText = ('1');
