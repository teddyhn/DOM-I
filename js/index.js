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

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])

let middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let navItems = document.querySelectorAll("a");
navItems.forEach((link, id) => {
  let navLink = siteContent["nav"][`nav-item-${id + 1}`];
  link.textContent = navLink;
  link.style.color = "green";
})

let h1 = document.querySelector("h1");
h1.textContent = siteContent["cta"]["h1"]

let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"]

let h4Features = document.querySelector(".top-content .text-content:first-child h4");
h4Features.textContent = siteContent["main-content"]["features-h4"]

let contentFeatures = document.querySelector(".top-content .text-content:first-child p");
contentFeatures.textContent = siteContent["main-content"]["features-content"]

let h4About = document.querySelector(".top-content .text-content:last-child h4");
h4About.textContent = siteContent["main-content"]["about-h4"]

let contentAbout = document.querySelector(".top-content .text-content:last-child p");
contentAbout.textContent = siteContent["main-content"]["about-content"]

let h4Services = document.querySelector(".bottom-content .text-content:first-child h4");
h4Services.textContent = siteContent["main-content"]["services-h4"]

let contentServices = document.querySelector(".bottom-content .text-content:first-child p");
contentServices.textContent = siteContent["main-content"]["services-content"]

let h4Product = document.querySelector(".bottom-content .text-content:nth-child(2) h4");
h4Product.textContent = siteContent["main-content"]["product-h4"]

let contentProduct = document.querySelector(".bottom-content .text-content:nth-child(2) p");
contentProduct.textContent = siteContent["main-content"]["product-content"]

let h4Vision = document.querySelector(".bottom-content .text-content:last-child h4");
h4Vision.textContent = siteContent["main-content"]["vision-h4"]

let contentVision = document.querySelector(".bottom-content .text-content:last-child p");
contentVision.textContent = siteContent["main-content"]["vision-content"]

let h4Contact = document.querySelector(".contact h4");
h4Contact.textContent = siteContent["contact"]["contact-h4"]

let addressContact = document.querySelector(".contact p:nth-child(2)");
addressContact.textContent = siteContent["contact"]["address"]

let phoneContact = document.querySelector(".contact p:nth-child(3)");
phoneContact.textContent = siteContent["contact"]["phone"]

let emailContact = document.querySelector(".contact p:last-child");
emailContact.textContent = siteContent["contact"]["email"]

let copyright = document.querySelector("footer p");
copyright.textContent = siteContent["footer"]["copyright"]