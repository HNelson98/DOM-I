const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



const links = document.getElementsByTagName('a');

links[0].textContent = siteContent['nav']['nav-item-1'];
links[1].textContent = siteContent['nav']['nav-item-2'];
links[2].textContent = siteContent['nav']['nav-item-3'];
links[3].textContent = siteContent['nav']['nav-item-4'];
links[4].textContent = siteContent['nav']['nav-item-5'];
links[5].textContent = siteContent['nav']['nav-item-6'];
 
document.querySelector('h1').textContent = "DOM Is Awesome";

document.querySelector('button').textContent = siteContent['cta']['button'];

const ctaImg =
document.querySelector('#cta-img');

ctaImg.src = siteContent['cta']['img-src'];

const mainContentH4 = 
document.querySelectorAll('h4');

mainContentH4[0].textContent = siteContent ['main-content']['features-h4'];
mainContentH4[1].textContent = siteContent ['main-content']['about-h4'];
mainContentH4[2].textContent = siteContent ['main-content']['services-h4'];
mainContentH4[3].textContent = siteContent ['main-content']['product-h4'];
mainContentH4[4].textContent = siteContent ['main-content']['vision-h4'];


const mainContentP = 
document.querySelectorAll('p');

mainContentP[0].textContent = siteContent ['main-content']['features-content'];
mainContentP[1].textContent = siteContent ['main-content']['about-content'];
mainContentP[2].textContent = siteContent ['main-content']['services-content'];
mainContentP[3].textContent = siteContent ['main-content']['product-content'];
mainContentP[4].textContent = siteContent ['main-content']['vision-content'];


document.querySelector('#middle-img').src = siteContent ['main-content']["middle-img-src"]

//contact
mainContentH4[5].textContent = siteContent ['contact']['contact-h4']

mainContentP[5].textContent = siteContent ['contact']['address']
mainContentP[6].textContent = siteContent ['contact']['phone']
mainContentP[7].textContent = siteContent ['contact']['email']


//footer

mainContentP[8].textContent = siteContent ['footer']['copyright']



const newLink1 =
document.createElement('a')

newLink1.textContent = ("Sign In")

const parentElement =
document.querySelector('nav');

parentElement.prepend(newLink1)

const newLink2 =
document.createElement('a')

newLink2.textContent = ("Sign Up")


parentElement.append(newLink2)

Array.from(links).forEach ( element => {
  element.style.color = 'green'})